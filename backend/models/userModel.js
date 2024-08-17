//backend/models/userModels.js
import db from '../config/db.js';

export const findUserByEmail = async (email) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  } catch (error) {
    console.error('Error finding user by email:', error); // Add this for debugging
    throw error;
  }
};
export const createUser = async (email, hashedPassword) => {
  const result = await db.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, hashedPassword]);
  return result.rows[0];
};

export const updateUserGrievance = async (email, grievance) => {
  try {
    await db.query('UPDATE users SET grievance = $1 WHERE email = $2', [grievance, email]);
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
};