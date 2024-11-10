import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Mesh Gradient Background (Shades of Gray/Black) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-zinc-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-zinc-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-black rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-zinc-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Navbar />
      </div>
    </div>
  );
};

export default App;
