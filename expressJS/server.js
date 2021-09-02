const express = require("express");
const app = express();
app.set("view engine", "ejs");

// for static htmls, a middleware can be used instead of a route, all files in public folder will be reached throw url like http://localhost:5000/test/tt.html
app.use(express.static("public"));

// to access information from body and be able to access information from forms
app.use(express.urlencoded({ extended: true }));

// to be able to get json request from the body
app.use(express.json());

// The code is used from top to bottom, so if app.use(logger) is placed below app.get('/') then the logger function will not be used with the route '/'
// the functions can also be used with specific requests like app.get('/', logger, (req,res)  => {}) in this case the logger function will only be used with the get('/')
app.use(logger);

// app.get("/", (req, res) => {
//   console.log("Here");
//   // TO SEND A FILE FOR DOWNLOAD
//   //   res.download("server.js");
//   //   res.status(500).json({ message: "Error" });
//   res.render("index", { text: "world" });
// });

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(5000);
