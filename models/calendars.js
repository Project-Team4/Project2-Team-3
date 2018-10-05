module.exports = function (sequelize, DataTypes) {
<<<<<<< HEAD
    var Calendars = sequelize.define("calendars", {
=======
    var orm = require("../config/orm.js");
    
    var calendars = sequelize.define("calendars", {
>>>>>>> 3e8fb1c45f52a3ddc08e07fadebffd0789e5b4d5
        User_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Event_Type: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Event_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        },
        Start_Date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Info: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        Location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        }
    });

    Calendars.associate = function(models) {
        Calendars.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Calendars;
};