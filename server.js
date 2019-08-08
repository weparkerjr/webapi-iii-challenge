// REQUIRED MODULES
const express = require('express');
const server = express();
const helmet = require('helmet');


// MIDDLEWARE
server.use(express.json());
server.use(helmet());
server.use(logger);


// USER ROUTER
const userRouter = require("./users/userRouter");
server.use("/api/users", userRouter)


// HOMEPAGE WITH LOGGER
server.get('/', logger, (req, res) => {
  res.send(`<h2>Edwin Parker's webapi-iii AND -iv challenge</h2>`);
});


//CUSTOM MIDDLEWARE
function logger(req, res, next) {
  console.log(new Date().toUTCString());
  // next();
  console.log(`${req.method} Request`);
  // next();
  console.log(req.url);
  next();
};

module.exports = server;
