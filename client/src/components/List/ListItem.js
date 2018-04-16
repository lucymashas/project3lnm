import React from "react";
import { CollectionItem } from "react-materialize";

export const ListItem = props => (
  <CollectionItem>
    {props.children}
  </CollectionItem>
);

