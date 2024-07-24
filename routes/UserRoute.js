import express from "express";
import {
  CreateUser,
  DeleteUser,
  GetUsers,
  UpdateUser,
} from "../controller/UserController.js";
const router = express.Router();

router.get("/users", GetUsers);
router.post("/createuser", CreateUser);
router.patch("/updateuser", UpdateUser);
router.delete("/deleteuser", DeleteUser);

export default router;
