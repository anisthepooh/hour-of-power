import React from 'react'
import SettingsForm from './SettingsForm'
import { motion } from "framer-motion";

const StepTwo = ({
  setTotalRounds,
  setOpenSettingsDialog,
  timer,
  setTimer,
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <SettingsForm 
        setTotalRounds={setTotalRounds} 
        setOpenSettingsDialog={setOpenSettingsDialog} 
        timer={timer}
        setTimer={setTimer}
      />
    </motion.div>
  )
}

export default StepTwo