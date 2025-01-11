require("dotenv").config();
const { Candidate } = require("../../models");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    // function (accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    // }

    function (accessToken, refreshToken, candidate, cb) {
      return done(err, candidate);
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((candidate, done) => done(null, candidate.candidate_id));
passport.deserializeUser((id, done) => {
  const candidate = Candidate.find(
    (candidate) => candidate.candidate_id === id
  );
  done(null, candidate);
});
