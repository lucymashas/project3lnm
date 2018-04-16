const db = require("../models");

// Defining methods 
module.exports = {
  findAll: function(req, res) {
    db.Animal
      .find(req.query)
      .sort({ date: -1 })
      .then(dbAnimal => res.json(dbAnimal))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Animal
      .findById(req.params.id)
      .then(dbAnimal => res.json(dbAnimal))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Animal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbAnimal => res.json(dbAnimal))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Animal
      .findById({ _id: req.params.id })
      .then(dbAnimal => dbAnimal.remove())
      .then(dbAnimal => res.json(dbAnimal))
      .catch(err => res.status(422).json(err));
  }
};
