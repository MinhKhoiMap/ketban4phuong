import { Router } from "express";
import multer from "multer";

const test = Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
// upload.fields();
test.post("", upload.array("album-profile", 6), (req, res) => {
  // console.log("có vô đây nha");
  console.log(req.body, req.files);
  res.redirect("http://localhost:3000/");
});

export default test;
