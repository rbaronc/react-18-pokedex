import { render, screen, waitFor } from '@testing-library/react';

import { PokemonItem } from '@/components/PokemonItem';
import POKEMON from '@/fixtures/models/pokemon';

beforeEach(async ()=> {
    render(<PokemonItem pokemon={POKEMON}/>);
    jest.mock('axios');
});

describe('PokemonItem', () => {
    it('has an ID', async () => {
        await waitFor(() => {
            const pokemonID = screen.getByText(/7/i);
            expect(pokemonID.innerHTML).toEqual('7');
        });
    });

    it('has a name', () => {
        const pokemonName = screen.getByText(/squirtle/i);
        expect(pokemonName.innerHTML).toEqual('squirtle');
    });

    it('has an image', () => {
        const pokemonImage = screen.getByRole('img');

        expect(pokemonImage.getAttribute('src')).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg');
        expect(pokemonImage.getAttribute('alt')).toEqual('squirtle');
    });
})