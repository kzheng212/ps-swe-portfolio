// Modules Imports
const fs = require("fs"); // File System Module
// Dependencies Imports
const express = require("express"); // Server-side HTTP Requests
const morgan = require("morgan"); // Middleware
// File Imports (Middlewares, Routes, etc)
const myMiddleware = require("./middlewares/myMiddleware");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const { log } = require("console");

const app = express();
// There are over 60,000 ports, feel free to use different ones, but 3000 is the go to for local development servers

// process.env.PORT --> in the future when using cloud platforms like aws, we may be using another PORT
//? const PORT = 3000 || process.env.PORT;
const PORT = 3000;

// App Engine
app.engine("perscholas", (filePath, options, callback) => {
  // Read the template file
  fs.readFile(filePath, (err, content) => {
    // If there is an error reading the file return!
    if (err) return callback(err);

    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replaceAll("#content#", `${options.content}`);

    return callback(null, rendered);
  });
});

// Config
app.set("views", "./views"); // sets the views for the app
app.set("view engine", "perscholas"); // sets the template engine for the app

// Middleware (using morgan dependencies)
//? Display Input based on morgan(parameter)
//? Ex.
//? morgan(dev) --> displays dev info of http requests

app.use(myMiddleware);
app.use((req, res, next) => {
  console.log("I'm a middleware!");
  next();
});

app.use(morgan("dev"));
app.use(express.static("./styles"));
app.use(express.static("./assets"));

// Routes
app.use("/user", userRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  // res.send("<h1>Hello Express</h1>");
  res.render("index", {title: "Hello Engine!", content: "I am an engine!" });
});

app.get("/current-user", (req, res) => {
  // fetch data from db
  // verify that the user exist
  // verify password
  // send json dat back to client
  res.json({ username: "Abe", role: "dev", id: 123 });
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/download", (req, res)=>{
  res.download("./assets/photo-15.png");
});

app.all("*", (req, res) => {
  res.redirect("/login");
  //? One or the other
  // res.redirect("https://perscholas.org");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
