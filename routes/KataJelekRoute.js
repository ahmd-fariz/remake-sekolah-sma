import express from "express";
import {
  CreateKataJelek,
  GetAllKataJelek,
  GetKataJelekById,
  UpdateKataJelek,
  DeleteKataJelek,
} from "../controller/KataJelekController.js";

const router = express.Router();

router.post("/katajelek", CreateKataJelek);
router.get("/katajelek", GetAllKataJelek);
router.get("/katajelek/:id", GetKataJelekById);
router.put("/katajelek/:id", UpdateKataJelek);
router.delete("/katajelek/:id", DeleteKataJelek);

export default router;