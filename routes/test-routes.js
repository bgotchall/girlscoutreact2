
var db = require("../models");


module.exports = function(app) {
/////////stuff for posts.  might need to go into a diff file//////////////

// GET route for getting all of the posts
app.get("/api/test", function(req, res) {
    console.log ("attempting to pull the test table");
    var query = {};
    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Test.findAll({
      where: query,
    }).then(function(data) {
      res.json(data);
    });
  });


// Create a new example
app.post("/api/test", function(req, res) {
    console.log(`post route handled.  the req.body is ${req.body.item}`)
    db.Test.create({
        
        item:req.body.item
        
    }).then(function(data) {
      res.json(data);
    });
  });


};
////////////////end of posts///////////