module.exports = function (sequelize, DataTypes) {
    var News = sequelize.define("News", {
        newsDate: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        news_detail: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        }

    });

    // Post.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Post.belongsTo(models.Author, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

    return News;
};
