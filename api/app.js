var express = require('express');
var morgan = require('morgan');
var cors = require('cors');

var cookieParser = require("cookie-parser");
var createError = require("http-errors");
var path = require("path");

var indexRouter = require("./routes/index");
var testAPIRouter = require("./routes/testAPI");
var testDBRouter = require("./routes/testDB");

var app = express();
var PORT = 5000;


app.set('view engine', 'jade');

// setup middlewares

app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/", indexRouter);
app.use("/testAPI", testAPIRouter);
app.use("/testDB", testDBRouter);

app.get('/', (req, res) => {
  res.json('api is working!');
});

// start server
app.listen(PORT, () => {
  console.log(`API is listening on PORT: ${PORT}`);
});



module.exports = app;