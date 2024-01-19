const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        // idが　基本的に入っている。
        email: {
          type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 必須
          unique: true, // 固有の値
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false, // 必須
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false, // 必須
        },
      },
      {
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci", // 日本語　格納
        sequelize,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Workspace, { as: "Owned", foreignKey: "OwnerId" });
    db.User.belongsToMany(db.Workspace, {
      through: db.WorkspaceMember,
      as: "Workspaces",
    });
    db.User.belongsToMany(db.Channel, { through: "ChannelMembers" });
    db.User.hasMany(db.ChannelChat);
  }
};
