import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
`;

const PokemonCard = ({ pokemon }) => {
  const pokemonId = pokemon.url.split('/').filter(Boolean).pop();

  return (
    <Card>
      <Link to={`/pokemon/${pokemonId}`}>
        <h3>{pokemon.name}</h3> {/* 한국어 이름 표시 */}
      </Link>
    </Card>
  );
};

export default PokemonCard;
