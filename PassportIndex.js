// import express from "express";
// // const cookieSession = require("cookie-session");
// const cors = require("cors");
// const passportSetup = require("./passport");
// const passport = require("passport");
// const authRoute = require("./routes/auth");
// require("dotenv").config();

// const whitelist = ["http://localhost:3000", "https://oauth-kavi.netlify.app"];

// const app = express();

// const PORTL = process.env.PORT;

// // const PORT = app.use(
// //   cookieSession({ name: "session", keys: ["kavi"], maxAge: 24 * 60 * 60 * 100 })
// // );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//   cors({
//     origin: whitelist,
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

// // app.use(cors());

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.use("/auth", authRoute);

// app.listen(PORTL, () => {
//   console.log(`Server is running at port ${PORTL}!`);
// });
