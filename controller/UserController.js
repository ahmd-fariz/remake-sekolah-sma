import Users from "../models/UsersModel.js";
import path from "path";
import fs from "fs";
import argon2 from "argon2";
import multer from "multer";

export const GetUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: [
        "id",
        "username",
        "nama_lengkap",
        "email",
        "no_tlp",
        "role",
        "url",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const GetUserById = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id, {
      attributes: [
        "id",
        "username",
        "nama_lengkap",
        "email",
        "no_tlp",
        "role",
        "url",
      ],
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export const CreateUser = async (req, res) => {
  const { username, password, nama_lengkap, email, no_tlp, role, blokir } =
    req.body;

  const hashPassword = await argon2.hash(password);

  if (!req.files || !req.files.file) {
    return res.status(422).json({ msg: "Harus memasukkan foto" });
  }

  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/user/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });

  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  const uploadPath = `./public/images/user/${fileName}`;

  file.mv(uploadPath, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Users.create({  
        username: username,
        password: hashPassword,
        nama_lengkap: nama_lengkap,
        email: email,
        no_tlp: no_tlp,
        role: role,
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

export const UpdateUser = async (req, res) => {
  const user = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!user) return res.status(404).json({ msg: "User not found" });

  const { username, nama_lengkap, email, no_telp, password, role, blokir } =
    req.body;
  let hashPassword = user.password;
  let fileName = user.foto;

  if (req.files) {
    if (!req.files.file) {
      return res.status(422).json({ msg: "Harus memasukkan foto" });
    }

    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });

    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/user/${user.foto}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }

    file.mv(`./public/images/user/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }

  const url = `${req.protocol}://${req.get("host")}/user/${fileName}`;

  if (password && password !== user.password) {
    hashPassword = await argon2.hash(password);
  }

  try {
    await Users.update(
      {
        username: username,
        nama_lengkap: nama_lengkap,
        email: email,
        no_telp: no_telp,
        password: hashPassword,
        role: role,
        blokir: blokir,
        foto: fileName,
        url,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(201).json({ msg: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        id: req.params.id, // Mencari pengguna berdasarkan id dari parameter route
      },
    });

    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" }); // Mengirimkan respon dengan status 404 jika pengguna tidak ditemukan

    // Hapus file gambar dari direktori
    const filepath = `./public/images/user/${user.foto}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath); // Menghapus file jika ada
    }

    await user.destroy(); // Menghapus data pengguna dari database

    res.status(200).json({ msg: `Berhasil Delete` }); // Mengirimkan respon dengan status 200 jika penghapusan berhasil
  } catch (error) {
    res.status(400).json({ msg: error.message }); // Mengirimkan respon dengan status 400 jika terjadi kesalahan saat menghapus data
  }
};
