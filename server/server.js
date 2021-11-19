const express = require("express");
const path = require("path");
const db = require("./config/connection");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schema");

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
    app.use(express.static(path.join(__dirname, "../client/build")));
    //when the request comes to the server for any route and route you’re trying to access does not exist on the server-side go to the node build/index.html file
    // app.sendFile(path.join(__dirname, "../client/build/", "index.html"));
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/", "index.html"));
    });
}

// app.get("*", (req, res) => {
//     let url = path.join(__dirname, "../client/build", "index.html");
//     if (!url.startsWith("/app/"))
//         // since we're on local windows
//         url = url.substring(1);
//     res.sendFile(url);
// });

//start server and listen
db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(
            `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
        );
    });
});
