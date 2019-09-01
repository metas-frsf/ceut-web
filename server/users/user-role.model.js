const Sequelize = require("sequelize");
const connector = require("server/_helpers/mysql-connector");
const sequelizeConnector = connector.sequelizeConnector();

module.exports = () => UserRole;

class UserRole extends Sequelize.Model {}

UserRole.init(
  {
    idUser: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: "id_user",
      references: {
        model: "user",
        key: "id"
      }
    },
    idRole: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: "id_role",
      references: {
        model: "role",
        key: "id"
      }
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
    modelName: "user_role"
  }
);
