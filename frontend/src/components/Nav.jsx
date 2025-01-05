import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <motion.div 
              className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl font-bold text-white">M</span>
            </motion.div>
            <span className="ml-2 text-xl font-semibold text-gray-800">MealMesh</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-900 transition-colors">
              About
            </Link>
            <Link to="/donors" className="text-gray-600 hover:text-blue-900 transition-colors">
              Donors
            </Link>
            <Link to="/organizations" className="text-gray-600 hover:text-blue-900 transition-colors">
              Organizations
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="sm:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">

            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">
              About
            </Link>
            <Link to="/donors" className="block px-3 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">
              Donors
            </Link>
            <Link to="/organizations" className="block px-3 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">
              Organizations
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;