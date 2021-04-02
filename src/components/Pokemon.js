import React, { useState } from "react";
import "../stylesheets/App.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const [favColor, setFavColor] = useState("");

  const handleClick = () => {
    props.handleFavorites(props.id);
    if (favColor === "") {
      return setFavColor("favorite");
    } else {
      return setFavColor("");
    }
    //!favColor ? setFavColor("favorite") : setFavColor("");
  };
  const itemList2 = props.itemPoke.types.map((type, index) => {
    return (
      <li key={index} className={`pokemon__type--item pokemon__type--${type}`}>
        {type}
      </li>
    );
  });
  return (
    <article className={`pokemon ${favColor}`} id={props.id} onClick={handleClick}>
      <img
        className="pokemon__img"
        src={props.itemPoke.url}
        alt={`Picture of ${props.itemPoke.name}`}
        title={`Picture of ${props.itemPoke.name}`}
      ></img>
      <h2 className="pokemon__name">{props.itemPoke.name}</h2>
      <ul className="pokemon__type">{itemList2}</ul>
      <h3 className="pokemon__evolution"> {props.itemPoke.evolution}</h3>
    </article>
  );
};
Pokemon.propTypes = {
  id: PropTypes.number,
};
export default Pokemon;
