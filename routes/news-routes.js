
var db = require("../models");


module.exports = function (app) {
    /////////stuff for posts.  might need to go into a diff file//////////////

    // GET route for getting all of the posts
    app.get("/api/news", function (req, res) {
        db.News.findAll({
            order: [
                ['newsDate', 'DESC']]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

     // GET route for getting 5 most recent posts
     app.get("/api/news5", function (req, res) {
        db.News.findAll({
            limit: 5,
            order: [
                ['newsDate', 'DESC']]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });


    app.post("/api/news", function (req, res) {
        console.log(`news post route handled.  the req.body is ${req.body.item}`)
        db.News.create({
            newsDate: req.body.newsDate,
            title: req.body.title,
            news_detail: req.body.news_detail,
            author: req.body.author

        }).then(function (data) {
            res.json(data);
        });
    });

    app.put("/api/news", function (req, res) {
        db.News.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.delete("/api/news/:id", function (req, res) {
        console.log(`attempting to delete id: ${req.params.id}`)
        db.News.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
            res.json(dbExample);
        });
    });

};
////////////////end of posts///////////