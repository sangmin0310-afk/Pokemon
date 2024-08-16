import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../redux/pokemonSlice.jsx';
import axios from 'axios';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  margin: 16px;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
        );
        const speciesResponse = await axios.get(response.data.species.url);
        const nameInKorean = speciesResponse.data.names.find(
          (name) => name.language.name === 'ko'
        ).name;
        dispatch(
          setSearchResults([
            {
              ...response.data,
              name: nameInKorean,
              speciesData: speciesResponse.data,
            },
          ])
        );
      } catch (error) {
        console.error('포켓몬을 찾을 수 없습니다.');
      }
    }
  };

  return (
    <SearchWrapper>
      <form onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="포켓몬을 검색하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </SearchWrapper>
  );
};

export default SearchBar;
