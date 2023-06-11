# Todo App

This is a simple Todo app implemented using Node.js and MySQL. It allows users to create user accounts, manage lists, add items to lists, mark items as completed, and set reminders for lists.

The Todo app is deployed and can be accessed at [Localhost😬](localhost).

## API Endpoints

The Todo app provides the following API endpoints:

- **Create a new user account**

  - URL: `/users`
  - Method: `POST`
  - Request Body:
    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
  - Response:
    - `201 Created` if the user account is created successfully.
    - `400 Bad Request` if the username or password is missing.
    - `500 Internal Server Error` if an error occurs.

- **Create a new list**

  - URL: `/lists`
  - Method: `POST`
  - Request Body:
    ```json
    {
      "userId": 1,
      "name": "Your List Name"
    }
    ```
  - Response:
    - `201 Created` if the list is created successfully.
    - `404 Not Found` if the user is not found.
    - `500 Internal Server Error` if an error occurs.

- **Insert item(s) in a list**

  - URL: `/lists/:listId/items`
  - Method: `POST`
  - Request Body:
    ```json
    {
      "title": "Item Title",
      "description": "Item Description",
      "userId": 1
    }
    ```
  - Response:
    - `201 Created` if the item is created successfully.
    - `404 Not Found` if the list is not found or does not belong to the user.
    - `500 Internal Server Error` if an error occurs.

- **Delete item(s) from a list**

  - URL: `/lists/:listId/items/:itemId`
  - Method: `DELETE`
  - Request Body:
    ```json
    {
      "userId": 1
    }
    ```
  - Response:
    - `200 OK` if the item is deleted successfully.
    - `404 Not Found` if the list is not found or does not belong to the user.
    - `500 Internal Server Error` if an error occurs.

- **Mark an item as completed**

  - URL: `/lists/:listId/items/:itemId`
  - Method: `PATCH`
  - Request Body:
    ```json
    {
      "isCompleted": true,
      "userId": 1
    }
    ```
  - Response:
    - `200 OK` if the item is updated successfully.
    - `404 Not Found` if the list is not found or does not belong to the user.
    - `500 Internal Server Error` if an error occurs.

- **Add a reminder for a list**
  - URL: `/lists/:listId/items/:itemId/reminders`
  - Method: `POST`
  - Request Body:
    ```json
    {
      "reminderDate": "2023-06-10",
      "userId": 1
    }
    ```
  - Response:
    - `201 Created` if the reminder is added successfully.
    - `404 Not Found` if the list is not found or does not belong to the user.
    - `500 Internal Server Error` if an error occurs.

## Error Handling

If any error occurs during the API requests, the server will respond with a JSON object containing an `"error"` field and an appropriate status code. In case of internal server errors,
