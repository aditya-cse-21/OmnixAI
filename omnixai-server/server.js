import dotenv from 'dotenv';
// Load env variables FIRST, before any other imports
dotenv.config();

import express from 'express';
import cors from 'cors';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import userRouter from './routes/userRoutes.js';
import connectCloudinary from './config/cloudinary.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routes
app.use('/api/ai', requireAuth, aiRouter);
app.use('/api/user', requireAuth, userRouter);

// Cloudinary
connectCloudinary();

// Default route (health check)
app.get('/', (req, res) => {
  res.send('🚀 Server is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
