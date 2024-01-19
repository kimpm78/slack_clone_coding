const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class WorkspaceMember extends Model {
  static init(sequelize) {
    return super.init(
      {
        // idが 基本的に入っている。
        loggedInAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        modelName: "WorkspaceMember",
        tableName: "workspacemembers",
        charset: "utf8",
        collate: "utf8_general_ci", // 日本語　格納
        sequelize,
      }
    );
  }
  static associate(db) {}
};
