const config = require("server-config.json");
const firebaseAdmin = require("firebase-admin");

const connect = projectId => {
  const serviceAccount = config.databases.firebase.databases
    .filter(Database => Database.project_id === projectId)
    .pop();

  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: `https://${projectId}.firebaseio.com`
  });

  return firebaseAdmin.database();
};

module.exports = { connect };
