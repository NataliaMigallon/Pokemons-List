import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/App.scss";
import PropTypes from "prop-types";

const PokeList = (props) => {
  const itemList = props.pokemons.map((itemListPoke) => {
    return (
      <li key={itemListPoke.id.toString()}>
        <Pokemon
          id={itemListPoke.id}
          itemPoke={itemListPoke}
          handleFavorites={props.handleFavorites}
        />
      </li>
    );
  });
  return <ul className="page__list">{itemList}</ul>;
};
PokeList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PokeList;
