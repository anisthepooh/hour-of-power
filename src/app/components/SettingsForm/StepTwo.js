import React from 'react'
import SettingsForm from './SettingsForm'

const StepTwo = ({
  setTotalRounds,
  setOpenSettingsDialog,
  timer,
  setTimer,
}) => {
  return (
    <SettingsForm 
      setTotalRounds={setTotalRounds} 
      setOpenSettingsDialog={setOpenSettingsDialog} 
      timer={timer}
      setTimer={setTimer}
    />
  )
}

export default StepTwo