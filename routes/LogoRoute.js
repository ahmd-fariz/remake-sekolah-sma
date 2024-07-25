import express from "express";
import {
  CreateLogo,
  GetAllLogo,
  GetLogoById,
  UpdateLogo,
  DeleteLogo,
} from "../controller/LogoController.js";

const router = express.Router();

router.post("/logo", CreateLogo);
router.get("/logo", GetAllLogo);
router.get("/logo/:id", GetLogoById);
router.put("/logo/:id", UpdateLogo);
router.delete("/logo/:id", DeleteLogo);

export default router;