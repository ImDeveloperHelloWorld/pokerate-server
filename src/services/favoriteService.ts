import FavoritePokemon from '../../models/pokemonModel';

export const favoriteService = {
  getAll: async (userId: string) => {
    return FavoritePokemon.find({ userId });
  },

  add: async (userId: string, pokemon: { name: string; url: string }) => {
    const newFavorite = new FavoritePokemon({
      name: pokemon.name,
      url: pokemon.url,
      userId,
    });
    return await newFavorite.save();
  },

  remove: async (favoriteId: string) => {
    const result = await FavoritePokemon.findOneAndDelete({ _id: favoriteId });
    return result;
  },
};