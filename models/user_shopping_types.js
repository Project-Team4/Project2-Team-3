module.exports = function (sequelize, DataTypes) {
    var UserShoppingTypes = sequelize.define("user_shopping_types", {
        User_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Type_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    UserShoppingTypes.associate = function(models) {
        UserShoppingTypes.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return UserShoppingTypes;
};