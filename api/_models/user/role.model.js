import { sequelizeConnector } from "../../_helpers/mysql-connector";
import { Sequelize } from "sequelize";

class Role extends Sequelize.Model {}

Role.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: "id",
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "description",
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
    modelName: "role",
  }
);

module.exports = { Role };
