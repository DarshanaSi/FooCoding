import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { getRequestData } from "./getRequestData.js";
import { IncomingMessage, ServerResponse } from "http";
import fs from "fs/promises"; // Import the fs module to read and write files

/**
 * This function manages an HTTP request
 *
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
export const requestHandler = async (request, response) => {
  const { headers, method, url } = request;
  const { address, port } = request.socket.server.address();
  const fullEndpoint = `http://${address}:${port}${url}`;

  console.log(url);
  const path = url.split("/")[1];

  switch (path) {
    case "users": {
      const usersPattern = new URLPattern({ pathname: "/users/:id" });
      const usersEndpoint = usersPattern.exec(fullEndpoint);
      const id = usersEndpoint?.pathname?.groups?.id;

      switch (method) {
        case "POST":
          const body = await getRequestData(request);
          const newUser = JSON.parse(body);
          const usersData = await fs.readFile("./data/users.json", "utf-8");
          const users = JSON.parse(usersData);

          // Generate a new ID for the user
          const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
          newUser.id = newId;

          users.push(newUser);
          await fs.writeFile("./data/users.json", JSON.stringify(users));

          response.setHeader("Content-Type", "application/json");
          response.statusCode = StatusCodes.CREATED;
          response.write(JSON.stringify(newUser));
          response.end();
          break;

        case "GET":
          if (id) {
            const usersData = await fs.readFile("./data/users.json", "utf-8");
            const users = JSON.parse(usersData);
            const user = users.find((u) => u.id === Number(id));

            if (user) {
              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.OK;
              response.write(JSON.stringify(user));
              response.end();
            } else {
              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: "User not found",
                })
              );
              response.end();
            }
          } else {
            const usersData = await fs.readFile("./data/users.json", "utf-8");
            const users = JSON.parse(usersData);

            response.setHeader("Content-Type", "application/json");
            response.statusCode = StatusCodes.OK;
            response.write(JSON.stringify(users));
            response.end();
          }
          break;

        case "PATCH":
          if (id) {
            const body = await getRequestData(request);
            const updatedUser = JSON.parse(body);
            const usersData = await fs.readFile("./data/users.json", "utf-8");
            const users = JSON.parse(usersData);

            const index = users.findIndex((u) => u.id === Number(id));

            if (index !== -1) {
              users[index] = { ...users[index], ...updatedUser };
              await fs.writeFile("./data/users.json", JSON.stringify(users));

              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.OK;
              response.write(JSON.stringify(users[index]));
              response.end();
            } else {
              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: "User not found",
                })
              );
              response.end();
            }
          } else {
            response.setHeader("Content-Type", "application/json");
            response.statusCode = StatusCodes.BAD_REQUEST;
            response.write(
              JSON.stringify({
                error: ReasonPhrases.BAD_REQUEST,
                message: "Invalid user ID",
              })
            );
            response.end();
          }
          break;

        case "DELETE":
          if (id) {
            const usersData = await fs.readFile("./data/users.json", "utf-8");
            const users = JSON.parse(usersData);

            const index = users.findIndex((u) => u.id === Number(id));

            if (index !== -1) {
              const deletedUser = users.splice(index, 1)[0];
              await fs.writeFile("./data/users.json", JSON.stringify(users));

              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.OK;
              response.write(JSON.stringify(deletedUser));
              response.end();
            } else {
              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: "User not found",
                })
              );
              response.end();
            }
          } else {
            response.setHeader("Content-Type", "application/json");
            response.statusCode = StatusCodes.BAD_REQUEST;
            response.write(
              JSON.stringify({
                error: ReasonPhrases.BAD_REQUEST,
                message: "Invalid user ID",
              })
            );
            response.end();
          }
          break;

        default:
          break;
      }

      break;
    }

    case "posts": {
      const body = await getRequestData(request);
      const postsPattern = new URLPattern({ pathname: "/posts/:id" });
      const postsEndpoint = postsPattern.exec(fullEndpoint);
      const id = postsEndpoint?.pathname?.groups?.id;

      console.log(
        `Dealing with posts - ID: ${postsEndpoint?.pathname?.groups?.id}`
      );

      switch (method) {
        case "POST":
          const newPost = JSON.parse(body);
          const postsData = await fs.readFile("./data/posts.json", "utf-8");
          const posts = JSON.parse(postsData);

          // Generate a new ID for the post
          const newId =
            posts.length > 0 ? posts[posts.length - 1].post_id + 1 : 1;
          newPost.post_id = newId;

          posts.push(newPost);
          await fs.writeFile("./data/posts.json", JSON.stringify(posts));

          response.setHeader("Content-Type", "application/json");
          response.statusCode = StatusCodes.CREATED;
          response.write(JSON.stringify(newPost));
          response.end();
          break;

        case "GET":
          if (id) {
            const postsData = await fs.readFile("./data/posts.json", "utf-8");
            const posts = JSON.parse(postsData);
            const post = posts.find((p) => p.post_id === Number(id));

            if (post) {
              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.OK;
              response.write(JSON.stringify(post));
              response.end();
            } else {
              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: "Post not found",
                })
              );
              response.end();
            }
          } else {
            const postsData = await fs.readFile("./data/posts.json", "utf-8");
            const posts = JSON.parse(postsData);

            response.setHeader("Content-Type", "application/json");
            response.statusCode = StatusCodes.OK;
            response.write(JSON.stringify(posts));
            response.end();
          }
          break;

        case "PATCH":
          if (id) {
            const body = await getRequestData(request);
            const updatedPost = JSON.parse(body);
            const postsData = await fs.readFile("./data/posts.json", "utf-8");
            const posts = JSON.parse(postsData);

            const index = posts.findIndex((p) => p.post_id === Number(id));

            if (index !== -1) {
              posts[index] = { ...posts[index], ...updatedPost };
              await fs.writeFile("./data/posts.json", JSON.stringify(posts));

              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.OK;
              response.write(JSON.stringify(posts[index]));
              response.end();
            } else {
              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: "Post not found",
                })
              );
              response.end();
            }
          } else {
            response.setHeader("Content-Type", "application/json");
            response.statusCode = StatusCodes.BAD_REQUEST;
            response.write(
              JSON.stringify({
                error: ReasonPhrases.BAD_REQUEST,
                message: "Invalid post ID",
              })
            );
            response.end();
          }
          break;

        case "DELETE":
          if (id) {
            const postsData = await fs.readFile("./data/posts.json", "utf-8");
            const posts = JSON.parse(postsData);

            const index = posts.findIndex((p) => p.post_id === Number(id));

            if (index !== -1) {
              const deletedPost = posts.splice(index, 1)[0];
              await fs.writeFile("./data/posts.json", JSON.stringify(posts));

              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.OK;
              response.write(JSON.stringify(deletedPost));
              response.end();
            } else {
              response.setHeader("Content-Type", "application/json");
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: "Post not found",
                })
              );
              response.end();
            }
          } else {
            response.setHeader("Content-Type", "application/json");
            response.statusCode = StatusCodes.BAD_REQUEST;
            response.write(
              JSON.stringify({
                error: ReasonPhrases.BAD_REQUEST,
                message: "Invalid post ID",
              })
            );
            response.end();
          }
          break;

        default:
          break;
      }

      break;
    }
  }
};
