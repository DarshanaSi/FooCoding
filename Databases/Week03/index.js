const express = require("express");
const mysql = require("mysql2/promise");
const cron = require("node-cron");

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "https://todo-app-nu-ivory.vercel.app/",
  user: "root",
  password: "darshana",
  database: "todo",
  connectionLimit: 10,
});

// Create the Express server
const app = express();
app.use(express.json());

// Create a new user account
app.post("/users", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  try {
    const connection = await pool.getConnection();

    // Insert the new user into the database
    const [result] = await connection.query(
      "INSERT INTO Users (username, password) VALUES (?, ?)",
      [username, password]
    );

    connection.release();

    if (result.affectedRows === 1) {
      return res.status(201).json({ message: "User created successfully" });
    } else {
      console.error("User creation failed. No rows affected.");
      return res.status(500).json({ error: "User creation failed" });
    }
  } catch (error) {
    console.error("User creation failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new list
app.post("/lists", async (req, res) => {
  const { userId, name } = req.body;

  try {
    const connection = await pool.getConnection();

    // Check if the user exists
    const [user] = await connection.query("SELECT * FROM Users WHERE id = ?", [
      userId,
    ]);

    if (!user) {
      connection.release();
      return res.status(404).json({ error: "User not found" });
    }

    // Insert the new list into the database
    const [result] = await connection.query(
      "INSERT INTO Lists (user_id, name, created_at) VALUES (?, ?, CURRENT_TIMESTAMP)",
      [userId, name]
    );

    const listId = result.insertId;

    connection.release();

    res.status(201).json({ message: "List created successfully", listId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Insert item(s) in ToDo list
app.post("/lists/:listId/items", async (req, res) => {
  const { listId } = req.params;
  const { title, description, userId } = req.body;

  try {
    const connection = await pool.getConnection();

    // Check if the list belongs to the user
    const [list] = await connection.query(
      "SELECT * FROM Lists WHERE id = ? AND user_id = ?",
      [listId, userId]
    );

    if (!list) {
      connection.release();
      return res
        .status(404)
        .json({ error: "List not found or does not belong to the user" });
    }

    // Insert the new item into the database
    const [result] = await connection.query(
      "INSERT INTO Items (list_id, title, description) VALUES (?, ?, ?)",
      [listId, title, description]
    );

    const itemId = result.insertId;

    connection.release();

    res.status(201).json({ message: "Item created successfully", itemId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete item(s) in ToDo list
app.delete("/lists/:listId/items/:itemId", async (req, res) => {
  const { listId, itemId } = req.params;
  const { userId } = req.body;

  try {
    const connection = await pool.getConnection();

    // Check if the list belongs to the user
    const [list] = await connection.query(
      "SELECT * FROM Lists WHERE id = ? AND user_id = ?",
      [listId, userId]
    );

    if (!list) {
      connection.release();
      return res
        .status(404)
        .json({ error: "List not found or does not belong to the user" });
    }

    // Delete the item from the database
    await connection.query("DELETE FROM Items WHERE list_id = ? AND id = ?", [
      listId,
      itemId,
    ]);

    connection.release();

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Mark an item as completed
app.patch("/lists/:listId/items/:itemId", async (req, res) => {
  const { listId, itemId } = req.params;
  const { isCompleted, userId } = req.body;

  try {
    const connection = await pool.getConnection();

    // Check if the list belongs to the user
    const [list] = await connection.query(
      "SELECT * FROM Lists WHERE id = ? AND user_id = ?",
      [listId, userId]
    );

    if (!list) {
      connection.release();
      return res
        .status(404)
        .json({ error: "List not found or does not belong to the user" });
    }

    // Update the completion status of the item in the database
    await connection.query(
      "UPDATE Items SET is_completed = ? WHERE list_id = ? AND id = ?",
      [isCompleted ? 1 : 0, listId, itemId]
    );

    connection.release();

    res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add a reminder for an "LIST"
app.post("/lists/:listId/items/:itemId/reminders", async (req, res) => {
  const { listId, itemId } = req.params;
  const { reminderDate, userId } = req.body;

  try {
    const connection = await pool.getConnection();

    // Check if the list belongs to the user
    const [list] = await connection.query(
      "SELECT * FROM Lists WHERE id = ? AND user_id = ?",
      [listId, userId]
    );

    if (!list) {
      connection.release();
      return res
        .status(404)
        .json({ error: "List not found or does not belong to the user" });
    }

    // Add the reminder to the database
    await connection.query(
      "INSERT INTO Reminders (list_id, reminder_date) VALUES (?, ?)",
      [itemId, reminderDate]
    );

    connection.release();

    res.status(201).json({ message: "Reminder added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});
// Scheduled task to delete completed tasks older than 30 days
cron.schedule("0 0 * * *", async () => {
  try {
    const connection = await pool.getConnection();

    // Calculate the date threshold (30 days ago)
    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - 30);

    // Delete completed tasks older than the date threshold
    await connection.query(
      "DELETE FROM Items WHERE is_completed = TRUE AND completed_at < ?",
      [dateThreshold]
    );

    connection.release();

    console.log("Completed tasks older than 30 days have been deleted.");
  } catch (error) {
    console.error(error);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
