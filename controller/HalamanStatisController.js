import HalamanStatis from "../models/HalamanStatisModel.js";

// Create a new halaman statis
export const createHalamanStatis = async (req, res) => {
  try {
    const newHalamanStatis = await HalamanStatis.create(req.body);
    res.status(201).json(newHalamanStatis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all halaman statis
export const getAllHalamanStatis = async (req, res) => {
  try {
    const halamanStatis = await HalamanStatis.findAll();
    res.status(200).json(halamanStatis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single halaman statis by ID
export const getHalamanStatisById = async (req, res) => {
  try {
    const halamanStatis = await HalamanStatis.findByPk(req.params.id);
    if (halamanStatis) {
      res.status(200).json(halamanStatis);
    } else {
      res.status(404).json({ message: "Halaman Statis not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a halaman statis by ID
export const updateHalamanStatis = async (req, res) => {
  try {
    const halamanStatis = await HalamanStatis.findByPk(req.params.id);
    if (halamanStatis) {
      await halamanStatis.update(req.body);
      res.status(200).json(halamanStatis);
    } else {
      res.status(404).json({ message: "Halaman Statis not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a halaman statis by ID
export const deleteHalamanStatis = async (req, res) => {
  try {
    const halamanStatis = await HalamanStatis.findByPk(req.params.id);
    if (halamanStatis) {
      await halamanStatis.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Halaman Statis not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};