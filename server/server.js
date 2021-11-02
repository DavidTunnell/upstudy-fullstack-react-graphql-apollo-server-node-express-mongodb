const express = require("express");
const path = require("path");
const db = require("./config/connection");
const cors = require("cors");

const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schema");
// require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Add context to our server so data from the `authMiddleware()` function can pass data to our resolver functions
    context: authMiddleware,
});
server.start().then(() => {
    server.applyMiddleware({ app });
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
    router.use(express.static(path.join(__dirname, "../client/build")));
    //when the request comes to the server for any route and route you’re trying to access does not exist on the server-side go to the node build/index.html file
    router.sendFile(path.join(__dirname, "../client/build/", "index.html"));
}

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(
            `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
        );
    });
});
