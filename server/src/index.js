import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { db } from './db/config.js';
import cookieParser from 'cookie-parser';
import { authMiddleware } from 'easy-jwt-auth';

const app = express();
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }))
dotenv.config();
app.use(express.json())


db();

app.get("/api/v1", (req, res) => {
    res.send("Hello World");
})



import organizationRoutes from './routes/organization.routes.js';
import authRoutes from './routes/auth.routes.js';
import blogRoutes from './routes/blog.routes.js';

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/org', organizationRoutes);
app.use('/api/v1/blog', blogRoutes);



const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })

export default (req, res) => {
    app(req, res);
};