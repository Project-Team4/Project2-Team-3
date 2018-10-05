module.exports = function (sequelize, DataTypes) {
    var Reminders = sequelize.define("reminders", {


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
    Reminders.associate = function(models) {
        Reminders.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Reminders;
};