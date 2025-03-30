import { Router } from 'express';
import { getFavorites, addFavorite, removeFavorite } from '../controllers/favoritesController';

const router = Router();

router.get('/:userId', getFavorites);
router.post('/', addFavorite);
router.delete('/:favoriteId', removeFavorite);

export default router;