// Masih salah, nanti di perbaiki
import HalamanStatis from "../models/HalamanStatisModel.js";
import path from "path";
import fs from "fs";
import argon2 from "argon2";

// Create a new halaman statis
export const CreateHalamanStatis = async (req, res) => {
  const { judul, judul_seo, isi_halaman, tgl_posting, gambar, url_gambar, blokir } =
    req.body;

  if (!req.files || !req.files.file) {
    return res.status(422).json({ msg: "Harus memasukkan foto" });
  }

  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });

  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  const uploadPath = `./public/images/${fileName}`;

  file.mv(uploadPath, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Users.create({
        judul: judul,
        judul_seo: judul_seo,
        isi_halaman: isi_halaman,
        tgl_posting: tgl_posting,
        gambar: gambar,
        url_gambar: url_gambar,
        blokir: blokir,
        foto: fileName,
        url,
      });
      res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  });
};

// Get all halaman statis
export const GetAllHalamanStatis = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ["judul", "judul_seo", "isi_halaman", "tgl_posting", "gambar", "url_gambar", "username", "dibaca", "jam", "hari", "urutan", "kelompok"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
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