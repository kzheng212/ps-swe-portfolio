console.log("Building a simple Express App using 'Mustache View Template'");
// ES6+ JS Exports alterative for import
const express = require("express"); // Node.js framework
const mustache = require("mustache"); // Template Engine
const morgan = require("morgan"); // Middleware

// Setting Port
const app = express();
const PORT = 3000;

// Static files to import the style file
app.use(express.static("./style"));

// Middleware
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   console.log("I am a middleware.");
//   next();
// });

// Creating the view engine
app.set("views", "./views"); // sets the view for the app
app.set("view engine", "mustache"); // sets the template for the app from Mustache File

// Creating a 1st route template of a form from /index.mustache
app.get("/", (req, res) => {
	res.render("form");
});

// Creating a 2nd route template of images from /image.pug file
app.get("/images", (req, res) => {
	res.render("images");
});

// Catching all routes to redirect the user when there is a non-existent endpoint
app.all("*", (req, res) => {
	res.redirect("https://travel.sygic.com/404");
});

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
