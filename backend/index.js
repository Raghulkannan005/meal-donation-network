import app from './src/app.js';
import { connectDB } from './src/db.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server started at port:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();