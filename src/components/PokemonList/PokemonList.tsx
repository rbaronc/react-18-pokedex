import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';

import PokemonFetchService from "@/services/PokemonFetchService";
import { Pokemon } from "@/models";
import { PokemonItem } from "../PokemonItem";

export default function PokemonList(): React.ReactNode {
    const [pokemonList, setPokemonList] = useState<Record<string, Pokemon>>({});

    useEffect(()=> {
        PokemonFetchService.getPokemonList()
            .then((newPokemonList) => {
                setPokemonList({
                    ...pokemonList,
                    ...newPokemonList                    
                });
            });
    }, []);

    const pokemonIDs: string[] = Object.keys(pokemonList);
    const noPokemonsComponent = <Grid item xs={12}>No Pokemos available.</Grid>
    const pokemonRenderList = pokemonIDs.map((pokemonID: string) => {
        const pokemon = pokemonList[pokemonID];
        return (
            <Grid item xs={4} key={`${pokemon.name}-${pokemon.id}`}>
                <PokemonItem pokemon={pokemon}/>
            </Grid>
        );
    });

    return(
        <div className="pokemon-list">
            <div className="header">Pokemon List!</div>
            <Grid container className="list">
                {pokemonIDs.length? pokemonRenderList: noPokemonsComponent}
            </Grid>            
        </div>
    );
}