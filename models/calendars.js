module.exports = function (sequelize, DataTypes) {
<<<<<<< Updated upstream
    var Calendars = sequelize.define("calendars", {
=======
    
    var calendars = sequelize.define("calendars", {
>>>>>>> Stashed changes
        User_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        Start_Date: {
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
        Location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        }
    });

    Calendars.associate = function(models) {
        Calendars.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Calendars;
};