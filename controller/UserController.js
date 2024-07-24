import Users from "../models/UsersModel.js";
import path from "path";
import fs from "fs";
import argon2 from "argon2";
import multer from "multer";

export const GetUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ["username", "nama_lengkap", "email", "no_telp"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const CreateUser = async (req, res) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png/;
      const extname = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimetype = fileTypes.test(file.mimetype);

      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb("Error: Images Only!");
      }
    },
  }).single("foto");

  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }

    const { username, password, nama_lengkap, email, no_telp, role, blokir } =
      req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    const fileName = file.filename;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const filePath = path.join(__dirname, "../public/images", fileName);

    try {
      const hashedPassword = await argon2.hash(password);
      await Users.create({
        username: username,
        password: hashedPassword,
        nama_lengkap: nama_lengkap,
        email: email,
        no_telp: no_telp,
        role: role,
        blokir: blokir,
        foto: fileName,
        url,
      });
      res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
};

export const UpdateUser = async (req, res) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png/;
      const extname = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimetype = fileTypes.test(file.mimetype);

      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb("Error: Images Only!");
      }
    },
  }).single("foto");

  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }

    const { username, nama_lengkap, email, no_telp, password } = req.body;
    const file = req.file;

    try {
      const user = await Users.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      let fileName = user.foto;
      if (file) {
        // Hapus foto lama
        const oldFilePath = path.join(
          __dirname,
          "../public/images",
          path.basename(user.foto)
        );
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            return res.status(500).json({ msg: "Failed to delete old photo" });
          }
        });

        // Set nama file baru
        fileName = `${req.protocol}://${req.get("host")}/images/${
          file.filename
        }`;
      }

      const hashedPassword = password
        ? await argon2.hash(password)
        : user.password;

      await Users.update(
        {
          username: username,
          nama_lengkap: nama_lengkap,
          email: email,
          no_telp: no_telp,
          password: hashedPassword,
          foto: fileName,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      res.status(200).json({ msg: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
};

export const DeleteUser = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const filePath = path.join(
      __dirname,
      "../public/images",
      path.basename(user.foto)
    );

    // Hapus file foto
    fs.unlink(filePath, (err) => {
      if (err) {
        return res.status(500).json({ msg: "Failed to delete photo" });
      }
    });

    await Users.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
