import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

function App() {

  return (    
    <Box>
      <p>Pokedex!</p>
      <Grid container>
        <Grid xs={8} item>
          <PokemonList />
        </Grid>

        <Grid xs={4} item>
          <PokemonDetails></PokemonDetails>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App;
