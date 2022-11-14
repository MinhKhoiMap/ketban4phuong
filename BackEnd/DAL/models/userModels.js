import mongoose from "mongoose";
import userSchemas from "../schemas/userSchemas";

class userModelClass {
  constructor() {
    this.model = mongoose.model("users", userSchemas);
  }

  //   Create a new user
  create(newUser) {
    return this.model.create(newUser);
  }

  //   Research
  getAllUser() {
    return this.model.find();
  }

  getUserByID(googleID) {
    return this.model.find({
      googleID: googleID,
    });
  }

  filterByAge(minAge, maxAge) {
    return this.model.find({
      $year: {
        birthday: {
          $lte: new Date().getFullYear() - maxAge,
          $gte: new Date().getFullYear() - minAge,
        },
      },
    });
  }

  //   Update user profile

  //   Delete user by id
  delete(id) {
    return this.model.findByIdAndDelete(id);
  }
}

export default userModelClass;
