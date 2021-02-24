import React from "react";
import "../stylesheets/App.scss";

const Pokemon = (props) => {
  const itemList2 = props.itemPoke.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article className="each-pokemon">
      <img className="img-poke" src={props.itemPoke.url}></img>
      <h2 className="name-poke">{props.itemPoke.name}</h2>
      <h3 className="evolution-poke">{props.itemPoke.evolution}</h3>
      <ul className="type-poke">{itemList2} </ul>
    </article>
  );
};
export default Pokemon;
