import express from "express";
import {
  createAlbum,
  getAllAlbums,
  getAlbumById,
  updateAlbum,
  deleteAlbum,
} from "../controller/AlbumController.js";

const router = express.Router();

router.post("/album", createAlbum);
router.get("/album", getAllAlbums);
router.get("/album/:id", getAlbumById);
router.put("/album/:id", updateAlbum);
router.delete("/album/:id", deleteAlbum);

export default router;