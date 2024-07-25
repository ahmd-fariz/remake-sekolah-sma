import express from "express";
import {
  CreateHeader,
  GetAllHeaders,
  GetHeaderById,
  UpdateHeader,
  DeleteHeader,
} from "../controller/HeaderController.js";

const router = express.Router();

router.post("/header", CreateHeader);
router.get("/header", GetAllHeaders);
router.get("/header/:id", GetHeaderById);
router.put("/header/:id", UpdateHeader);
router.delete("/header/:id", DeleteHeader);

export default router;