const router = require("express").Router();
const path = require("path");

//get api routes for server
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
    router.use(express.static(path.join(__dirname, "../client/build")));
    //when the request comes to the server for any route and route you’re trying to access does not exist on the server-side go to the node build/index.html file
    router.sendFile(path.join(__dirname, "../client/build/", "index.html"));
}

module.exports = router;
