//backend/app.js
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import env from 'dotenv';
import authRoutes from './routes/auth.js';
import grievanceRoutes from './routes/grievance.js';
import './config/passport.js'; // Setup passport strategies
import cors from 'cors';
import path from "path";
import { fileURLToPath } from 'url';

env.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);
app.use('/api/grievance', grievanceRoutes);
// Serve static files from the React frontend app
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle any requests that don't match the API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
export default app;
