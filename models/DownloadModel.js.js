import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Download = db.define("download", {
  id_download: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  judul: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  nama_file: {
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
  tgl_posting: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Download;
