import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { clientIDGoogle, clientSecretGoogle } from "../key";
import userModelClass from "../DAL/models/userModels";

const GoogleStrategy = Strategy;
const userModel = new userModelClass();

passport.use(
  new GoogleStrategy(
    {
      clientID: clientIDGoogle,
      clientSecret: clientSecretGoogle,
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log(profile);
        userModel
          .getUserByID(profile.id)
          .then((data) => {
            console.log("Data", data);
            if (data.Length > 0) done(null, { data, existed: true });
            done(null, { profile, existed: false });
          })
          .catch((err) => {
            console.log(err);
            done(err);
          });
      } catch (err) {
        console.log(err);
        done(err);
      }
    }
  )
);
