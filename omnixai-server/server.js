import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import userRouter from './routes/userRoutes.js';
import { connectCloudinary } from './config/cloudinary.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use('/api/ai', requireAuth, aiRouter);
app.use('/api/user', requireAuth, userRouter);

connectCloudinary();

app.listen(PORT, () => {
  // Server is running
});