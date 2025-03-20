import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Cache the database connection
let cachedConnection = null;

export const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // These are MongoDB connection options - they help maintain stable connection
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10
    });
    
    cachedConnection = conn;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export { default as User } from './models/User.js';
export { default as Donation } from './models/Donation.js';
export { default as Organization } from './models/Organization.js';
export { default as Contact } from './models/Contact.js';