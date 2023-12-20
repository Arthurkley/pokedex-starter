import { create } from 'zustand'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail'

const initStore = {
    pokemon: {
        data: [],
        loading: false,
        error: null,
    },
    fetchPokemon: {
        data: [],
        loading: false,
        error: null,
    },
}

type pokemonType = {
    data: IPokemonDetailResponse[],
    loading: boolean,
    error: null | any,
}

type UsePokemonListStoreType = {
    pokemon: pokemonType
    fetchPokemon: pokemonType,
    setPokemonList: (value: pokemonType) => void,
    setFetchPokemonList: (value: pokemonType) => void,
    clearPokemon: () => void,
}


export const usePokemonListStore = create<UsePokemonListStoreType>((set) => ({
    ...initStore,
    setPokemonList: (value: pokemonType) => {
        //console.log('Setting Pokemon List:', value);
        set({ pokemon: value });
    },
    setFetchPokemonList: (value: pokemonType) => {
        //console.log('Setting Fetch Pokemon List:', value);
        set({ fetchPokemon: value });
    },
    clearPokemon: () => {
        //console.log('Clearing Pokemon');
        set({ ...initStore });
    },
}))

