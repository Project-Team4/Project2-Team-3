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
};