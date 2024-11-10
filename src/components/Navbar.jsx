import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location (URL)

  // Update the activeNav based on the current path on load
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveNav('Home');
    } else if (path === '/about') {
      setActiveNav('About');
    } else if (path === '/blog') {
      setActiveNav('Blog');
    }
  }, [location.pathname]); // Re-run whenever the pathname changes

  const handleNavClick = (item) => {
    setActiveNav(item);
    if (item === 'Home') navigate('/');
    if (item === 'About') navigate('/about');
    if (item === 'Blog') navigate('/blog');
  };

  return (
    <div className="fixed bottom-2 left-0 right-0 z-50 flex justify-center items-center p-2 sm:p-4">
      <div className="relative p-[1px] rounded-full bg-gradient-to-br from-zinc-500 to-zinc-900 shadow-lg shadow-black/50">
        <nav className="relative flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 rounded-full p-2 bg-black/80 backdrop-blur-md w-fit">
          {['Home', 'About', 'Blog'].map((item) => (
            <motion.button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`relative px-4 py-2 sm:px-6 sm:py-2 rounded-full transition-colors duration-300 text-sm
                ${activeNav === item ? 'text-zinc-400' : 'text-zinc-300 hover:text-white'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeNav === item && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/10"
                  layoutId="activeNavBackground"
                  transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                />
              )}
              {item}
            </motion.button>
          ))}

          {/* Resume Button */}
          <motion.button
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1Z_UtzdZagl8AtwOty7frnqjARYO7fBWS/view?usp=sharing',
                '_blank'
              )
            }
            className="relative px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm text-gray-300 hover:text-white transition-colors duration-300 bg-white/10 border border-white/20 hover:bg-zinc-600/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
