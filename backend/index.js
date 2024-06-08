import express from 'express';
import dotenv from 'dotenv';
import DBConnection from './database/db.js';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js'
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Initialize the database connection
DBConnection();

// Initialize the Express application
const app = express();

// Use middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Define routes
app.get('/', (req, res) => {
    res.send('Hello');
});
app.use('/book', bookRoute);
app.use('/user', userRoute)

// Start the server
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
