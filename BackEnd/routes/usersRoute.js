import { Router } from "express";
import userModelClass from "../DAL/models/userModels";

const usersRoute = new Router();
const userModel = new userModelClass();

// Read
usersRoute.get("getAll", (req, res) => {
  userModel
    .getAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

usersRoute.get("getUserById", (req, res) => {
  let id = req.query.id;
  userModel
    .getUserByID(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

usersRoute.get("filterByAge", (req, res) => {
  let minAge = req.query.minAge;
  let maxAge = req.query.maxAge;
  userModel
    .filterByAge(minAge, maxAge)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

// Create
usersRoute.post("create-new-user", (req, res) => {});

export default usersRoute;
