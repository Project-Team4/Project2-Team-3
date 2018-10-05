module.exports = function (sequelize, DataTypes) {
    var EventTypes = sequelize.define("event_types", {

        User_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Event_Type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 50]
            }
        }
    });

    EventTypes.associate = function(models) {
        EventTypes.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return EventTypes;
    var event_types = sequelize.define("event_types", {
        Type_Name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return event_types;
};