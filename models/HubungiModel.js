import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Hubungi = db.define("hubungi", {
  id_hubungi: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 50],
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  subjek: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  pesan: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tanggal: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  jam: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  dibaca: {
    type: DataTypes.ENUM,
    values: ["Y", "N"],
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

export default Hubungi;
