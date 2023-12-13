import React, {useEffect, useState} from "react";
import PokemonFetchService from "@/services/PokemonFetchService";
import { Pokemon } from "@/models";

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
    const pokemonRenderList = pokemonIDs.map((pokemonID: string) => {
        const pokemon = pokemonList[pokemonID];
        return (
            <div key={`${pokemon.name}-${pokemon.id}`}>
                <div>
                    <span>ID:</span>
                    <p>{pokemon.id}</p> 
                </div>
                <div>
                    <span>Name:</span>
                    <p>{pokemon.name}</p> 
                </div>
                <img src={pokemon.imageURL} alt={pokemon.name} />
            </div>
        );
    });

    return(
        <div>
            {pokemonRenderList}
        </div>
    );
}