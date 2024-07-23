import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Modul = db.define("modul", {
  id_modul: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nama_modul: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 50],
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 50],
    },
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  static_content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  gambar: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  publish: {
    type: DataTypes.ENUM,
    values: ["Y", "N"],
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: DataTypes.ENUM,
    values: ["user", "admin"],
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  aktif: {
    type: DataTypes.ENUM,
    values: ["Y", "N"],
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  urutan: {
    type:DataTypes.INTEGER,
    allowNull: false,
  },
  link_seo: {
    type:DataTypes.STRING,
    allowNull: false,
    validate: {
        notEmpty: true,
        len: [1, 50],
    },
  },

});

export default Modul;
