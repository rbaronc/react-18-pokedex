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
                <Grid item xs={2}>{selectedPokemon.id}</Grid>
                <Grid item className="name" xs={6}>{selectedPokemon.name}</Grid>
                <Grid item xs={10}>
                    <img className="image" src={selectedPokemon.imageURL} alt={selectedPokemon.name} />
                </Grid>
            </Grid>
            <Typography color="text.secondary" gutterBottom>
                
            </Typography>
            <Typography color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
            </Typography>
        </CardContent>
        </Card>
    );
};