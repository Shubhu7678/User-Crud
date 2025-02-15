import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import cors from 'cors';
import connectDB from './config/database.js';
import userRoutes from './routes/user.js';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(cors());

app.use('/api/v1/user', userRoutes);

app.listen(process.env.PORT, () => { 

    console.log(`Server running on port ${process.env.PORT}`);
})

connectDB();