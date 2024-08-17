//backend/controllers/authController.js
import bcrypt from 'bcrypt';
import passport from 'passport';
import { findUserByEmail, createUser } from '../models/userModel.js';

const saltRounds = 10;

export const register = async (req, res) => {
  const { username: email, password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await createUser(email, hashedPassword);

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error logging in after registration' });
      }
      return res.status(201).json({ message: 'Registration successful', user });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during registration', error });
  }
};

export const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Error during login', err });
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error logging in user', err });
      }
      return res.json({ message: 'Login successful', user });
    });
  })(req, res, next);
};

export const logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ message: 'Error during logout', err });
    }
    res.json({ message: 'Logout successful' });
  });
};
