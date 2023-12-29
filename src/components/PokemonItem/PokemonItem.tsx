import React from 'react';
import { useDispatch } from 'react-redux';

import { Pokemon } from "@/models";
import { setSelectedPokemon } from '@/redux/slices/selected-pokemon-slice';

import './styles.css';

type PokemonItemProps = {
    pokemon: Pokemon
};

export default function PokemonItem({pokemon}: PokemonItemProps): React.ReactNode {

    const dispatch = useDispatch();
    const handlePokemonItemClick = (pokemon: Pokemon) => {
        
        dispatch(setSelectedPokemon(pokemon));
    };

    return (
        <div className="pokemon-item" onClick={() => {
            handlePokemonItemClick(pokemon);
        }}>
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
