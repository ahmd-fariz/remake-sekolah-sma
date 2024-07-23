import express from "express";
import { GetUsers } from "../controller/UserController.js";
const router = express.Router();

router.get("/users", GetUsers);

export default router;
