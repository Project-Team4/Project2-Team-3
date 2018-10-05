module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    User_Id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    Pass_Word: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },
    Cell_Phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 14]
      }
    },
    Verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }

  });

Users.associate = function(models) {
  Users.hasMany(models.RepeatingTodos, {
    onDelete: "cascade"
  });
};

  return Users;
};
