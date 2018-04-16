import axios from "axios";

export default {
  // Gets all animals from db
  getAnimals: function() {
    return axios.get("/api/animals");
  },
  searchAnimals: function(query) {
    return axios.get("/api/animals", { params: { q: query } });
  },
  getCharity: function(name){
    return axios.get("api/animals" + name);
  },
  // Gets the animals with the given id
  getAnimal: function(id) {
    return axios.get("/api/animals/" + id);
  },
  // Deletes an animal with a given id
  deleteAnimal: function(id) {
    return axios.delete("/api/animals/" + id);
  }
};

