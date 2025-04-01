import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  pokeAPI: 'https://pokeapi.co/api/v2',
};

var whitelist = ['https://imaginative-cheesecake-6d73f7.netlify.app/']

export const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Define allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Define allowed headers
};