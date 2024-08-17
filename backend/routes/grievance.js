//backend/routes/grievance.js
import express from 'express';
import { submitGrievance, getGrievances } from '../controllers/grievanceController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/submit', isAuthenticated, submitGrievance);
router.get('/grievances', isAuthenticated, getGrievances);

export default router;
