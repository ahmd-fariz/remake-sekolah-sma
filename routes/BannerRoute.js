import express from "express";
import {
  createBanner,
  getAllBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
} from "../controllers/BannerController.js";

const router = express.Router();

router.post("/banners", createBanner);
router.get("/banners", getAllBanners);
router.get("/banners/:id", getBannerById);
router.put("/banners/:id", updateBanner);
router.delete("/banners/:id", deleteBanner);

export default router;
