import { render } from '@testing-library/react';

import { PokemonList } from '@/components/PokemonList';

describe('PokemonList', () => {
    it('renders', () => {
        render(<PokemonList/>)
    });
})