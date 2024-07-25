import express from "express";
import {
  CreateBackground,
  GetAllBackgrounds,
  GetBackgroundById,
  UpdateBackground,
  DeleteBackground,
} from "../controller/BackgroundController.js";

const router = express.Router();

router.post("/background", CreateBackground);
router.get("/background", GetAllBackgrounds);
router.get("/background/:id", GetBackgroundById);
router.put("/background/:id", UpdateBackground);
router.delete("/background/:id", DeleteBackground);

export default router;