import app from './src/app.js';
import { connectDB } from './src/db.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server started at port:${port}`);
  });
}

// For serverless environments like Vercel
export default app;