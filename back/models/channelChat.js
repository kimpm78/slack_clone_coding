const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class ChannelChat extends Model {
  static init(sequelize) {
    return super.init(
      {
        // idが 基本的に　入っている。
        content: {
          type: DataTypes.TEXT, // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 必須
        },
      },
      {
        modelName: "ChannelChat",
        tableName: "channelChats",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 絵文字 格納
        sequelize,
      }
    );
  }
  static associate(db) {
    db.ChannelChat.belongsTo(db.User);
    db.ChannelChat.belongsTo(db.Channel);
  }
};
