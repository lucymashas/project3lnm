import React, { Component } from "react";
import Form from "./Form";
import API from "../utils/API";
// import SearchResults from "./SearchResults";

class Search extends Component{
   constructor (props){
      super (props)
         this.state = {
            searchInput: "",
            results: []
        };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
   }

    handleInputChange = event => {
      let value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]:value
    });
  };

    handleFormSubmit = event => {
      event.preventDefault();
      let query = this.state.searchInput;
      API.searchAnimals(query)
         .then(res => this.setState({ results: res.data }))
         .catch(err => console.log(err));
    };

  render () {
    return (
      <div>
        <Form handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}/>
      </div>
    );
  };

};

  export default Search;