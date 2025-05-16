
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-sm border-t">
      <div className="container mx-auto px-6">
        <p>
          &copy; {currentYear} Portfolio Dylan Jacquet. Tous droits réservés.
        </p>
        <p className="mt-2 text-muted-foreground">
          Designed with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
