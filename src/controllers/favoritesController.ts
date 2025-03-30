import { Request, Response, NextFunction   } from 'express';
import { favoriteService } from '../services/favoriteService';
import { createError } from '../../middlewares/errorMiddleware';

export const getFavorites = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;
  try {
    const favorites = await favoriteService.getAll(userId);
    res.json(favorites);
    if(!favorites){
      throw createError('Error fetching favorites pokemons', 404);
    }
  } catch (error) {
    next(error);
  }
};

export const addFavorite = async (req: Request, res: Response, next: NextFunction) => {
  const { name, url, userId } = req.body;
  try {
    const added = await favoriteService.add(userId, { name, url });
    res.status(201).json(added);
    if (!added) {
      throw createError('Error adding to favorite pokemon', 404);
    }
  } catch (error) {
    next(error)
  }
};

export const removeFavorite = async (req: Request, res: any, next: NextFunction) => {
  const { favoriteId } = req.params;
  try {
    const removed = await favoriteService.remove(favoriteId);
    if (!removed) {
      return res.json({ message: 'Pokemon not in user favorites' });
    }
    res.json({ message: 'Error deleting pokemon' });
  } catch (error) {
    next(error);

  }
};