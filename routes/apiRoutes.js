var db = require("../models");

module.exports = function (app) {
  // Get all characters
  app.get("/api/characters", function (req, res) {
    db.Character.findAll({}).then(function (dbCharacters) {
      res.json(dbCharacters);
    });
  });

  // Get one character
  app.get("/api/characters/:id", function (req, res) {
    db.Character.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbCharacter) {
        res.json(dbCharacter);
      });
  });

  // Create a new character
  app.post("/api/characters", function (req, res) {
    db.Post.create({
      name: req.body.name,
      head: req.body.head,
      body: req.body.body,
      legs: req.body.legs,
      background: req.body.background
    })
      .then(function (dbCharacter) {
        res.json(dbCharacter);
      });
  });

  //Update a character by id
  app.put("/api/characters", function (req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbCharacter) {
        res.json(dbCharacter);
      });
  });

  // Delete an character by id
  app.delete("/api/characters/:id", function (req, res) {
    db.Character.destroy({ where: { id: req.params.id } }).then(function (dbCharacters) {
      res.json(dbCharacters);
    });
  });
};
