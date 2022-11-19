import express from "express";
import cors from "cors";
import session from "express-session";
import DatabaseClass from "./DAL/database";
import usersRoute from "./routes/usersRoute";
import loginRoute from "./routes/loginRoute";
import passport from "passport";
import test from "./routes/testRoute";

const app = express();
const db = new DatabaseClass();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(
  session({
    secret: "Ketban4phuong",
    resave: false,
    cookie: { secure: false },
  })
);
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log("ở serialize", user);
  return done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

// app.use("/api/get-sers", usersRoute);
app.use("/auth", loginRoute);
app.use("/test", test);

app.listen(3002, () => {
  console.log("App is listening");
  db.connect()
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      throw err;
    });
});
