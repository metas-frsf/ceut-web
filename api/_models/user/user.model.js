import { Sequelize } from "sequelize";
import { sequelizeConnector } from "../../_helpers/mysql-connector";
import Role from "./role.model";
import UserRole from "./user-role.model";

class User extends Sequelize.Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: "id",
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "last_name",
    },
    userName: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      field: "user_name",
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "avatar",
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "password",
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "created_at",
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "updated_at",
    },
    enabled: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: "enabled",
    },
    deleted: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: "deleted",
    },
  },
  {
    sequelize: sequelizeConnector,
    modelName: "user",
  }
);

// Mediante las dos llamadas siguientes, se define en Sequelize la relación N a M entre Role y User
User.belongsToMany(Role, {
  through: UserRole,
  foreignKey: "id_user",
});

Role().belongsToMany(User, {
  through: UserRole,
  foreignKey: "id_role",
});

module.exports = { User };
