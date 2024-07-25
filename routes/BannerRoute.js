import express from "express";
import {
  CreateBanner,
  GetAllBanners,
  GetBannerById,
  UpdateBanner,
  DeleteBanner,
} from "../controller/BannerController.js";

const router = express.Router();

router.post("/banner", CreateBanner);
router.get("/banner", GetAllBanners);
router.get("/banner/:id", GetBannerById);
router.put("/banner/:id", UpdateBanner);
router.delete("/banner/:id", DeleteBanner);

export default router;