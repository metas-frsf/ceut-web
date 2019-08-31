const Sequelize = require("sequelize");
const connector = require("server/_helpers/mysql-connector");
const sequelizeConnector = connector.sequelizeConnector();

class User extends Sequelize.Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: "id"
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "first_name"
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "last_name"
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "user_name"
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "avatar"
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "password"
    },
    roleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "role_id"
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "created_at"
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "updated_at"
    },
    enabled: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: "enabled"
    },
    deleted: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: "deleted"
    }
  },
  {
    sequelize: sequelizeConnector,
    modelName: "user"
  }
);

module.exports = () => User;
