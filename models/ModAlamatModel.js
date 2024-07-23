import { Sequelize } from "sequelize";
import db from "../config/Database";

const { DataTypes } = Sequelize;

const Alamat = db.define("alamat", {
  id_alamat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

});

export default Alamat;
