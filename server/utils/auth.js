const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = process.env.AUTH_SECRET;
const expiration = process.env.AUTH_EXPIRATION;

module.exports = {
    // function for our authenticated routes
    authMiddleware: function ({ req }) {
        console.log("authMiddleware ran");
        let token =
            req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(" ").pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
            console.log(req.user);
        } catch {
            console.log("Invalid token");
        }

        return req;
    },
    signToken: function ({ username, email, _id, isVerified }) {
        const payload = { username, email, _id, isVerified };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
