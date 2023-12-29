import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { RootState } from "@/redux/store/store";

import './styles.css';

export default function PokemonDetails() {
    const selectedPokemon = useSelector((state: RootState) => state.selectedPokemon.pokemon);

    return (
        <Card className="pokemon-details">            
            <CardContent>
                <Grid container>
                    <Grid item className="id" xs={2}>
                        <Typography color="text.secondary" gutterBottom>
                            {selectedPokemon.id}
                        </Typography>
                    </Grid>
                    <Grid item className="name" xs={6}>
                        <Typography color="text.secondary" gutterBottom>
                            {selectedPokemon.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <img className="image" src={selectedPokemon.imageURL} alt={selectedPokemon.name} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            {selectedPokemon.description}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};