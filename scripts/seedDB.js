const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/animaldb");

const charitySeed = [
  {
    title: "African Wildlife Foundation",
    region:["Africa"]
  },
  {
    title: "Animal Welfare Institute",
    animalType: ["Elephant","Pygmy Three-Toed Sloth","Tiger", "Wolf"],
    region:["North America", "South America", "Africa","Asia", "Europe", "Oceans"]
  },
  {
    title: "Snow Leopard Trust",
    animalType: ["Snow Leopard"]
  },
  {
    title: "EcoHealth Alliance",
    animalType: ["Frog, Bat"],
    region: ["North America", "South America", "Africa", "Asia"]
  },
  {
    title:"The Marine Mammal Center",
    animalType:["Elephant Seal", "Harbor Seal"],
    region: ["Oceans","North America"]
  },
  {
    title:"National Fish and Wildlife Foundation",
    region:["Oceans","North America"]
  },
  {
    title: "Ruffed Grouse Society",
    animalType: ["Ruffed Grouse"]
  },
  {
    title: "The Jane Goodall Institute",
    animalType:["Chimpanzee"],
  },
  {
    title:"Pollinator Partnership",
    animalType:["Honey Bee", "Bats","Butterflies", "Beetles"],
    egion:["North America", "South America"]
  },
  {
    title:"WildAid",
    animalType:["Elephant", "Rhinoceros", "Tiger","Lion","Pangolin", "Shark", "Manta Ray", "Vaquita"],
    region:["North America", "South America", "Africa","Asia", "Oceans"]
  },
  {
    title:"Turtle Island Restoration Network",
    animalType: ["Sea Turtle", "Shark"],
    region:["Oceans"]
  },
  {
    title:"Bat Conservation International",
    animalType: ["Bat"],
    region:["North America", "South America", "Africa","Asia","Europe"]
  },
  {
    title: "American Bird Conservancy",
    animalType: ["Birds"],
    region:["North America", "South America"]
  },
  {
    title: "Wildlife Conservation Society",
    animalType:["Elephant", "Bison", "Bonobo", "Cheetah", "Chimpanzee", "Dolphin", "Condor", "Sea Turtle", "Flamingo", "Giant River Turtle", "Lion", "Orangutan","Shark","Snow Leopard", "Tiger"],
    region:["North America", "South America", "Africa","Asia", "Oceans"]
  },
  {
    title:"PAWS",
    region:["North America"]
  },
  {
    title:"Wildlife Alliance",
    region:["Asia"]
  },
  {
    title: "World Wildlife Fund",
    region:["North America", "South America", "Africa","Asia","Europe", "Oceans"]
  },
  {
    title: "International Fund for Animal Welfare",
    region:["North America", "South America", "Africa","Asia","Europe", "Oceans"]
  },
  {
    title: "World Animal Protection",
    animalType: ["Elephant", "Bear", "Sea Turtle", "Dolphin"],
    region:["North America", "Oceans", "Africa", "Asia"]
  },
  {
    title: "Defenders of Wildlife",
    region:["North America", "Oceans"]
  }
];

db.Charity
  .remove({})
  .then(() => db.Charity.collection.insertMany(charitySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
