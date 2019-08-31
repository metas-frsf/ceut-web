const config = require("server-config.json");
const Sequelize = require("sequelize");

const mysql = require("mysql2");
const ceutDatabase = config.databases.mysql.databases
  .filter(db => db.id === "ceut-frsf")
  .pop();

const mySqlConnection = mysql.createConnection(ceutDatabase);

const sequelizeConnection = new Sequelize(
  ceutDatabase.database,
  ceutDatabase.user,
  ceutDatabase.password,
  {
    host: ceutDatabase.host,
    dialect: "mysql",
    define: {
      freezeTableName: true,
      timestamps: true
    }
  }
);

module.exports = { mysqlConnector, sequelizeConnector };

function mysqlConnector() {
  return mySqlConnection;
}

function sequelizeConnector() {
  return sequelizeConnection;
}
