import express from "express";
import {
  CreateIklanTengah,
  GetAllIklanTengah,
  GetIklanTengahById,
  UpdateIklanTengah,
  DeleteIklanTengah,
} from "../controller/IklanTengahController.js";

const router = express.Router();

router.post("/iklantengah", CreateIklanTengah);
router.get("/iklantengah", GetAllIklanTengah);
router.get("/iklantengah/:id", GetIklanTengahById);
router.put("/iklantengah/:id", UpdateIklanTengah);
router.delete("/iklantengah/:id", DeleteIklanTengah);

export default router;