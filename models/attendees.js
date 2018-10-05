module.exports = function (sequelize, DataTypes) {
    var Attendees = sequelize.define("attendees", {
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