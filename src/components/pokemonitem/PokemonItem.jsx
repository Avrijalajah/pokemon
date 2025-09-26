import "./PokemonItem.css";

function PokemonItem({ pokemon }) {
  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: pokemon.color }}
    >
      <img src={pokemon.imageUrl} alt={pokemon.name} width={150} />
      <h1>{pokemon.name}</h1>

      <div className="badge-container">
        {pokemon.types.map((type, index) => (
          <span key={index} className="badge">{type}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonItem;
