// Configuration of Express.js
// Import Modules
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
require("./passport")(passport); // this is a function, and run it
const path = require("path");

// Router
const authRouter = require("../routes").auth;
const courseRouter = require("../routes").course;
// Middlewares
// Handling Post Request
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// for local transition
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));
// Routing
app.use("/api/user", authRouter);
// Only after login, the user can create or enroll a course
// which means if user have JWT , check the jwt by passport-jwt
// without jwt, the request will be unauthorized
app.use("/api/course", 
    passport.authenticate("jwt", {session: false}),
     courseRouter);


module.exports = app;