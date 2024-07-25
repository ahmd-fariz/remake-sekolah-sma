import express from "express";
import {
  CreateModAlamat,
  GetAllModAlamat,
  GetModAlamatById,
  UpdateModAlamat,
  DeleteModAlamat,
} from "../controller/ModAlamatController.js";

const router = express.Router();

router.post("/alamat", CreateModAlamat);
router.get("/alamat", GetAllModAlamat);
router.get("/alamat/:id", GetModAlamatById);
router.put("/alamat/:id", UpdateModAlamat);
router.delete("/alamat/:id", DeleteModAlamat);

export default router;