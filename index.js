const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
require("dotenv").config();

const app = express();

const PORTL = process.env.PORT;

const PORT = app.use(
  cookieSession({ name: "session", keys: ["kavi"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "https://illustrious-sorbet-b7ae28.netlify.app/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/auth", authRoute);

app.listen(PORTL, () => {
  console.log(`Server is running at port ${PORTL}!`);
});
