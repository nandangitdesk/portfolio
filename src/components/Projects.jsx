import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import projectimg2 from '../assets/project2.png';
import projectimg1 from '../assets/project1.png';
import { BsArrowRight } from 'react-icons/bs';
import ShuffleText from './ShuffleText';

export default function Component() {
  const projects = [
    {
      title: "Kolhapuri Kitchen Ecommerce Platform",
      Role: "Full Stack Developer",
      description:
        "Kolhapuri Kitchen Masale is an e-commerce platform offering authentic homemade Kolhapuri spices and flours. It features user authentication, product search, filtering, secure payments, product reviews, and fast checkout for a seamless shopping experience.",
      tech: [
        "React.js",
        "JWT",
        "Figma",
        "MongoDB",
        "Nodejs",
        "TailwindCSS",
        "PayU",
        "Redux",
        "Material UI",
        "Render",
      ],
      image: projectimg1,
      links: {
        website: "https://kolhapurikitchen.onrender.com/",
        source: "https://github.com/nandangitdesk/KolhapuriKitchenEcommerce",
      },
    },
    {
      title: "Crypto Rail",
      Role: "Frontend Developer",
      description:
        "Crypto Rail is a cryptocurrency tracker that offers real-time market data and portfolio management. It integrates CoinGecko API for up-to-date prices and trends. Built with React.js and TailwindCSS, it provides a seamless user experience.",
      tech: [
        "React.js",
        "TailwindCSS",
        "CoinGecko API",
        "Framer Motion",
        "Figma",
        "Axios",
        "Firebase",
      ],
      image: projectimg2,
      links: {
        website: "https://cryptorail.netlify.app/",
        source: "https://github.com/nandangitdesk/Crypto-Rail",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white pb-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="bg-zinc-900/50 rounded-xl overflow-hidden backdrop-blur-sm border-2 border-zinc-800/50"
          >
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-[22rem] object-cover"
              />
            </motion.div>

            <div className="p-6 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-1"><ShuffleText text={project.title} /></h2>
                <p className="text-zinc-400 text-sm">Role: {project.Role}</p>
              </motion.div>

              <motion.p
                className="text-zinc-300 text-sm md:text-base leading-5 md:leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="flex gap-3 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href={project.links.website}
                  className="inline-flex items-center justify-center rounded-full px-4 py-1.5 bg-zinc-800 text-sm font-medium hover:bg-zinc-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  Website
                </motion.a>
                {project.links.source && (
                  <motion.a
                    href={project.links.source}
                    className="inline-flex items-center justify-center rounded-full px-4 py-1.5 bg-zinc-800 text-sm font-medium hover:bg-zinc-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <AiFillGithub className="w-4 h-4 mr-2" />
                    Source
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
        
        {/* All View Projects button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/nandangitdesk"
            className="inline-flex items-center justify-center rounded-full px-6 py-2 mt-10 bg-zinc-950 border-[1px] border-zinc-700 text-lg font-medium hover:from-zinc-600 hover:to-zinc-800 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2"><ShuffleText text="View All Projects" /></span>
            <BsArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
    </div>
  );
}
