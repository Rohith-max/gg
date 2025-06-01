
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline">
            About Us
          </Link>
          <Link to="/shop" className="text-sm font-medium hover:underline">
            Shop
          </Link>
        </nav>
        
        <div className="flex-1 flex justify-center">
          <Link to="/" className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/0347627e-6356-4431-b176-5a32a4de480f.png" 
              alt="Company Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
          <Link to="/cart" className="text-sm font-medium hover:underline">
            Cart (0)
          </Link>
        </div>
        
        <button 
          className="md:hidden"
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
