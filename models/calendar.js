module.exports = function (sequelize, DataTypes) {
    var Calendars = sequelize.define("Calendars", {
        start: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,

        },
        end: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
        

    });


    return Calendars;
};
