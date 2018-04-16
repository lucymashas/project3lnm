const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  title: {
    type: String,
    Required: true
  },

  animalType: { 
    type: Array
    },

  region: {
    type: Array
  }

});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;