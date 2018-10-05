module.exports = function (sequelize, DataTypes) {
<<<<<<< HEAD
    var Attendees = sequelize.define("attendees", {
=======
    var orm = require("../config/orm.js");

    var attendees = sequelize.define("attendees", {
>>>>>>> 3e8fb1c45f52a3ddc08e07fadebffd0789e5b4d5
        User_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Event_Key: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Notified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        Accepted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        }
    });

    Attendees.associate = function(models) {
        Attendees.belongsTo(models.Calendar, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Attendees;
};