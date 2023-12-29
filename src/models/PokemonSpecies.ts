export interface PokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: NameAndURL;
    egg_groups: NameAndURL[];
    evolution_chain: Evolutionchain;
    evolves_from_species?: any;
    flavor_text_entries: Flavortextentry[];
    form_descriptions: any[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genus[];
    generation: NameAndURL;
    growth_rate: NameAndURL;
    habitat: NameAndURL;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: Name[];
    order: number;
    pal_park_encounters: Palparkencounter[];
    pokedex_numbers: Pokedexnumber[];
    shape: NameAndURL;
    varieties: Variety[];
}

export interface Variety {
    is_default: boolean;
    pokemon: NameAndURL;
}

export interface Pokedexnumber {
    entry_number: number;
    pokedex: NameAndURL;
}

export interface Palparkencounter {
    area: NameAndURL;
    base_score: number;
    rate: number;
}

export interface Name {
    language: NameAndURL;
    name: string;
}

export interface Genus {
    genus: string;
    language: NameAndURL;
}

export interface Flavortextentry {
    flavor_text: string;
    language: NameAndURL;
    version: NameAndURL;
}

export interface Evolutionchain {
    url: string;
}

export interface NameAndURL {
    name: string;
    url: string;
}