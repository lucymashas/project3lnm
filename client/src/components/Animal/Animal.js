import React from 'react';
import { ListItem } from '../List';
import { CardPanel, Button } from "react-materialize";
import "./Animal.css";



export const Animal = props => (

  <CardPanel className="grey lighten-3">

  <div className="list-group" style={{margin: '25px 0'}}>
    <a href={props.url} className="list-group-item list-group-item-action flex-column align-items-start active" target="_blank">
      <div className="grow d-flex w-100 justify-content-between">
        <h4 className="mb-1">{props.title}</h4>
        
      </div>
    </a>
    <ListItem  className="list-group-item">
      <div style={{display: 'inline-block'}}>
        <h5 className="mb-1">{props.synopsis}</h5>
      </div>
      <div className="btn-group" role="group" style={{float: 'right'}}>
        <Button waves='light' type="button" className="btn grey" style={{marginLeft: '3%'}} onClick={props.onClick}>{props.type}</Button>
      </div>
    </ListItem>
  </div>
  </CardPanel>
)