//backend/controllers/grievanceController.js
import { updateUserGrievance } from '../models/userModel.js';
import db from '../config/db.js';


export const submitGrievance = async (req, res) => {
  const { grievance } = req.body;

  try {
    await updateUserGrievance(req.user.email, grievance);
    res.json({ message: 'grievance submitted successfully' });
  } catch (error) {
    console.error('Error during grievance submission:', error);
    res.status(500).json({ message: 'Server error during grievance submission', error });
  }
};

export const getGrievances = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const result = await db.query('SELECT grievance FROM users WHERE email = $1', [req.user.email]);
    const grievance = result.rows[0]?.grievance || 'No grievance found';
    res.json({ grievance });
  } catch (error) {
    console.error('Error fetching grievance:', error); // Add this for debugging
    res.status(500).json({ message: 'Server error during fetching grievance', error });
  }
};

