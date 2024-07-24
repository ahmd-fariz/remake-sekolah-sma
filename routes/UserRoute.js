import express from "express";
import {
  CreateUser,
  DeleteUser,
  GetUserById,
  GetUsers,
  UpdateUser,
} from "../controller/UserController.js";
const router = express.Router();
import upl_user from "../middleware/user.js";


router.get("/users", GetUsers);
// router.post("/createuser", upl_user.single("foto"), CreateUser);
router.post("/createuser", CreateUser);
router.get("/user/:id", GetUserById);
router.patch("/updateuser/:id", UpdateUser);
router.delete("/deleteuser/:id", DeleteUser);

export default router;
