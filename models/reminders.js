module.exports = function (sequelize, DataTypes) {
    var reminders = sequelize.define("reminders", {


        User_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Event_Key: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Do_Time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Notification_Type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return reminders;
};