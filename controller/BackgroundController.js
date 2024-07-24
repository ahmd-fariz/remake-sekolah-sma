import Background from "../models/BackgroundModel.js";

// Create a new background
export const createBackground = async (req, res) => {
  try {
    const newBackground = await Background.create(req.body);
    res.status(201).json(newBackground);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all backgrounds
export const getAllBackgrounds = async (req, res) => {
  try {
    const backgrounds = await Background.findAll();
    res.status(200).json(backgrounds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single background by ID
export const getBackgroundById = async (req, res) => {
  try {
    const background = await Background.findByPk(req.params.id);
    if (background) {
      res.status(200).json(background);
    } else {
      res.status(404).json({ message: "Background not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a background by ID
export const updateBackground = async (req, res) => {
  try {
    const background = await Background.findByPk(req.params.id);
    if (background) {
      await background.update(req.body);
      res.status(200).json(background);
    } else {
      res.status(404).json({ message: "Background not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a background by ID
export const deleteBackground = async (req, res) => {
  try {
    const background = await Background.findByPk(req.params.id);
    if (background) {
      await background.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Background not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};