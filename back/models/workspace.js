const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Workspace extends Model {
  static init(sequelize) {
    return super.init(
      {
        // idが 基本的に入っている。
        name: {
          type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 必須
          unique: true, // 固有の値
        },
        url: {
          type: DataTypes.STRING(30),
          allowNull: false, // 必須
          unique: true, // 固有の値
        },
      },
      {
        modelName: "Workspace",
        tableName: "workspaces",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci", // 日本語　格納
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Workspace.belongsTo(db.User, { as: "Owner", foreignKey: "OwnerId" });
    db.Workspace.belongsToMany(db.User, {
      through: db.WorkspaceMember,
      as: "Members",
    });
    db.Workspace.hasMany(db.Channel);
    db.Workspace.hasMany(db.DM);
  }
};
