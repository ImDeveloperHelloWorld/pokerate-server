import { Router } from 'express';
import { getAllPokemons, getOnePokemon, getPokemonEvolution } from '../controllers/pokemonsController';

const router = Router();

router.get('/', getAllPokemons);
router.get('/:pokemonName', getOnePokemon);
router.get('/evolution/:pokemonId', getPokemonEvolution)

export default router;