import React, {useEffect, useState} from "react";

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
    const noPokemonsComponent = <p>No Pokemos available.</p>
    const pokemonRenderList = pokemonIDs.map((pokemonID: string) => {
        const pokemon = pokemonList[pokemonID];
        return (
            <PokemonItem key={`${pokemon.name}-${pokemon.id}`} pokemon={pokemon}/>
        );
    });

    return(
        <div className="pokemon-list">
            <div className="header">Pokemon List!</div>
            <div className="list">
                {pokemonIDs.length? pokemonRenderList: noPokemonsComponent}
            </div>            
        </div>
    );
}