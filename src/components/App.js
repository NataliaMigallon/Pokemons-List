import React, { useState } from "react";
import data from "../data/data.json";
import PokeList from "./PokeList";
import "../stylesheets/App.scss";

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
        <h1 className="page__title">Mi lista de Pokemons</h1>
      </header>
      <main>
        <PokeList pokemons={pokemons} handleFavorites={handleFavorites} />
      </main>
    </div>
  );
};

export default App;
