//TODO
/*
<div id="pokeTeam">
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
</div>
*/
import React from 'react';
import PokeTeamSlot from './PokeTeamSlot.jsx';

const PokeTeam = (props) => {
  (props.pokemon) 
  ? (
      <div id="pokeTeam">
        {props.pokeTeam.map((pokemon, index) => (<PokeTeamSlot pokemon={pokemon} key={index} addPokemon={props.addPokemon}/>))}
      </div>
  ) : (
    <button>Add a Pokemon</button>
  );
};

export default PokeTeam