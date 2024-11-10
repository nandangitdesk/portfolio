import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../assets/portfolio-logo.png";
import profilepic from "../assets/portfolioimagemy.png";
import { PiCommandThin, PiRabbitThin } from "react-icons/pi";
import { GoCommandPalette } from "react-icons/go";
import ShuffleText from "./ShuffleText";
import HighlightedText from "./HighlightedText";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen w-full">
      {/* Navbar */}
      <div className="h-20 w-full flex justify-between items-center px-6 lg:px-56">
        <div className="h-8">
          <motion.img
            className="h-full w-full object-contain"
            src={logo}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="flex items-center gap-5 text-white">
          <motion.a
            href="/"
            className="group relative w-max hover:text-zinc-300"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            <span>work</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.060rem] bg-white group-hover:w-full"></span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nandanone/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-max hover:text-zinc-300"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.3 }}
          >
            <span>LinkedIn</span>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.060rem] bg-white group-hover:w-full"></span>
          </motion.a>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex items-center justify-center">
        <motion.img
          src={profilepic}
          alt=""
          className="w-40 h-40 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-cover rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Intro Section */}
      <div className="mt-6 text-center px-4">
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-white"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.5 }}
        >
          <ShuffleText text="Hi, I’m Nandan" />
        </motion.h1>

        <motion.h3
          className="text-zinc-600 mt-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.6 }}
        >
          <span><ShuffleText text="Creative Developer " /></span>{" "}
          <span className="text-black md:text-zinc-600">|</span>{" "}
          <span><ShuffleText text="Full Stack Developer" /></span>
        </motion.h3>

        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 text-white md:w-[45%] md:mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.7 }}
        >
          Passionate about Designing & Building Experiences that Unlock{" "}
          <HighlightedText text="Growth" />
        </motion.h1>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap items-center md:justify-between justify-center gap-6 mt-7 px-4 lg:w-[50%] mx-auto">
        <motion.div
          className="flex items-center gap-3 text-medium md:text-lg text-zinc-500 lg:ml-5"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.8 }}
        >
          <PiRabbitThin className="text-medium md:text-xl text-white" />
          <span><ShuffleText text="Fast" /></span>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 text-medium md:text-lg text-zinc-500 lg:ml-12"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.9 }}
        >
          <PiCommandThin className="text-medium md:text-xl text-white" />
          <span><ShuffleText text="Creative" /></span>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 text-medium md:text-lg text-zinc-500"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 1 }}
        >
          <GoCommandPalette className="text-medium md:text-xl text-white" />
          <span><ShuffleText text="Dev Friendly" /></span>
        </motion.div>
      </div>


    </div>
  );
};

export default Home;
