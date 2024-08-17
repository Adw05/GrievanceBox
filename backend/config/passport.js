//backend/config/passport.js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { findUserByEmail } from '../models/userModel.js';
import bcrypt from 'bcrypt';

passport.use(
  'local',
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await findUserByEmail(username);
      if (user && await bcrypt.compare(password, user.password)) {
        return done(null, user);
      }
      return done(null, false, { message: 'Invalid credentials' });
    } catch (err) {
      return done(err);
    }
  })
);



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
