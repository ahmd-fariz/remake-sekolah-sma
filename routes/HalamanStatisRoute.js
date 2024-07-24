import express from "express";
import {
  CreateHalamanStatis,
  GetAllHalamanStatis,
  GetHalamanStatisById,
  UpdateHalamanStatis,
  DeleteHalamanStatis,
} from "../controller/HalamanStatisController.js";

const router = express.Router();

router.post("/halaman-statis", CreateHalamanStatis);
router.get("/halaman-statis", GetAllHalamanStatis);
router.get("/halaman-statis/:id", GetHalamanStatisById);
router.put("/halaman-statis/:id", UpdateHalamanStatis);
router.delete("/halaman-statis/:id", DeleteHalamanStatis);

export default router;