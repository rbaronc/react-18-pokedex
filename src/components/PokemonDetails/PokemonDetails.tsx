import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { RootState } from "@/redux/store/store";

import "./styles.css";

export default function PokemonDetails() {
    const selectedPokemon = useSelector(
        (state: RootState) => state.selectedPokemon.pokemon
    );

    return (
        <Card className="pokemon-details">
            <CardContent>
                <Grid container>
                    <Grid item className="id" xs={4}>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            gutterBottom
                        >
                            {selectedPokemon.id}
                        </Typography>
                    </Grid>
                    <Grid item className="name" xs={8}>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            gutterBottom
                        >
                            {selectedPokemon.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="image-container">
                        <img
                            className="image"
                            loading="lazy"
                            src={selectedPokemon.showDownImage}
                            alt={selectedPokemon.name}
                        />
                    </Grid>
                    <Grid item xs={12} className="description">
                        <Typography variant="h6">
                            {selectedPokemon.description}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
