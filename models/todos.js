module.exports = function (sequelize, DataTypes) {
    var Todos = sequelize.define("todos", {

        User_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Repeat_Key: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        Todo_Type: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Todo_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        Todo_Start_Time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Todo_End_Time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Todo_Date: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 10]
            }
        },
        Todo_Info: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1, 1000]
            }
        },
        Todo_Location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        Todo_Status: {
            type: DataTypes.STRING,
            defaultValue: 0,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Todos.associate = function(models) {
        Todos.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Todos;

};