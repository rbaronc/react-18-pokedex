import { render, screen, waitFor } from '@testing-library/react';
import PokemonFetchService from '@/services/PokemonFetchService';
import { act } from 'react-dom/test-utils';

import { PokemonList } from '@/components/PokemonList';
import { GET_POKEMON_LIST as mockPkmnList } from '@/fixtures/axios/get/pokemonList/fixture';

describe('PokemonList', () => {
    it('Renders', async () => {
        await act(async() => render(<PokemonList/>));
        const listHeader = screen.getByText(/Pokemon List!/i);

        await waitFor(() => {
            expect(listHeader.innerHTML).toEqual('Pokemon List!');
        });
    } );    

    it('Renders a list of 50 pokemon', async () => {
        PokemonFetchService.getPokemonList = jest.fn().mockResolvedValue(mockPkmnList);
        const {container} = await act(async() => render(<PokemonList/>));

        const pokemonItems = container.querySelectorAll('.pokemon-item');

        await waitFor(() => {
            expect(pokemonItems.length).toEqual(50);
        });
    });

    it('Renders a message when Pokemons are not available', async () => {
        PokemonFetchService.getPokemonList = jest.fn().mockResolvedValue({});
        await act(async() => render(<PokemonList/>));

        const listHeader = screen.getByText(/No Pokemos available./i);

        await waitFor(() => {
            expect(listHeader.innerHTML).toEqual('No Pokemos available.');
        });
    } );
})