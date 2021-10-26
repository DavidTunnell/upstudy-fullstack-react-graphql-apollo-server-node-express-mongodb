# Interest Web

interesting site finder/sharer

https://github.com/jshemas/openGraphScraper

Use React for the front end.
Use GraphQL with a Node.js and Express.js server.
Use MongoDB and the Mongoose ODM for the database.
Include authentication (JWT).
Use queries and mutations for retrieving, adding, updating, and deleting data.
Be deployed using Heroku (with data).
Have a polished UI.
Be responsive.
Be interactive (i.e., accept and respond to user input).
Protect sensitive API key information on the server.

working:

```
query Query {
  users {
    _id
    username
    email
    password
    savedBooks {
      _id
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

LOGIN working:

```
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }

  {
    "email": "d@t.com",
    "password": "12345"
  }
```
