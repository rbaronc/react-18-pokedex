import React from 'react';
import { Pokemon } from "@/models";

import './styles.css';

type PokemonItemProps = {
    pokemon: Pokemon
};

export default function PokemonItem({pokemon}: PokemonItemProps): React.ReactNode {
    return (
        <div className="pokemon-item">
            <div className="id">
                <span>ID:</span>
                <p>{pokemon.id}</p> 
            </div>
            <div className="name">
                <span>Name:</span>
                <p>{pokemon.name}</p> 
            </div>
            <img className="image" src={pokemon.imageURL} alt={pokemon.name} />
        </div>
    );    
}
