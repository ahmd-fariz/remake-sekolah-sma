import Download from "../models/DownloadModel.js";

// Create a new download
export const createDownload = async (req, res) => {
  try {
    const newDownload = await Download.create(req.body);
    res.status(201).json(newDownload);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all downloads
export const getAllDownloads = async (req, res) => {
  try {
    const downloads = await Download.findAll();
    res.status(200).json(downloads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single download by ID
export const getDownloadById = async (req, res) => {
  try {
    const download = await Download.findByPk(req.params.id);
    if (download) {
      res.status(200).json(download);
    } else {
      res.status(404).json({ message: "Download not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a download by ID
export const updateDownload = async (req, res) => {
  try {
    const download = await Download.findByPk(req.params.id);
    if (download) {
      await download.update(req.body);
      res.status(200).json(download);
    } else {
      res.status(404).json({ message: "Download not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a download by ID
export const deleteDownload = async (req, res) => {
  try {
    const download = await Download.findByPk(req.params.id);
    if (download) {
      await download.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Download not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
