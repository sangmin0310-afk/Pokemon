import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';

// Redux store를 설정합니다.
const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

// store를 기본으로 내보냅니다.
export default store;
