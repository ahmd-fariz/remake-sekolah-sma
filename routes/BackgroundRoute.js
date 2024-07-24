import express from "express";
import {
  createBackground,
  getAllBackgrounds,
  getBackgroundById,
  updateBackground,
  deleteBackground,
} from "../controller/BackgroundController.js";

const router = express.Router();

router.post("/backgrounds", createBackground);
router.get("/backgrounds", getAllBackgrounds);
router.get("/backgrounds/:id", getBackgroundById);
router.put("/backgrounds/:id", updateBackground);
router.delete("/backgrounds/:id", deleteBackground);

export default router;
