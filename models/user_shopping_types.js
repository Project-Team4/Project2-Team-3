module.exports = function (sequelize, DataTypes) {
    var user_shopping_types = sequelize.define("user_shopping_types", {
        User_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Type_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return user_shopping_types;
};