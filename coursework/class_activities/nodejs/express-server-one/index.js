// Version 1

/* 
const express = require('express');

const app = express();
const PORT = 3000;

// Version 2

app.get('/', (req , res) => {
    console.log(req.url);

    res.send('<h1>Hello Express</h1>');
});

app.get('/products', (req, res) => {
    console.log(req.url);

    res.send('<h1>Products Page</h1>');
});

app.get('/user', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.send('Sending the user info!');
});

app.post('/user', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.send('Creating new user....')
});


app.get('/user/:userID', (req, res) => {
    console.log('Params Object ==>', req.params.userID);

    res.send('test')
});


app.listen(PORT, () => {
    console.log(`Server is running!`);
}); */

/* const express = require('express');

const app = express();
const PORT = 3000;



app.get('/', (req , res) => {
    console.log(req.url);

    res.send('<h1>Hello Express</h1>');
});

app.get('/products/:productName', (req, res) => {
    console.log(req.url);

    res.send('<h1>Products Page</h1>');
});

app.get('/user', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.send('Sending the user info!');
});

app.post('/user', (req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.send('Creating new user....')
});


app.get('/user/:userID', (req, res) => {
    console.log('Params Object ==>', req.params.userID);

    res.send('test')
});


app.get('/user/:userID/profile/:data', (req, res) => {
    console.log(req.params);

    res.send(`Sending Profile for User: ${req.params.userID}`);
});

app.get('/user/:username/:password', (req, res) => {
    console.log(req.params);

    res.send(`Sending Profile for User: ${req.params.userID}`);
});


app.listen(PORT, () => {
    console.log(`Server is running!`);
}); */

// ES6+ JS Exports alterative for import
const express = require("express");
const productsRouter = require("./routes/products");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log("I am a middleware.");
  next();
});

// Middleware Function
const logger = (req, res, next) => {
  console.log(`Received request to route ${req.url}`);
  next();
};

app.use(logger);
app.use("/products", productsRouter);

// Error Middleware
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

/**
 * Get '/'
 */
app.get("/", (req, res) => {
  console.log(req.url);
  //   throw Error("Something went wrong!");
});
