import express from "express";
import {
  CreateIklanAtas,
  GetAllIklanAtas,
  GetIklanAtasById,
  UpdateIklanAtas,
  DeleteIklanAtas,
} from "../controller/IklanAtasController.js";

const router = express.Router();

router.post("/iklanatas", CreateIklanAtas);
router.get("/iklanatas", GetAllIklanAtas);
router.get("/iklanatas/:id", GetIklanAtasById);
router.put("/iklanatas/:id", UpdateIklanAtas);
router.delete("/iklanatas/:id", DeleteIklanAtas);

export default router;