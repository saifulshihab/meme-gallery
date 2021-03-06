import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/connectDB';
import { errorHandler, notFound } from './middleware/errorMiddleware';
import memeRoutes from './routes/memeRoutes';
import uploadRoutes from './routes/uploadRoutes';

const app = express();

// load environment variables
dotenv.config();

// db connection
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://meme-gallery-web-shihab.netlify.app',
    ],
    credentials: true,
  })
);

// routes
app.get('/', (req, res) => {
  res.end('Server running and up ...');
});
app.use('/api/meme', memeRoutes);
app.use('/upload', uploadRoutes);

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// error middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
