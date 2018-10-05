module.exports = function (sequelize, DataTypes) {
    var event_types = sequelize.define("event_types", {
        Type_Name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return event_types;
};