import React from "react";

const Input = props =>
  <div className="row">
    <div className="col-sm-12">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="searchInput"
            placeholder="Search by Animals Common Name"
            value={props.searchTerm}
            onChange={props.handleInputChange}
           />
           <button type ="submit" 
                    className="btn btn-secondary" 
                    onClick={props.handleFormSubmit}>Search</button>
        </div>
          
            

          </form>
          </div>
        </div>



export default Input;