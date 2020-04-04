const express = require('express');
const path = require('path');
const app = express();


// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// in case I want to do any local files
app.use(express.static("public"));


////// test route/////////////////
// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    let list = ["I am", "from", "express server"];
    res.json(list);
    console.log('Sent list of items');
});




app.get("/api/news", function (req, res) {
  db.News.findAll({
      order: [
          ['newsDate', 'DESC']]
  }).then(function (dbPost) {
      res.json(dbPost);
  });
});

/////////////end of test route/////////////

// Routes
// =============================================================
//require("./routes/news-routes.js")(app);
require("./routes/test-routes.js")(app);
require("./routes/header-routes.js")(app);
//require("./routes/author-api-routes.js")(app);
//require("./routes/post-api-routes.js")(app);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


var PORT = process.env.PORT || 5000;
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(5000, function() {
      console.log("server listening on PORT " + PORT);
    });
  });