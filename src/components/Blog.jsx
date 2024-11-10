import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaBlog } from 'react-icons/fa'; // Import an icon from React Icons

const Blog = () => {
  return (
    <motion.div
      className="min-h-screen bg-black text-white px-6 sm:px-10 md:px-16 lg:px-32 py-10"
      initial={{ opacity: 0 }} // Start from transparent
      animate={{ opacity: 1 }} // Animate to fully visible
      transition={{ duration: 1 }} // Duration of the transition
    >
      <motion.div
        className="bg-zinc-950 rounded-lg shadow-lg p-8 w-full max-w-3xl"
        initial={{ y: 50 }} // Start from below
        animate={{ y: 0 }} // Animate to the original position
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.div
          className="flex justify-start mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaBlog className="text-6xl text-white" />
        </motion.div>
        <motion.h1
          className="text-3xl font-bold text-left text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to My Blog
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Stay tuned for exciting posts about web development, technology, and more!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
