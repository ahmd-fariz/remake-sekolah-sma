import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;
// agenda
const Agenda = db.define("agenda", {
  id_agenda: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tema: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  tema_seo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  isi_agenda: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tempat: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },
  pengirim: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
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
  tgl_mulai: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tgl_selesai: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tgl_posting: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  jam: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 50],
    },
  },
  dibaca: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

export default Agenda;
