import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../redux/pokemonSlice.jsx';
import PokemonCard from '../components/PokemonCard'; // 경로를 올바르게 조정

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.list);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemonList.length > 0 ? (
        pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonList;
