import express from 'express';
import connectDB from '../config/db';
import pokemonsRoutes from './routes/pokemonsRoutes';
import favoritesRoutes from './routes/favoritesRoutes';
import { errorMiddleware } from '../middlewares/errorMiddleware';
import { config } from '../config/config';
import rateLimit from 'express-rate-limit';

// Initialize express app
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes in milliseconds
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiter to all routes
app.use(limiter);


// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/pokemons', pokemonsRoutes);
app.use('/favorites', favoritesRoutes);

// Error handling middleware (ensure it's used correctly)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  errorMiddleware(err, req, res, next);
});

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});