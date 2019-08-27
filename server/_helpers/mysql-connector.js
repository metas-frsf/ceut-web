const config = require("server-config.json");
module.exports = mysqlConnector;

const mysql = require("mysql");
const ceutDatabase = config.databases.mysql.databases
  .filter(db => db.id === "ceut-frsf")
  .pop();

function mysqlConnector() {
  return mysql.createConnection(ceutDatabase);
}
