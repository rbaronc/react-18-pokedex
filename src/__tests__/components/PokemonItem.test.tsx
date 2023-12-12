import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { PokemonItem } from '@/components/PokemonItem';
import { GET_POKEMON } from '@/fixtures/components/PokemonItem/fixture';
import { act } from 'react-dom/test-utils';

beforeEach(async ()=> {
    await act(async() => render(<PokemonItem/>));
    jest.mock('axios');
    axios.get = jest.fn().mockResolvedValue({data: GET_POKEMON});
});

describe('PokemonItem', () => {
    it('has an ID', async () => {
        await waitFor(() => {
            const pokemonID = screen.getByText(/1/i);
            expect(pokemonID.innerHTML).toEqual('1');
        });
    });

    it('has a name', () => {
        const pokemonName = screen.getByText(/bulbasaur/i);
        expect(pokemonName.innerHTML).toEqual('bulbasaur');
    });

    it('has an image', () => {
        const pokemonImage = screen.getByRole('img');

        expect(pokemonImage.getAttribute('src')).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg');
        expect(pokemonImage.getAttribute('alt')).toEqual('bulbasaur');
    });
})