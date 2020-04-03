
var db = require("../models");


module.exports = function(app) {
/////////stuff for posts.  might need to go into a diff file//////////////

// GET route for getting all of the posts
app.get("/api/news", function(req, res) {
    var query = {};
    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.News.findAll({
      where: query,
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  app.post("/api/news", function(req, res) {
    console.log(`news post route handled.  the req.body is ${req.body.item}`)
    db.News.create({
        newsDate: req.body.newsDate,
        title:req.body.title,
        news_detail:req.body.news_detail,
        author:req.body.author
        
    }).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/news", function(req, res) {
    db.News.update(
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