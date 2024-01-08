const express = require("express");

const users = require("./data/users");
const posts = require("./data/posts");

// Assigning Express function to Const App
const app = express();
const port = 3000;

/*   
## `app.use(express.json());`
  * This line sets up middleware to parse incoming requests with JSON payloads. 
  * When a client sends a request with a JSON payload in the request body 
  (e.g., in a POST or PUT request), this middleware will parse the JSON data 
  and make it available in the `request.body` object. 
*/

/*   
## `app.use(express.urlencoded({ extended: true }));`
  * This line sets up middleware to parse incoming requests with URL-encoded payloads.
  * URL-encoded data is often sent in the body of a form submitted by a web page. The `extended: true` option allows the parsing of rich objects and arrays from the URL-encoded data.
*/

/* 
## `Overview`
  > Together, these lines enable your Express.js application to handle requests with both JSON and URL-encoded payloads. This is important because different types of clients may send data in different formats, and these middlewares help in parsing and extracting relevant information from the request bodies. 
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * GET /api/users
 */
app
  .route("/api/users")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    if (req.body.name && req.body.username && req.body.email) {
      if (users.find((u) => u.username == req.body.username)) {
        res.json({ error: "Username is taken!" });
        return;
      }

      const user = {
        id: users[users.length - 1].id + 1,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
      };

      users.push(user);
      res.json(users[user.length - 1]);
    } else res.json({ error: "Insufficient data" });
    // console.log(req.body);
    // res.json(req.body);
  });

/**
 * @method GET /api/users/:id
 * @param :id
 */

app.get("/api/users/:id", (req, res, next) => {
  const user = users.find((u) => u.id == req.params.id);
  console.log(user);
  if (user) res.json(user);
  else next();
});

/**
 * GET /api/posts
 *
 */

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

/**
 * GET /api/posts/:id
 */

app.get("/api/posts/:id", (req, res, next) => {
  const post = posts.find((p) => p.id == req.params.id);
  if (post) res.json(post);
  else next();
});

// WIP (Root Route PATH)

app.get("/", (req, res) => {
  res.send("Work in progress");
});

// 404 Status Code = Not Found Middleware
app.use((req, res, next) => {
  res.status(404);
  res.json({ error: "Resource not found!" });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
