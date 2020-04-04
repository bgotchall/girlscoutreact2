const express = require('express');
const path = require('path');


const app = express();

// Requiring our models for syncing
var db = require('./models');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/getList', (req,res) => {
  let list = ["I am", "from", "express server"];
  res.json(list);
  console.log('Sent list of items');
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

require("./routes/news-routes.js")(app);
require("./routes/test-routes.js")(app);
require("./routes/header-routes.js")(app);

var PORT = process.env.PORT || 5000;
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(5000, function() {
      console.log("server listening on PORT " + PORT);
    });
  });