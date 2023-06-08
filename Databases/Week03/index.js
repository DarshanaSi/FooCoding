const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const cron = require("cron");

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "darshana",
  database: "todo",
  connectionLimit: 10,
});

// Create the Express server
const app = express();
app.use(bodyParser.json());

// Insert item(s) in ToDo list
app.post("/lists/:listId/items", async (req, res) => {
  const { listId } = req.params;
  const { title, description } = req.body;

  try {
    const connection = await pool.getConnection();

    // Insert the new item into the database
    await connection.query(
      "INSERT INTO Items (list_id, title, description) VALUES (?, ?, ?)",
      [listId, title, description]
    );

    connection.release();

    res.status(201).json({ message: "Item created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete item(s) in ToDo list
app.delete("/lists/:listId/items/:itemId", async (req, res) => {
  const { listId, itemId } = req.params;

  try {
    const connection = await pool.getConnection();

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

// Create a new ToDo list
app.post("/lists", async (req, res) => {
  const { userId, name } = req.body;

  try {
    const connection = await pool.getConnection();

    // Insert the new list into the database
    await connection.query("INSERT INTO Lists (user_id, name) VALUES (?, ?)", [
      userId,
      name,
    ]);

    connection.release();

    res.status(201).json({ message: "List created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ...

// Delete a ToDo list
app.delete("/lists/:listId", async (req, res) => {
  const { listId } = req.params;

  try {
    const connection = await pool.getConnection();

    // Delete the list and its items from the database
    await connection.query("DELETE FROM Lists WHERE id = ?", [listId]);
    await connection.query("DELETE FROM Items WHERE list_id = ?", [listId]);

    connection.release();

    res.status(200).json({ message: "List deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Mark an item as completed
app.patch("/lists/:listId/items/:itemId", async (req, res) => {
  const { listId, itemId } = req.params;
  const { is_completed } = req.body;

  try {
    const connection = await pool.getConnection();

    // Update the completion status of the item in the database
    await connection.query(
      "UPDATE Items SET is_completed = ? WHERE list_id = ? AND id = ?",
      [is_completed, listId, itemId]
    );

    connection.release();

    res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add a reminder for the list (not for the item)
app.post("/lists/:listId/reminders", async (req, res) => {
  const { listId } = req.params;
  const { reminder_date } = req.body;

  try {
    const connection = await pool.getConnection();

    // Add the reminder to the database
    await connection.query(
      "INSERT INTO Reminders (list_id, reminder_date) VALUES (?, ?)",
      [listId, reminder_date]
    );

    connection.release();

    res.status(201).json({ message: "Reminder added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
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

// ...

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
