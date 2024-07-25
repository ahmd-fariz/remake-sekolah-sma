import express from "express";
import {
  CreateLinkTerkait,
  GetAllLinkTerkait,
  GetLinkTerkaitById,
  UpdateLinkTerkait,
  DeleteLinkTerkait,
} from "../controller/LinkTerkaitController.js";

const router = express.Router();

router.post("/linkterkait", CreateLinkTerkait);
router.get("/linkterkait", GetAllLinkTerkait);
router.get("/linkterkait/:id", GetLinkTerkaitById);
router.put("/linkterkait/:id", UpdateLinkTerkait);
router.delete("/linkterkait/:id", DeleteLinkTerkait);

export default router;