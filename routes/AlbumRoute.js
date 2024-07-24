import express from "express";
import {
  createAlbum,
  getAllAlbums,
  getAlbumById,
  updateAlbum,
  deleteAlbum,
} from "../controller/AlbumController.js";

const router = express.Router();

router.post("/albums", createAlbum);
router.get("/albums", getAllAlbums);
router.get("/albums/:id", getAlbumById);
router.put("/albums/:id", updateAlbum);
router.delete("/albums/:id", deleteAlbum);

export default router;