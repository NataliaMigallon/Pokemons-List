import React, { useState } from "react";
import data from "../data/data.json";
import PokeList from "./PokeList";
import "../stylesheets/App.scss";
import PokemonLogo from "../images/Pokemon_logo2.png";

const App = () => {
  const [pokemons] = useState(data);
  const [favorites, setFavorites] = useState([]);

  const handleFavorites = (clickId) => {
    // bucar el index
    const favPoke = favorites.findIndex((favorite) => {
      return favorite.id === clickId;
    });

    if (favPoke === -1) {
      // buscar el pokemon
      const pokeClick = pokemons.find((pokemon) => {
        return pokemon.id === clickId;
      });
      // seleccionarlo como favorito
      favorites.push(pokeClick);
      setFavorites([...favorites]);
    } else {
      // deseleccionarlo como favorito
      favorites.splice(favPoke, 1);
      setFavorites([...favorites]);
    }
  };
  return (
    <div className="page">
      <header>
        <img className="page__title" src={PokemonLogo} alt="Pokemon logo" />
        <h1 className="page__title--subtext">Gotta catch 'em all!</h1>
      </header>
      <main>
        <PokeList pokemons={pokemons} handleFavorites={handleFavorites} />
      </main>
      <footer className="footer">
        <small className="footer__small">@2021 Natalia_Migallón</small>
        <span className="footer__line">|</span>
        <p className="footer__github">Visit my projects at</p>
        <a
          href="https://github.com/NataliaMigallon"
          title="Link to NataliaMigallón GitHub"
          target="_blank"
          className="github"
        >
          <i className="fab fa-github"></i>
        </a>
      </footer>
    </div>
  );
};

export default App;
