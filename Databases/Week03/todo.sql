-- Create the database
CREATE DATABASE todo;

-- Change database
USE todo;

-- Create the Users table
CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Create the Lists table
CREATE TABLE Lists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Create the Items table
CREATE TABLE Items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  list_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP,
  FOREIGN KEY (list_id) REFERENCES Lists(id)
);


-- Create the Tags table
CREATE TABLE Tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Create the Item_Tags junction table
CREATE TABLE Item_Tags (
  item_id INT NOT NULL,
  tag_id INT NOT NULL,
  PRIMARY KEY (item_id, tag_id),
  FOREIGN KEY (item_id) REFERENCES Items(id),
  FOREIGN KEY (tag_id) REFERENCES Tags(id)
);

-- Create the Reminders table
CREATE TABLE Reminders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  list_id INT NOT NULL,
  reminder_date DATE NOT NULL,
  FOREIGN KEY (list_id) REFERENCES Lists(id)
);