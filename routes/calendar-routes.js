
var db = require("../models");


module.exports = function (app) {
    /////////stuff for posts.  might need to go into a diff file//////////////

    // GET route for getting all of the posts
    app.get("/api/calendar", function (req, res) {
        db.Calendars.findAll({
            order: [
                ['start', 'DESC']]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

     // GET route for getting 5 most recent posts
     app.get("/api/calendar5", function (req, res) {
        db.Calendars.findAll({
            limit: 5,
            order: [
                ['start', 'ASC']]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });


    app.post("/api/calendar", function (req, res) {
        console.log(`news post route handled.  the req.body is ${req.body.item}`)
        db.Calendars.create({
            start: req.body.start,
            end: req.body.end,
            title: req.body.title,
            body: req.body.body
        }).then(function (data) {
            res.json(data);
        });
    });

    app.put("/api/calendar", function (req, res) {
        db.Calendars.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.delete("/api/calendar/:id", function (req, res) {
        console.log(`attempting to delete id: ${req.params.id}`)
        db.Calendars.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
            res.json(dbExample);
        });
    });

};
////////////////end of posts///////////