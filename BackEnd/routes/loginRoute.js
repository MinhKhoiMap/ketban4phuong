import { Router } from "express";
import passport from "passport";
import "../middlewares/passport";

const loginRoute = Router();

loginRoute.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

loginRoute.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    console.log("req.user", req.user);
    if (req.user.existed) res.redirect("http://localhost:3000/app/recs");
    res.redirect("http://localhost:3000");
  }
);

export default loginRoute;
