import mongoose, { Schema, Document } from 'mongoose';

interface IFavoritePokemon extends Document {
  name: string;
  userId: string;
}

const favoritePokemonSchema: Schema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
});

const FavoritePokemon = mongoose.model<IFavoritePokemon>('FavoritePokemon', favoritePokemonSchema);

export default FavoritePokemon;