var path = require('path');

module.exports = function (app){

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  //Add future routes here:

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/sign-in.html"));
  });

  app.get("/trades", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/trades.html"));
  });

  app.get("/trophyroom", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/trophy-room.html"));
  });

};
