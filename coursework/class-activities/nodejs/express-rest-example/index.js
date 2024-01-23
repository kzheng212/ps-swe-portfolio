const express = require("express");

const users = require("./routes/users");
const posts = require("./routes/posts");

// Bringing in error function
const error = require("./utilities/error");

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

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// New logging middleware to help us keep track of
// requests during testing!
app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
  );
  if (Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

// Valid API Keys.
const apiKeys = ["perscholas", "ps-example", "hJAsknw-L198sAJD-l3kasx"];

// New middleware to check for API keys!
// Note that if the key is not verified,
// we do not call next(); this is the end.
// This is why we attached the /api/ prefix
// to our routing at the beginning!
app.use("/api", function (req, res, next) {
  var key = req.query["api-key"];

  // Check for the absence of a key.
  if (!key) next(error(400, "API Key Required"));

  // Check for key validity.
  if (apiKeys.indexOf(key) === -1) next(error(401, "Invalid API Key"));

  // Valid key! Store it in req.key for route access.
  req.key = key;
  next();
});

// Use our Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

// Adding some HATEOAS links.
app.get("/", (req, res) => {
  res.json({
    links: [
      {
        href: "/api",
        rel: "api",
        type: "GET",
      },
    ],
  });
});

// // WIP (Root Route PATH)
// app.get("/", (req, res) => {
//   res.send("Work in progress");
// });

// Adding some HATEOAS links.
app.get("/api", (req, res) => {
  res.json({
    links: [
      {
        href: "api/users",
        rel: "users",
        type: "GET",
      },
      {
        href: "api/users",
        rel: "users",
        type: "POST",
      },
      {
        href: "api/posts",
        rel: "posts",
        type: "GET",
      },
      {
        href: "api/posts",
        rel: "posts",
        type: "POST",
      },
    ],
  });
});

// 404 Status Code = Not Found Middleware
app.use((req, res, next) => {
  next(error, (404, "Resource not found!"));
});

// Error-handling middleware.
// Any call to next() that includes an
// Error() will skip regular middleware and
// only be processed by error-handling middleware.
// This changes our error handling throughout the application,
// but allows us to change the processing of ALL errors
// at once in a single location, which is important for
// scalability and maintainability.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
