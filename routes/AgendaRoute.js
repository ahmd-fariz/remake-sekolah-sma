import express from "express";
import {
  CreateAgenda,
  GetAllAgenda,
  GetAgendaById,
  UpdateAgenda,
  DeleteAgenda,
} from "../controller/AgendaController.js";

const router = express.Router();

router.post("/agenda", CreateAgenda);
router.get("/agenda", GetAllAgenda);
router.get("/agenda/:id", GetAgendaById);
router.put("/agenda/:id", UpdateAgenda);
router.delete("/agenda/:id", DeleteAgenda);

export default router;