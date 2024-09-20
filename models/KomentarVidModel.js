import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Komentar = db.define(
  "komentar",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_video: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'video',
        key: 'id',
      },
    },
    nama_komentar: {
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
    isi_komentar: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tgl: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      jam_komentar: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      aktif: {
        type: DataTypes.ENUM,
        values: ["Y", "N"],
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
  },
  {
    freezeTableName: true,
    indexes: [
      {
        fields: ['id_video'],
      },
    ],
  }
);

export default Komentar;