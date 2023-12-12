import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonItem(): React.ReactNode {
    const [pokemon, setPokemon] = useState({
        id: 0, 
        name: '',
        imgUrl: ''
    });

    useEffect(() => {
        const pokemonId = 1;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(({data}) => {
                setPokemon({
                    name: data.name, 
                    id: data.id, 
                    imgUrl: data?.sprites?.other?.dream_world?.front_default
                })
            });
        }, []);

    return (
        <div>
            <div>
                <span>ID:</span>
                <p>{pokemon.id}</p> 
            </div>
            <div>
                <span>Name:</span>
                <p>{pokemon.name}</p> 
            </div>
            <img src={pokemon.imgUrl} alt={pokemon.name} />
        </div>
    );    
}
