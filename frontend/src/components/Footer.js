import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} AniLook</p>
      <p>Made by Adw05 | <a href="https://github.com/Adw05" target="_blank" rel="noopener noreferrer">github.com/Adw05</a></p>
    </footer>
  );
};

export default Footer;
