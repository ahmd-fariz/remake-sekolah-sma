import Banner from "../models/BannerModel.js";

// Create a new banner
export const createBanner = async (req, res) => {
  try {
    const newBanner = await Banner.create(req.body);
    res.status(201).json(newBanner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all banners
export const getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.findAll();
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single banner by ID
export const getBannerById = async (req, res) => {
  try {
    const banner = await Banner.findByPk(req.params.id);
    if (banner) {
      res.status(200).json(banner);
    } else {
      res.status(404).json({ message: "Banner not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a banner by ID
export const updateBanner = async (req, res) => {
  try {
    const banner = await Banner.findByPk(req.params.id);
    if (banner) {
      await banner.update(req.body);
      res.status(200).json(banner);
    } else {
      res.status(404).json({ message: "Banner not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a banner by ID
export const deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findByPk(req.params.id);
    if (banner) {
      await banner.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Banner not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
