const environment = require("./environment");
const Sequelize = require("sequelize");

const mysql = require("mysql2");
const ceutDatabase = environment.serverConfig.databases.mysql.databases
  .filter((db) => db.id === "ceut-frsf")
  .pop();

const mySqlConnection = mysql.createConnection({
  host: ceutDatabase.host,
  user: ceutDatabase.user,
  database: ceutDatabase.database,
  password: ceutDatabase.password,
});

const sequelizeConnection = new Sequelize(
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

module.exports = { mysqlConnector, sequelizeConnector };

function mysqlConnector() {
  return mySqlConnection;
}

function sequelizeConnector() {
  return sequelizeConnection;
}
