import axios from 'axios';

import { Pokemon, PokemonResultAPI } from '@/models';
import POKEMON_API_V2_URL from '@/constants/urls';
import { PokemonSpecies } from '@/models/PokemonSpecies';

export default class PokemonFetchService {

    private static async processPokemonListResult(resultFromAPI: PokemonResultAPI[] = []): Promise<Record<string, Pokemon>> {        
        const pokemonList: Record<string, Pokemon> = {};
        for(let i = 0; i < resultFromAPI.length; i++) {
            const result = resultFromAPI[i];
            const id = this.getPokemonIDFromAPIResult(result);
            const pokemon = await this.getPokemon(id);
            pokemonList[id] = pokemon;
        }

        return pokemonList;
    }

    private static async getPokemon(pokemonID: string): Promise<Pokemon> {
        const {data} = await axios.get(`${POKEMON_API_V2_URL}/pokemon/${pokemonID}`);
        const pokemonSpecies = await this.getPokemonSpecies(pokemonID);
        return {
            name: data.name, 
            id: data.id.toString(), 
            imageURL: data?.sprites?.other?.dream_world?.front_default,
            description: this.getDescription(pokemonSpecies)
        };
    }

    private static async getPokemonSpecies(pokemonID: string): Promise<PokemonSpecies> {
        const {data} = await axios.get(`${POKEMON_API_V2_URL}/pokemon-species/${pokemonID}`);
        return data;
    }

    private static getPokemonIDFromAPIResult(result: PokemonResultAPI): string {
        const id = result.url.split("/").find((bit: string) => !isNaN(parseInt(bit)));
        return id || '';
    }

    private static getDescription(pokemonSpecies: PokemonSpecies): string {
        const englishEntries = pokemonSpecies.flavor_text_entries.filter((entry) => (entry.language.name == "en")).map((entry) => ({text: entry.flavor_text}));
        const latestEntry = englishEntries[englishEntries.length - 1];

        return latestEntry.text;
    }

    public static getPokemonList(): Promise<Record<string, Pokemon>> {
        return new Promise((resolve, reject) => {
            axios.get(`${POKEMON_API_V2_URL}/pokemon/?offset=0&limit=30`)
                .then(async ({ data }) => {
                    const pokemonList = await this.processPokemonListResult(data?.results);
                    resolve(pokemonList);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}