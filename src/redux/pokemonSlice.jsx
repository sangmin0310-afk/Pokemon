import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 포켓몬 리스트 불러오기 (한국어)
export const fetchPokemonList = createAsyncThunk(
  'pokemon/fetchPokemonList',
  async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const pokemonList = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        const species = await axios.get(details.data.species.url);
        const nameInKorean = species.data.names.find(
          (name) => name.language.name === 'ko'
        ).name;
        return { ...pokemon, name: nameInKorean, speciesData: species.data };
      })
    );
    return pokemonList;
  }
);

// 포켓몬 상세 정보 불러오기 (한국어)
export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonDetail',
  async (id) => {
    const detailResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-form/`
    );
    const speciesResponse = await axios.get(detailResponse.data.species.url);
    const nameInKorean = speciesResponse.data.names.find(
      (name) => name.language.name === 'ko'
    ).name;
    return {
      ...detailResponse.data,
      name: nameInKorean,
      speciesData: speciesResponse.data,
    };
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    list: [],
    detail: null,
    searchResults: [],
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      });
  },
});

export const { setSearchResults } = pokemonSlice.actions;
export default pokemonSlice.reducer;
