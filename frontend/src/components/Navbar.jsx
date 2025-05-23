import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="w-full flex justify-center px-4">
        <div className="w-full lg:w-[70%] md:w-[85%] sm:w-[95%]">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">Weather Dashboard</Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-base lg:text-lg hover:text-blue-200 transition">Home</Link>
              <Link to="/about" className="text-base lg:text-lg hover:text-blue-200 transition">About</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-600 z-50 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link 
              to="/" 
              className="w-full text-center py-2 text-lg hover:bg-blue-700 transition"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="w-full text-center py-2 text-lg hover:bg-blue-700 transition"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
