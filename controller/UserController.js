import Users from "../models/UsersModel.js";
import path from "path";
import fs from "fs";
import argon2 from "argon2";

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
