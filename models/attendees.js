module.exports = function (sequelize, DataTypes) {
    var attendees = sequelize.define("attendees", {
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
    return attendees;
};