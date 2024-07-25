import express from "express";
import {
  CreateDownload,
  GetAllDownloads,
  GetDownloadById,
  UpdateDownload,
  DeleteDownload,
} from "../controller/DownloadController.js";

const router = express.Router();

router.post("/download", CreateDownload);
router.get("/download", GetAllDownloads);
router.get("/download/:id", GetDownloadById);
router.put("/download/:id", UpdateDownload);
router.delete("/download/:id", DeleteDownload);

export default router;