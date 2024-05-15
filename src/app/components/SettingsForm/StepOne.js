import React from 'react'
import Rules from '../Rules'
import { motion } from "framer-motion";


const StepOne = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <Rules />
    </motion.div>
  )
}

export default StepOne