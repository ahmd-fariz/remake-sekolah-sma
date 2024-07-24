import Header from "../models/HeaderModel.js";

// Get all headers
export const getHeaders = async (req, res) => {
  try {
    const headers = await Header.findAll();
    res.json(headers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get header by ID
export const getHeaderById = async (req, res) => {
  try {
    const header = await Header.findByPk(req.params.id);
    if (header) {
      res.json(header);
    } else {
      res.status(404).json({ message: "Header not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new header
export const createHeader = async (req, res) => {
  try {
    const newHeader = await Header.create(req.body);
    res.status(201).json(newHeader);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a header
export const updateHeader = async (req, res) => {
  try {
    const header = await Header.findByPk(req.params.id);
    if (header) {
      await header.update(req.body);
      res.json(header);
    } else {
      res.status(404).json({ message: "Header not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a header
export const deleteHeader = async (req, res) => {
  try {
    const header = await Header.findByPk(req.params.id);
    if (header) {
      await header.destroy();
      res.json({ message: "Header deleted" });
    } else {
      res.status(404).json({ message: "Header not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};