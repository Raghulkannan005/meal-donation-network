// frontend/src/components/Nav.jsx
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <motion.div 
                className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl font-bold text-white">M</span>
              </motion.div>
            </Link>
            <span className="ml-3 text-xl font-semibold text-emerald-900">MealMesh</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-emerald-800 hover:text-emerald-600">
              Home
            </Link>
            <Link to="/about" className="text-emerald-800 hover:text-emerald-600">
              About
            </Link>
            <Link to="/donors" className="text-emerald-800 hover:text-emerald-600">
              Donors
            </Link>
            <Link to="/organizations" className="text-emerald-800 hover:text-emerald-600">
              Organizations
            </Link>
            <Link to="/contact" className="text-emerald-800 hover:text-emerald-600">
              Contact
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to={`/${user?.type || 'org'}/dashboard`}
                  className="text-emerald-800 hover:text-emerald-600"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile"
                  className="text-emerald-800 hover:text-emerald-600"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-emerald-800 hover:text-emerald-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-emerald-800 hover:text-emerald-600"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden bg-white/90 backdrop-blur-sm border-t border-emerald-100"
        >
          
<div className="px-4 py-2 space-y-1">
<Link
  to="/"
  className="block py-2 text-emerald-800 hover:text-emerald-600"
  onClick={() => setIsOpen(false)}
>
  Home
</Link>
<Link
  to="/about"
  className="block py-2 text-emerald-800 hover:text-emerald-600"
  onClick={() => setIsOpen(false)}
>
  About
</Link>
<Link
  to="/donors"
  className="block py-2 text-emerald-800 hover:text-emerald-600"
  onClick={() => setIsOpen(false)}
>
  Donors
</Link>
<Link
  to="/organizations"
  className="block py-2 text-emerald-800 hover:text-emerald-600"
  onClick={() => setIsOpen(false)}
>
  Organizations
</Link>
<Link
  to="/contact"
  className="block py-2 text-emerald-800 hover:text-emerald-600"
  onClick={() => setIsOpen(false)}
>
  Contact
</Link>

{user ? (
  <>
    <Link
      to={`/${user.type}/dashboard`}
      className="block py-2 text-emerald-800 hover:text-emerald-600"
      onClick={() => setIsOpen(false)}
    >
      Dashboard
    </Link>
    <Link
      to="/profile"
      className="block py-2 text-emerald-800 hover:text-emerald-600"
      onClick={() => setIsOpen(false)}
    >
      Profile
    </Link>
    <button
      onClick={() => {
        handleLogout();
        setIsOpen(false);
      }}
      className="block w-full text-left py-2 text-emerald-800 hover:text-emerald-600"
    >
      Logout
    </button>
  </>
) : (
  <>
  </>
)}
</div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
