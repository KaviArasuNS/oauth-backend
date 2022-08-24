var GoogleStrategy = require("passport-google-oauth20").Strategy;
var GithubStrategy = require("passport-github2").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "997458920195-46qgdb46evrenv9a4oibe8624pjte8uu.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "fdf63151bcc99b9b4211";
const GITHUB_CLIENT_SECRET = "bbb5e1639f233ad591042c24115805955b2db315";

const FACEBOOK_APP_ID = "452684750116379";
const FACEBOOK_APP_SECRET = "83e8ce0a884452bd96a1f592bae9163f";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
