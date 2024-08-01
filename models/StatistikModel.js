import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Statistik = db.define(
  "statistik",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 20],
      },
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hits: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    online: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255],
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Statistik;
