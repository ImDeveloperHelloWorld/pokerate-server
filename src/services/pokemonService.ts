import axios from 'axios';
import { config } from '../../config/config';

export const pokemonService = {
  getAll: async (offset: string) => {
    try {

      const response = await axios.get(`${config.pokeAPI}/pokemon?limit=15&offset=${offset}`);
      
      return response.data.results;
    } catch (error) {
      throw new Error('Failed to fetch Pokémons');
    }
  },

  getOne: async (pokemonName: string) => {
    try {
      const response = await axios.get(`${config.pokeAPI}/pokemon/${pokemonName}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch Pokémon');
    }
  },
  getEvolution: async (pokemonId: string) => {
    try {
      const response = await axios.get(`${config.pokeAPI}/evolution-chain/${pokemonId}`);      
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch Pokémon Evolution');
    }
  },
};