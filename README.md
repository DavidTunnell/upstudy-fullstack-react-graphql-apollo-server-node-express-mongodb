# Upstudy.io - React, GraphQL, Apollo Server, MongoDB, Mongoose, Node.js, Express.js, Fullstack, MERN

Upstudy is a new way to find relevant learning content by allowing the highest quality material for any subject rise to the top. Currently, there are many different places to look when searching for study material on a particular topic. You might find results at YouTube, Khan Academy or Stack Overflow but which is the best place to spend your time learning? Upstudy allows users to delve into specific study topics and be presented with the top content links as voted by the community as well as meta discussions and moderation on the study topic.

Since you can't fork your own repos, this project was initially duplicated from my [web portfolio repo](https://github.com/DavidTunnell/david-tunnell-dot-com-react-mern). I then integrated the user account, authentication, GraphQL, Apollo server and client functionality from my [reading list search engine repo](https://github.com/DavidTunnell/reading-list-search-engine-graphql-apollo-server-react-node-express-mongodb). The web apps functionality is being built on top of this base.

This project uses the following technologies/libraries.

-   [GraphQL](https://graphql.org/) as an API Querying Language
-   [Apollo-Server-Express](https://www.npmjs.com/package/apollo-server-express) to Run a Spec-Compliant GraphQL Server with Express
-   [@apollo/client](https://www.npmjs.com/package/@apollo/client) to Work with GraphQL on the React App
-   [React](https://reactjs.org/) as a Fast and Powerful Frontend
-   [React-Router-Dom](https://www.npmjs.com/package/react-router-dom) for URL routing, URL parameters, Browser History Stack Usage, and Linking without Calling the Server
-   [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) as a CSS Framework
-   [GO Bootstrap Template](https://themes.getbootstrap.com/product/go-multipurpose-landing-page-template/) as a Template that was Imported into React
-   [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) as the Server for API and HTTP Requests and Serving the React Build Directory Frontend
-   [MongoDB](https://www.mongodb.com/) as a NoSQL Database
-   [Mongoose](https://mongoosejs.com/) for [Object Relational Mapping](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping), Database Interaction, [Routing](https://expressjs.com/en/guide/routing.html) and Collection Generation and Seeding
-   [Nodemon](https://nodemon.io/) for More Pleasant Node.js Development
-   [Bcrypt Package](https://www.npmjs.com/package/bcrypt) for Password Hashing and Management
-   [React-Ga](https://www.npmjs.com/package/react-ga) to Track Website Traffic data with Google Analytics
-   [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
-   [Jwt-Decode](https://www.npmjs.com/package/jwt-decode)
-   [Simple-React-Validator](https://www.npmjs.com/package/simple-react-validator)
-   [Open-Graph-Scraper](https://github.com/jshemas/openGraphScraper)

## Installation

The client and server are two discrete applications. After cloning the repo, simply run `npm install` to get the packages for both the client and server. Then run `npm run dev` to run both the Node sever using Nodemon and the React Client using it's built in dev server. You need to install Concurrently for this command to work. It can be installed with `npm install -g concurrently`. The `npm run start` command is used when deploying the applications to a server.

The application will be available by default at `http://localhost:3000/` and API will be at `http://localhost:3001/graphql` if you are using a local development environment. It's assumed you already have MongoDB running on your development computer.

## GraphQL API

Followed are example queries and mutations that can be run directly against the server.

Get User:

```
query {
  user(userId: "6175968953cf7f1e50489e24") {
        _id
        username
        email
        password
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
    }
  }
}
```

Get Users:

```
query Query {
  users {
    _id
    username
    email
    password
    savedBooks {
        authors
        description
        bookId
        image
        link
        title
    }
  }
}
```

Create User:

```
  mutation {
    addUser(username: "David", email: "david@gmail.com", password: "12345") {
      token
      user {
        _id
        username
      }
    }
  }
```

Login:

```
  mutation {
    login(email: "david@gmail.com", password: "12345") {
      token
      user {
        _id
        username
      }
    }
  }
```

Delete User:

```
  mutation {
    removeUser(userId: "61742c1827db1e3b9c676aa6") {
        _id
        username
    }
  }
```

# Screenshots

## Homepage

<!-- ![Homepage](./assets/homepage.png) -->

## Signup / Login

<!--
![Homepage](./assets/signup.png)
![Homepage](./assets/login.png) -->

## Reading List

<!-- ![Homepage](./assets/list.png) -->

==================

✔️Use React for the front end.
✔️Use GraphQL with a Node.js and Express.js server.
✔️Use MongoDB and the Mongoose ODM for the database.
✔️Include authentication (JWT).
Use queries and mutations for retrieving, adding, updating, and deleting data.
Be deployed using Heroku (with data).
✔️Have a polished UI.
✔️Be responsive.
Be interactive (i.e., accept and respond to user input).
Protect sensitive API key information on the server.

https://slgupta022.medium.com/email-verification-using-sendgrid-in-node-js-express-js-mongodb-c5803f643e09

For link masking from sendgrid if its an issue:

https://app.sendgrid.com/settings/sender_auth/domain/create
https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-link-branding#-What-is-link-branding

TODO:

-                                   {/* add buttons here to return home and resend email validation link
                                    also add use error for mutation calls in login line on https://i.imgur.com/YSTWiYb.png
                                    loading also works for mutation calls
                                    -consider using cache for better performance (reduces db calls)- https://i.imgur.com/kjEpUyZ.png - https://i.imgur.com/TPKx3lO.png
                                    -also, use parameters in routes to pass certain types of data - https://i.imgur.com/PB0o9kF.png
                                    */}

example categories: https://tutorbin.com/online-homework-help/
