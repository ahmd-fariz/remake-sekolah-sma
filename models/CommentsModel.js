import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Comments = db.define("tb_comment", {
  id_komentar: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  reply: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nama_lengkap: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 150],
    },
  },
  alamat_email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 150],
    },
  },
  isi_pesan: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tanggal_komentar: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  jam_komentar: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

export default Comments;
