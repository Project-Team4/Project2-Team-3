module.exports = function (sequelize, DataTypes) {
    var repeating_calendars = sequelize.define("repeating_calendars", {

        Repeat_Freq: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Repeat_Length: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 11]
            }
        },
        Repeat_Start_Date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Repeat_End_Date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Repeat_Start_Time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        Repeat_End_Time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        }
    });
    return repeating_calendars;
};