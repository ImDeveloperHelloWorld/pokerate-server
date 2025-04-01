import { Request, Response, NextFunction   } from 'express';
import { pokemonService } from '../services/pokemonService';
import { createError } from '../../middlewares/errorMiddleware';

export const getAllPokemons = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pokemons = await pokemonService.getAll();
    res.json(pokemons);
    if (!pokemons) {
      throw createError('Error fetching pokemons', 404);
    }
  } catch (error) {
    next(error);
  }
};

export const getOnePokemon = async (req: Request, res: any, next: NextFunction) => {
  const { pokemonName } = req.params;
  
  try {
    const pokemon = await pokemonService.getOne(pokemonName);  

    if (!pokemon) {
      throw createError('Error fetching pokemon', 404);
    }
    res.json(pokemon);
  } catch (error) {
    next(error);
    

  }
};

export const getPokemonEvolution = async (req: Request, res: any, next: NextFunction) => {
  const { pokemonId } = req.params;  
  try {
    const pokemon = await pokemonService.getEvolution(pokemonId);  

    if (!pokemon) {
      throw createError('Error fetching pokemon Evolution', 404);
    }
    res.json(pokemon);
  } catch (error) {
    next(error);
    

  }
};