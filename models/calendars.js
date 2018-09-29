module.exports = function (sequelize, DataTypes) {
    var calendars = sequelize.define("calendars", {
        User_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Repeat_Key: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        Event_Type: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Event_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        },
        Event_Start_Date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Event_End_Date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Event_Start_Time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Event_End_Time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Event_Info: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        Event_Location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        }
    });
    return calendars;
};