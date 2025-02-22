import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectdb = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error('MONGO_URL environment variable is not defined');
    }
    await connect(process.env.MONGO_URL);
    console.log('MongoDB Atlas connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit if database connection fails
  }
};


 
