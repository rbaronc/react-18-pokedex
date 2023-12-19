import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import PokemonFetchService from "@/services/PokemonFetchService";
import POKEMON_API_V2_URL from "@/constants/urls";
import { GET_POKEMON_RAW_LIST } from "@/fixtures/axios/get/pokemonList/raw-list-fixture";
import { SQUIRTLE_API, WATORTLE_API, BLASTOISE_API } from "@/fixtures/axios/get/pokemon";

describe('PokemonService', () => {
    it('Returns a processed pokemon list from the API', async () => {
        const axiosMock = new MockAdapter(axios);
        axiosMock.onGet(
            `${POKEMON_API_V2_URL}/?offset=0&limit=50`
        )
        .reply(200, GET_POKEMON_RAW_LIST);

        axiosMock.onGet(
            `${POKEMON_API_V2_URL}/7`
        )
        .reply(200, SQUIRTLE_API);

        axiosMock.onGet(
            `${POKEMON_API_V2_URL}/8`
        )
        .reply(200, WATORTLE_API);

        axiosMock.onGet(
            `${POKEMON_API_V2_URL}/9`
        )
        .reply(200, BLASTOISE_API);
        
        const pokemonList = await PokemonFetchService.getPokemonList();
        const pokemonKeys = Object.keys(pokemonList);
        
        expect(pokemonKeys.length).toEqual(3);
        expect(pokemonList[pokemonKeys[0]].id).toEqual("7");
        expect(pokemonList[pokemonKeys[0]].name).toEqual('squirtle');
        expect(pokemonList[pokemonKeys[0]].imageURL).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg');
    });
});