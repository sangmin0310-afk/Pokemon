import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import PokemonList from './components/PokemonList';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <Routes>
        {' '}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<PokemonList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
