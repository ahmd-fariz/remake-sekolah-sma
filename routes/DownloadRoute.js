import express from "express";
import {
  createDownload,
  getAllDownloads,
  getDownloadById,
  updateDownload,
  deleteDownload,
} from "../controllers/DownloadController.js";

const router = express.Router();

router.post("/downloads", createDownload);
router.get("/downloads", getAllDownloads);
router.get("/downloads/:id", getDownloadById);
router.put("/downloads/:id", updateDownload);
router.delete("/downloads/:id", deleteDownload);

export default router;