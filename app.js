require("dotenv").config();
const express = require("express");
const path = require('path')
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());
const logFile = path.join(__dirname, 'access.log');

app.use(morgan('combined', {stream : fs.createWriteStream(logFile,{flags: 'a'})}));
app.use(morgan('common'));
app.use(morgan('dev'));
app.use(morgan('tiny'));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use("/api/users", userRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
