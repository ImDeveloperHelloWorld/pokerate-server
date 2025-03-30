import { Router } from 'express';
import { getAllPokemons, getOnePokemon } from '../controllers/pokemonsController';

const router = Router();

router.get('/', getAllPokemons);
router.get('/:pokemonName', getOnePokemon);

export default router;