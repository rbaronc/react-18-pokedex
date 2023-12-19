import axios from 'axios';

import { Pokemon, PokemonResultAPI } from '@/models';
import POKEMON_API_V2_URL from '@/constants/urls';

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
        const {data} = await axios.get(`${POKEMON_API_V2_URL}/${pokemonID}`);

        return {
            name: data.name, 
            id: data.id.toString(), 
            imageURL: data?.sprites?.other?.dream_world?.front_default
        };
    }

    private static getPokemonIDFromAPIResult(result: PokemonResultAPI): string {
        const id = result.url.split("/").find((bit: string) => !isNaN(parseInt(bit)));
        return id || '';
    }

    public static getPokemonList(): Promise<Record<string, Pokemon>> {
        return new Promise((resolve, reject) => {
            axios.get(`${POKEMON_API_V2_URL}/?offset=0&limit=50`)
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