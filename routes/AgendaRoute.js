import express from "express";
import {
  CreateAgenda,
  GetAllAgenda,
  GetAgendaById,
  UpdateAgenda,
  DeleteAgenda,
} from "../controller/AgendaController.js";

const router = express.Router();

router.post("/agendas", CreateAgenda);
router.get("/agendas", GetAllAgenda);
router.get("/agendas/:id", GetAgendaById);
router.put("/agendas/:id", UpdateAgenda);
router.delete("/agendas/:id", DeleteAgenda);

export default router;