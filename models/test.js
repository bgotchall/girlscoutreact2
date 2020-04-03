module.exports = function (sequelize, DataTypes) {
    var Test = sequelize.define("Test", {
        item: {
            type: DataTypes.STRING,
        }
    });
    return Test;
};
