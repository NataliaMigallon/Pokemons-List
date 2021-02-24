import React from "react";
import Pokemons from "../data/data.json";
import PokeList from "./PokeList";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Mi lista de Pokemons</h1>
        <PokeList PokeArray={Pokemons} />
      </div>
    );
  }
}
export default App;
