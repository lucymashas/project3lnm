import React from "react";


const SearchResults = props =>
  <div className="row" style={{ marginTop: 30 }}>
    <div className="col-sm-12">

              {props.results.slice(0, 5).map(
                (animalResult) =>
                    <div className = "outline" key={animalResult._id} _id={animalResult._id}>
                      <button className="btn savebtn" handleClick={props.handleSave}>SAVE</button>
                      <h3>{animalResult.scientificName}</h3>
                      <p>{animalResult.CommonName}</p>
                    </div>
                 )}

            </div>
        </div>


export default SearchResults;