import express from "express";
import {
  CreateKategori,
  GetAllKategori,
  GetKategoriById,
  UpdateKategori,
  DeleteKategori,
} from "../controller/KategoriController.js";

const router = express.Router();

router.post("/kategori", CreateKategori);
router.get("/kategori", GetAllKategori);
router.get("/kategori/:id", GetKategoriById);
router.put("/kategori/:id", UpdateKategori);
router.delete("/kategori/:id", DeleteKategori);

export default router;