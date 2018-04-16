import React from "react";
// import { Col, Row } from "react-materialize";
import "./Search.css";
import { ListItem } from "../List";


const SearchResults = ({ _id,link,scientificName,commonName,status,handleClick,buttonText}) => (
       <ListItem>
          <a href={link} target="_blank">{scientificName}</a>
          <button className="btn btnsm" onClick={() => handleClick(_id)}>{buttonText}</button><br/>
          {commonName}<br/>
          {status}<br/>
      </ListItem>

  )
  
export default SearchResults;