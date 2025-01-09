import mongoose from 'mongoose';
import User from './models/User.js';
import Donation from './models/Donation.js';
import Organization from './models/Organization.js';
import Contact from './models/Contact.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export { User, Donation, Organization, Contact };