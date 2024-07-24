import Album from "../models/AlbumModel.js";

// Create a new album
export const createAlbum = async (req, res) => {
  try {
    const newAlbum = await Album.create(req.body);
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all albums
export const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single album by ID
export const getAlbumById = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id);
    if (album) {
      res.status(200).json(album);
    } else {
      res.status(404).json({ message: "Album not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an album by ID
export const updateAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id);
    if (album) {
      await album.update(req.body);
      res.status(200).json(album);
    } else {
      res.status(404).json({ message: "Album not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an album by ID
export const deleteAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id);
    if (album) {
      await album.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Album not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};