## Node.js, Express.js, Mongoose - React Build / API Server

This portion of the repo is for the node.js server that does several things:

-   Serves the React front end application via build folder
-   Connects to a MongoDB NoSQL database for data persistence
-   Models, connects and interacts with data/database using Mongoose
-   Provides an API for CRUD operations to the database server for the react application
-   Seed functionality to populate the collection with documents
-   Nodemon for more pleasant development

### Installation

This project folder will need its own independent running of `npm install` to get node_module dependencies. Rename `.env.EXAMPLE` to `.env` so that the database name is available for local development. It's assumed you already have MongoDB running on your development computer. Run `npm run seed` in this folder to seed the database. As is present in the script section of `package.json` there are several other available commands as well. `npm run start` will start the server but for development `npm run dev` is recommended.

As far as deploying, the react project (root directory) contains the start command needed to both build the react app and run the node server.

## API Calls

Followed are the available API calls which are completely independent of the front end. If this is deployed replace `http://localhost:8000` with the correct domain information.

-   GET - http://localhost:8000/api/blogs/ - Get all microblogs
-   GET - http://localhost:8000/api/blogs/id - Get a specific microblog by id
    -   Example return:
    ```
        {
            "_id": "6168c32df1af5d117bfa154b",
            "createdAt": "2021-10-12T23:54:21.147Z",
            "title": "The standard Lorem Ipsum passage, used since the 1500s",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "author": "Mario"
        }
    ```
-   DELETE - http://localhost:8000/api/blogs/id - Delete a specific microblog by id
-   POST - http://localhost:3001/api/feeds/ - create a new microblog

    -   Body JSON example:

    ```
        {
            "title": "Example title",
            "body": "Example details.",
            "author": "Mario"
        }
    ```
