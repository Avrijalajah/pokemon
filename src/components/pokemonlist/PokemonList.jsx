import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";
import "./PokemonList.css";
import PokemonItem from "../pokemonitem/pokemonitem";

function PokemonList() {
  const [search, setSearch] = useState("");

  const filtered = pokemonJSON.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="cari pokemon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="list-container">
        {filtered.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
