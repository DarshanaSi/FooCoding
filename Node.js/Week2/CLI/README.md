## Setup

To install dependencies, run the following command:

```shell
npm install
```

## Running the Server

To run the application in production mode, use the following command:

```shell
npm run start
```

To run the application in development mode, use the following command:

```shell
npm run start:dev
```

Note: The application in development mode uses the Node.js native watch feature to reload the application after file changes.

### CLI

To run the CLI API without parameters, use the following command:

```shell
node api-cli.js
```

Follow the input questions through the command-line interface (CLI).

### CLI PARAMS

To run the CLI API with parameters, use the following commands:

#### USERS

```shell
node api-cli.js --resource users --method GET --all
node api-cli.js --resource users --method GET --id
node api-cli.js --resource users --method POST
node api-cli.js --resource users --method DELETE --id
node api-cli.js --resource users --method PATCH --id
```

#### POSTS

```shell
node api-cli.js --resource posts --method GET --all
node api-cli.js --resource posts --method GET --id
node api-cli.js --resource posts --method POST
node api-cli.js --resource posts --method DELETE --id
node api-cli.js --resource posts --method PATCH --id
```

---

This is a properly formatted version of the README.md file.
