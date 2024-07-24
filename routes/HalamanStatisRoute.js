import express from "express";
import {
  createHalamanStatis,
  getAllHalamanStatis,
  getHalamanStatisById,
  updateHalamanStatis,
  deleteHalamanStatis,
} from "../controllers/HalamanStatisController.js";

const router = express.Router();

router.post("/halaman-statis", createHalamanStatis);
router.get("/halaman-statis", getAllHalamanStatis);
router.get("/halaman-statis/:id", getHalamanStatisById);
router.put("/halaman-statis/:id", updateHalamanStatis);
router.delete("/halaman-statis/:id", deleteHalamanStatis);

export default router;