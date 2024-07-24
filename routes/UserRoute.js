import express from "express";
import {
  CreateUser,
  DeleteUser,
  GetUsers,
  UpdateUser,
} from "../controller/UserController.js";
const router = express.Router();
import upl_user from "../middleware/user.js";


router.get("/users", GetUsers);
// router.post("/createuser", upl_user.single("foto"), CreateUser);
router.post("/createuser", CreateUser);
router.patch("/updateuser", UpdateUser);
router.delete("/deleteuser", DeleteUser);

export default router;
