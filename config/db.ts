import mongoose from 'mongoose';
import { config } from './config';

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB:', error.message);
    } else {
      console.error('Error connecting to MongoDB:', error);
    }
    process.exit(1); 
  }
};

export default connectDB;