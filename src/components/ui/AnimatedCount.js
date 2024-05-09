"use client"
import { animate } from 'framer-motion'
import React, { useLayoutEffect, useRef } from 'react'

const AnimatedCount = ({from, to, animationOptions}) => {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const element = ref.current

    if (!element) return 

    element.textContent = from

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0)
      }
    })

    return () => controls.stop()
  },[ref, from, to])
  return (
    <span className='text-white text-4xl font-semibold'  ref={ref}/>
  )
}

export default AnimatedCount