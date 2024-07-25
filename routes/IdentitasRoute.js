import express from "express";
import {
  CreateIdentitas,
  GetAllIdentitas,
  GetIdentitasById,
  UpdateIdentitas,
  DeleteIdentitas,
} from "../controller/IdentitasController.js";

const router = express.Router();

router.post("/identitas", CreateIdentitas);
router.get("/identitas", GetAllIdentitas);
router.get("/identitas/:id", GetIdentitasById);
router.put("/identitas/:id", UpdateIdentitas);
router.delete("/identitas/:id", DeleteIdentitas);

export default router;