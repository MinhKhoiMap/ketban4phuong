import mongoose from "mongoose";

const userSchemas = new mongoose.Schema({
  googleID: String,
  name: String,
  birthday: Date,
  gender: String,
  album: Array,
  description: String,
  phoneNumber: String,
  passions: Array,
  lifeStyle: {
    zodiac: String,
    pets: String,
    smoking: String,
    education: String,
  },
  jobTitle: String,
  companyName: String,
  schoolName: String,
  matchConditions: {
    agePreference: Number,
    distancePreference: Number,
    gender: String,
  },
  noMatchList: Array,
});

export default userSchemas;
