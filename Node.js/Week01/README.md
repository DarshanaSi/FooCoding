
1. Create a new user:
   - Method: POST
   - URL: `http://localhost:3000/users`
   - Headers:
     - Key: Content-Type, Value: application/json
   - Body (raw JSON):
     ```json
     {
       "first_name": "Darshana",
       "last_name": "Sirisena",
       "email": "darshanasi@example.com",
       "gender": "Male"
     }
     ```

2. Get all users:
   - Method: GET
   - URL: `http://localhost:3000/users`

3. Get a specific user by ID (replace `:id` with the actual user ID):
   - Method: GET
   - URL: `http://localhost:3000/users/:id`

4. Update a user by ID (replace `:id` with the actual user ID):
   - Method: PATCH
   - URL: `http://localhost:3000/users/:id`
   - Headers:
     - Key: Content-Type, Value: application/json
   - Body (raw JSON):
     ```json
     {
       "first_name": "Updated First Name"
     }
     ```

5. Delete a user by ID (replace `:id` with the actual user ID):
   - Method: DELETE
   - URL: `http://localhost:3000/users/:id`

6. Create a new post:
   - Method: POST
   - URL: `http://localhost:3000/posts`
   - Headers:
     - Key: Content-Type, Value: application/json
   - Body (raw JSON):
     ```json
     {
       "user_id": 1,
       "post_text": "This is a new post",
       "post_date": "2023-06-15",
       "likes": 0,
       "comments": 0,
       "hashtags": "#newpost",
       "location": "Halmstad",
       "post_image": "https://example.com/image.jpg"
     }
     ```

7. Get all posts:
   - Method: GET
   - URL: `http://localhost:3000/posts`

8. Get a specific post by ID (replace `:id` with the actual post ID):
   - Method: GET
   - URL: `http://localhost:3000/posts/:id`

9. Update a post by ID (replace `:id` with the actual post ID):
   - Method: PATCH
   - URL: `http://localhost:3000/posts/:id`
   - Headers:
     - Key: Content-Type, Value: application/json
   - Body (raw JSON):
     ```json
     {
       "post_text": "Updated post text"
     }
     ```

10. Delete a post by ID (replace `:id` with the actual post ID):
    - Method: DELETE
    - URL: `http://localhost:3000/posts/:id`

Note: Make sure to replace `localhost:3000` with the appropriate hostname and port if your server is running on a different address. Also, adjust the request bodies and IDs based on your specific data structure and requirements.
You can use Postman to send these requests and observe the responses from your server.
