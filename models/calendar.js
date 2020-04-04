module.exports = function (sequelize, DataTypes) {
    var Calendars = sequelize.define("Calendars", {
        start: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,

        },
        end: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.STRING,
            allowNull: true,
           defaultValue: "placeholder",
        }
        

    });


    return Calendars;
};
