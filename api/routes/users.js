import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updetedUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthectication", verifyToken, (req, res, next) => {
//   res.send("You are login successfuly!!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user! You are login and you can delete your account.");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello admin! You are login and you can delete all accounts.");
// });
//UPDATE
router.put("/:id", verifyUser, updetedUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getUsers);
export default router;
