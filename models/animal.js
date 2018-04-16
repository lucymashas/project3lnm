const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({

  scientificName: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  commonName: {
    type: String,
    trim: true,
    required: true
  },
  status:{
    type: String,
    default: "Vulnerable"
  },
  link:{
    type: String
  }
});

const  Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;