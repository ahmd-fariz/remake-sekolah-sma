import express from "express";
import {
  createAgenda,
  getAllAgendas,
  getAgendaById,
  updateAgenda,
  deleteAgenda,
} from "../controller/AgendaController.js";

const router = express.Router();

router.post("/agendas", createAgenda);
router.get("/agendas", getAllAgendas);
router.get("/agendas/:id", getAgendaById);
router.put("/agendas/:id", updateAgenda);
router.delete("/agendas/:id", deleteAgenda);

export default router;