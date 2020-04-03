
var db = require("../models");


module.exports = function(app) {
/////////stuff for posts.  might need to go into a diff file//////////////

// GET route for getting all of the posts
app.get("/api/header", function(req, res) {
    var query = {};
    console.log("sending the headers to the client");
    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Headers.findAll({
      where: query,
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  app.post("/api/header", function(req, res) {
    console.log(`header post route handled.  the req.body.title is ${req.body.title}`)
    db.Headers.create({
        title:req.body.title,
        subtitle:req.body.subtitle,
        news_detail:req.body.news_detail,
    }).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/header", function(req, res) {
    db.Headers.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

};
////////////////end of posts///////////