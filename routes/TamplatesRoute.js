import express from "express";
import {
  getTemplates,
  getTemplatesById,
  createTemplates,
  updateTemplates,
  deleteTemplates,
} from "../controller/TamplatesController.js";

const router = express.Router();

router.get("/templates", getTemplates);
router.get("/templates/:id", getTemplatesById);
router.post("/templates", createTemplates);
router.patch("/templates/:id", updateTemplates);
router.delete("/templates/:id", deleteTemplates);

export default router;
