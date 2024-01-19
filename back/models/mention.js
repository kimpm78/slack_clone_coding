const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Mention extends Model {
  static init(sequelize) {
    return super.init(
      {
        // idが 基本的に　入っている。
        category: {
          type: DataTypes.ENUM("chat", "dm", "system"),
          allowNull: false, // 必須
        },
        chatId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        modelName: "Mention",
        tableName: "mentions",
        charset: "utf8",
        collate: "utf8_general_ci", // 日本語　格納
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Mention.belongsTo(db.Workspace);
    db.Mention.belongsTo(db.User, { as: "Sender", foreignKey: "SenderId" });
    db.Mention.belongsTo(db.User, { as: "Receiver", foreignKey: "ReceiverId" });
  }
};
