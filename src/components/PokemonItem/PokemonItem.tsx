import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonItem(): React.ReactNode {
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
            <p><span>ID:</span> {pokemon.id} </p>
            <p><span>Name:</span> {pokemon.name} </p>
            <img src={pokemon.imgUrl} alt="" />
        </div>
    );    
}

export default PokemonItem;

