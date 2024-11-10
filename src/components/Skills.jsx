import { useState, useRef, useEffect } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'
import * as Icons from 'react-icons/si'
import { FaJava } from 'react-icons/fa' // Import Java icon
import ShuffleText from './ShuffleText'

const iconsList = [
    { name: 'React', icon: 'SiReact' },
    { name: 'Redux', icon: 'SiRedux' },
    { name: 'Node.js', icon: 'SiNodedotjs' },
    { name: 'Express.js', icon: 'SiExpress' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'HTML5', icon: 'SiHtml5' },
  { name: 'CSS3', icon: 'SiCss3' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'Vite', icon: 'SiVite' },
  { name: 'Git', icon: 'SiGit' },
  { name: 'GitHub', icon: 'SiGithub' },
  { name: 'Java', icon: 'FaJava' }, // Use FaJava for Java
  { name: 'Postman', icon: 'SiPostman' },
  { name: 'Figma', icon: 'SiFigma' },
  { name: 'Bootstrap', icon: 'SiBootstrap' },
  { name: 'TypeScript', icon: 'SiTypescript' },
]

export default function Component() {
  const [duration, setDuration] = useState(25) // Default duration for larger screens
  const containerRef = useRef(null)
  const skillsRef = useRef(null)
  const iconsRef = useRef([])

  useEffect(() => {
    const updateDuration = () => {
      const width = window.innerWidth
      setDuration(width < 768 ? 8 : 25) // Faster speed for small screens
    }

    updateDuration()
    window.addEventListener('resize', updateDuration)
    return () => window.removeEventListener('resize', updateDuration)
  }, [])

  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName] || (iconName === 'FaJava' && FaJava)
    return IconComponent ? <IconComponent className="w-10 h-10 md:w-12 md:h-12" /> : null
  }

  useAnimationFrame(() => {
    if (!containerRef.current || !skillsRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const centerX = containerRect.left + containerRect.width / 2

    iconsRef.current.forEach((icon, index) => {
      if (!icon) return
      const iconRect = icon.getBoundingClientRect()
      const isActive = Math.abs(iconRect.left + iconRect.width / 2 - centerX) < 50

      icon.style.transform = `scale(${isActive ? 1.2 : 1})`
      icon.style.color = isActive ? '#ffffff' : '#6b7280'
    })
  })

  return (
    <div className="w-full flex flex-col justify-center items-center p-4">
      <motion.h1
        ref={skillsRef}
        className="text-4xl md:text-4xl font-bold mb-8 md:mb-16 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ShuffleText text="Skills" />
      </motion.h1>

      <div ref={containerRef} className="w-full marquee-container">
        <motion.div
          initial={{ x: '5%' }}
          animate={{ x: '-100%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration,
              ease: 'easeInOut',
            },
          }}
          className="whitespace-nowrap py-6"
        >
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="inline-flex gap-8 md:gap-16 px-4 md:px-8">
              {iconsList.map(({ name, icon }, index) => (
                <div
                  key={`${arrayIndex}-${index}`}
                  ref={(el) => (iconsRef.current[index + arrayIndex * iconsList.length] = el)}
                  className="inline-flex flex-col items-center justify-center transition-transform"
                >
                  {renderIcon(icon)}
                  <span className="text-xs md:text-sm mt-2 text-white">{name}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
