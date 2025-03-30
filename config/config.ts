import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3001,
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/pokerate',
  pokeAPI: 'https://pokeapi.co/api/v2',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key'
};