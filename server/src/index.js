import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { db } from './db/config.js';

const app = express();
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }))
dotenv.config();
app.use(express.json())


db();

app.get("/api/v1", (req, res) => {
    res.send("Hello World");
})


// IMPORT ROUTES
import organizationRoutes from './routes/organization.routes.js';
import authRoutes from './routes/auth.routes.js';
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/org', organizationRoutes);



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})