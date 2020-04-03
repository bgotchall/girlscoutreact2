module.exports = function (sequelize, DataTypes) {
    var Headers = sequelize.define("Headers", {
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        news_detail: {
            type: DataTypes.TEXT,
            allowNull: true,
            len: [1]
        }

    });


    return Headers;
};
