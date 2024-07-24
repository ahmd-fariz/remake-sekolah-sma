import express from "express";
import { getHeaders, getHeaderById, createHeader, updateHeader, deleteHeader } from "../controllers/HeaderController.js";

const router = express.Router();

router.get("/headers", getHeaders);
router.get("/headers/:id", getHeaderById);
router.post("/headers", createHeader);
router.put("/headers/:id", updateHeader);
router.delete("/headers/:id", deleteHeader);

export default router;