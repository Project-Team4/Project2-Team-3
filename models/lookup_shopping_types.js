module.exports = function (sequelize, DataTypes) {
    var lookup_shopping_types = sequelize.define("lookup_shopping_types", {
        Type_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        }
    });
    return lookup_shopping_types;
};