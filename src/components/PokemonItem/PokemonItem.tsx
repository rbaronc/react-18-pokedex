import React from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Pokemon } from "@/models";
import { setSelectedPokemon } from "@/redux/slices/selected-pokemon-slice";

import "./styles.css";

type PokemonItemProps = {
    pokemon: Pokemon;
};

export default function PokemonItem({
    pokemon,
}: PokemonItemProps): React.ReactNode {
    const dispatch = useDispatch();
    const handlePokemonItemClick = (pokemon: Pokemon) => {
        dispatch(setSelectedPokemon(pokemon));
    };

    return (
        <Card className="pokemon-item" variant="outlined">
            <CardContent>
                <Grid
                    container
                    onClick={() => {
                        handlePokemonItemClick(pokemon);
                    }}
                >
                    <Grid item className="id" xs={2}>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            gutterBottom
                        >
                            #{pokemon.id}
                        </Typography>
                    </Grid>
                    <Grid item className="name" xs={10}>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            gutterBottom
                        >
                            {pokemon.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="image-container">
                        <img
                            className="image"
                            src={pokemon.listImageURL}
                            alt={pokemon.name}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
