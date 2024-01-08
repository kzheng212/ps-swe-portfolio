// Middle function that always takes 3 parameters (request, response, and next functions)
// We use next is a vanilla middleware function supported by express (meaning we can make our own without relying on frameworks like morgan)
// It can be used in our callback function and as a next() to move on to next(function) or as a return to

// If we don't write next, it doesn't know it is a middleware function
// Middlewares need to be declare before the http requests (Routes || Route Paths || Endpoints).
// Otherwise it does not work

module.exports = function (req, res, next) {
  console.log(`Time: ${Date.now()}`);
  next();
};
