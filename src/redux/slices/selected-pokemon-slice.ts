import { Pokemon } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SelectedPokemon = {
    pokemon: Pokemon;
};

const initialState: SelectedPokemon = {
    pokemon: {
        id: '0',
        name: '',
        imageURL: ''
    }
};

export const selectedPokemonSlice = createSlice({
    name: 'selectedPokemon',
    initialState,
    reducers: {
        setSelectedPokemon: (state, action: PayloadAction<Pokemon>) => {
            const pokemonStateIsempty = state.pokemon.id !== '0';
            const pokemonStateIsDifferentThanPayload = state.pokemon.id !== action.payload.id;
            if (pokemonStateIsempty || pokemonStateIsDifferentThanPayload ) {
                state.pokemon = action.payload;
            }            
        },        
        removeSelectedPokemon: (state) => {
            state.pokemon.id = '0';
            state.pokemon.name = '';
            state.pokemon.imageURL = '';
        }
    }
});

export const { setSelectedPokemon, removeSelectedPokemon } = selectedPokemonSlice.actions;

export default selectedPokemonSlice.reducer;