"use client"

import { motion } from "motion/react"
import { useEffect, useId, useRef, useState } from "react"

import { cn } from "../../lib/utils"

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  duration = 4,
  ...props
}) {
  const id = useId()
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [squares, setSquares] = useState(() => generateSquares(numSquares))
  const [isMobile, setIsMobile] = useState(false)

  function getPos() {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ]
  }

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      const isMobileDevice = width <= 768
      setIsMobile(isMobileDevice)
      console.log('Mobile detected:', isMobileDevice, 'Width:', width, 'Opacity will be:', isMobileDevice ? 0.8 : 0.7)
    }
    
    // Check immediately
    checkMobile()
    
    // Add event listeners
    window.addEventListener('resize', checkMobile)
    window.addEventListener('orientationchange', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkMobile)
    }
  }, [])

  // Adjust the generateSquares function to return objects with an id, x, and y
  function generateSquares(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }))
  }

  // Function to update a single square's position
  const updateSquarePosition = (id) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq,
      ),
    )
  }

  // Update squares to animate in
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares))
    }
  }, [dimensions, numSquares])

  // Resize observer to update container dimensions
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current)
      }
    }
  }, [containerRef])

  // Mobile-friendly colors and opacity - force higher values for mobile
  const gridStrokeColor = isMobile ? "rgba(147, 197, 253, 0.8)" : "rgba(147, 197, 253, 0.6)"
  const squareFillColor = isMobile ? "rgba(139, 92, 246, 0.7)" : "rgba(139, 92, 246, 0.5)"
  const squareStrokeColor = isMobile ? "rgba(34, 211, 238, 0.8)" : "rgba(34, 211, 238, 0.6)"
  const mobileOpacity = isMobile ? 0.9 : 0.7

  // Debug log for opacity values
  console.log('Mobile state:', isMobile, 'Opacity:', mobileOpacity, 'Colors:', { gridStrokeColor, squareFillColor, squareStrokeColor })

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path 
            d={`M.5 ${height}V.5H${width}`} 
            fill="none" 
            strokeDasharray={strokeDasharray}
            stroke={gridStrokeColor}
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: mobileOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill={squareFillColor}
            stroke={squareStrokeColor}
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </svg>
  )
}
