import { environment } from "./environment";
import { Sequelize } from "sequelize";

const ceutDatabase = environment.serverConfig.databases.mysql.databases
  .filter((db) => db.id === "ceut-frsf")
  .pop();

const sequelizeConnector = new Sequelize(
  ceutDatabase.database,
  ceutDatabase.user,
  ceutDatabase.password,
  {
    host: ceutDatabase.host,
    dialect: "mysql",
    define: {
      freezeTableName: true,
      timestamps: true,
    },
  }
);

module.exports = { sequelizeConnector };
