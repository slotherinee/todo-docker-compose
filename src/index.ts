import express from 'express';
import todoRoutes from './routes/todoRoutes';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorMiddleware';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', todoRoutes);
app.use(errorHandler)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})