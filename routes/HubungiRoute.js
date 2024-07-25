import express from "express";
import {
  CreateHubungi,
  GetAllHubungi,
  GetHubungiById,
  UpdateHubungi,
  DeleteHubungi,
} from "../controller/HubungiController.js";

const router = express.Router();

router.post("/hubungi", CreateHubungi);
router.get("/hubungi", GetAllHubungi);
router.get("/hubungi/:id", GetHubungiById);
router.put("/hubungi/:id", UpdateHubungi);
router.delete("/hubungi/:id", DeleteHubungi);

export default router;