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
import verifyToken from "../middleware/token.js";

router.get("/users", verifyToken, GetUsers);
// router.post("/createuser", upl_user.single("foto"), CreateUser);
router.post("/createuser", verifyToken, CreateUser);
router.get("/user/:id", verifyToken, GetUserById);
router.patch("/updateuser/:id", verifyToken, UpdateUser);
router.delete("/deleteuser/:id", verifyToken, DeleteUser);

export default router;
