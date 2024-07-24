import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Alamat = db.define("alamat", {
  id_alamat: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  alamat: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

});

export default Alamat;
