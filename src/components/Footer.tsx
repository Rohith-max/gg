import React from 'react';

const Footer = () => {

  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="mt-4 pt-4 border-t border-gray-800 text-sm text-gray-400">
            © {new Date().getFullYear()} GreekGod. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
