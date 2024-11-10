import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion
import myImage from "../assets/myImage.jpg";
import collegeLogo from "../assets/collegeLogo.png";
import ShuffleText from "./ShuffleText";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export default function Component() {
  const [text, setText] = useState("");
  const fullText = "Hello,\nMy name is Nandan";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Prevent horizontal scroll globally
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = ""; // Cleanup on unmount
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full px-6 sm:px-10 lg:px-36 mt-10 overflow-hidden"
      style={{ overflowX: "hidden" }}
    >
      <motion.h1
        className="text-4xl font-bold mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ShuffleText text="About Me" />{" "}
        <span className="text-sm text-zinc-500">＜（＾－＾）＞</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <motion.div
          className="max-w-md w-full mt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-[350px] md:h-[400px]">
            {/* Background Image */}
            <img
              src={myImage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover max-w-full"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 to-gray-900/30"></div>

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
              <div
                style={{ fontFamily: "Space Mono, monospace" }}
                className="min-h-[120px]"
              >
                {text.split("\n").map((line, i) => (
                  <div key={i} className="text-3xl font-bold leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mt-4">
                I believe in lifelong learning and constantly challenge myself
                to expand my knowledge in both frontend and backend
                technologies.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 mt-5 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I am a Fullstack Developer and student with a passion for building
            and breaking things. Motivated by challenging projects, I thrive on
            self-guided research and dynamic problem-solving. Always eager to
            learn and grow, I continually seek new opportunities to expand my
            skills and knowledge. I enjoy watching cartoons and Cricket, finding
            them to be a great escape from my daily routine. 😃
          </motion.h2>

          <motion.h1
            className="mt-10 text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ShuffleText text="Education" />
          </motion.h1>

          {/* First Education */}
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-baseline md:items-center">
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={collegeLogo}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl">
                  VPM'S B.N. Bandodkar College of Science, Thane
                </h1>
                <p className="text-sm text-zinc-500">
                  <ShuffleText text="Bachelor of Science in Computer Science" />
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">
                  <ShuffleText text="2022-2025" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second Education */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col md:flex-row gap-6 justify-start md:items-center">
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://mahahsscboard.in/govermentofmaha1.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl">
                  Arya Gurukul International Jr. College Of Science
                </h1>
                <p className="text-sm text-zinc-500">
                  <ShuffleText text="Higher Secondary School " />
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">
                  <ShuffleText text="2021" />
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        className="mt-20 px-6 md:px-12 lg:px-46 pb-36"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ overflowX: "hidden" }}
      >
        <h2 className="text-4xl font-bold mb-8 text-white">
          <ShuffleText text="Get in Touch" />
        </h2>

        <motion.div
          className="flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Email Card */}
          <a
            href="mailto:patilnandan859@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group relative bg-zinc-800 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col h-full">
              <IoMailOutline className="w-8 h-8 text-zinc-100 mb-auto" />
              <div className="mt-4">
                <div className="w-full h-px bg-zinc-600 mb-4" />
                <p className="text-zinc-100 text-sm">
                  patilnandan859@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/nandanone/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group relative bg-zinc-800 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col h-full">
              <FaLinkedinIn className="w-8 h-8 text-zinc-100 mb-auto" />
              <div className="mt-4">
                <div className="w-full h-px bg-zinc-500 mb-4" />
                <p className="text-zinc-100 text-sm ">
                  linkedin.com/in/nandan
                </p>
              </div>
            </div>
          </a>

          {/* Twitter Card */}
          <a
            href="https://x.com/Nandan_one30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group relative bg-zinc-800 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col h-full">
              <FaXTwitter className="w-8 h-8 text-zinc-100 mb-auto" />
              <div className="mt-4">
                <div className="w-full h-px bg-zinc-500 mb-4" />
                <p className="text-zinc-100 text-sm">twitter.com/@Nandan</p>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
