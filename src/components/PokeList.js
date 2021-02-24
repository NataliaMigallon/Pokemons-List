import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/App.scss";

const PokeList = (props) => {
  const itemList = props.PokeArray.map((itemListPoke, index) => {
    return (
      <li key={itemListPoke.id} id={index}>
        <Pokemon itemPoke={itemListPoke} />
      </li>
    );
  });
  return <ul className="list">{itemList}</ul>;
};
export default PokeList;
