import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Kategori = db.define("kategori", {
  id_kategori: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nama_kategori: {
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
  kategori_seo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  aktif: {
    type: DataTypes.ENUM,
    values: ["Y", "N"],
    allowNull: false,
    defaultValue: "Y",
  },
  sidebar: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tanggal: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Kategori;