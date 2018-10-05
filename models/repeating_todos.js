module.exports = function (sequelize, DataTypes) {
    var RepeatingTodos = sequelize.define("repeating_todos", {

        Repeat_Freq: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: true
        },
        Repeat_Length: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: true,
            validate: {
                len:
                    [1, 11]
            }
        },
        Repeat_Start_Date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:
                    [1, 10]
            }
        },
        Repeat_End_Date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:
                    [1, 10]
            }
        },
        Repeat_Start_Time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:
                    [1, 10]
            }
        },
        Repeat_End_Time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:
                    [1, 10]
            }
        }
    });

    RepeatingTodos.associate = function(models) {
        RepeatingTodos.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return RepeatingTodos;
};