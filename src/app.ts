import express from 'express';
import userRoutes from './routes/userRoutes';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

app.use(errorHandler); // Global error handler

export default app;
