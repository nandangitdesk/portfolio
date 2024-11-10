import React, { useEffect, useState } from 'react'

const ShuffleText = ({text}) => {
    const [shuffledText, setShuffledText] = useState(text)
    const [isHovering, setIsHovering] = useState(false)
    const characters = '1234567890!@#$%&*()_+-=[]{}|<>/?'

    useEffect(() => {
        if (!isHovering) {
          setShuffledText(text)
          return
        }
    
        let iteration = 0
        const interval = setInterval(() => {
          setShuffledText((prev) =>
            prev
              .split('')
              .map((char, idx) => {
                if (idx < iteration) return text[idx]
                return characters[Math.floor(Math.random() * characters.length)]
              })
              .join('')
          )
          iteration += 1 / 1
          if (iteration >= text.length) {
            clearInterval(interval)
          }
        },120)
    
        return () => clearInterval(interval)
      }, [isHovering, text])
    
  return (
    <span
    className="inline-block  duration-500 cursor-pointer"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
  >
    {shuffledText}
  </span>
  )
}

export default ShuffleText