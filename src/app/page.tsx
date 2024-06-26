"use client"
import { Button } from "@/components/ui/button";
import Counter from "./components/Counter"
import { useEffect, useState } from "react";
import Alert from "./components/Alert"
import { motion } from "framer-motion";
import {CirclePause, CirclePlay} from 'lucide-react'
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import JSConfetti from 'js-confetti'
import PreGameSettingsDialog from './components/SettingsForm/PreGameSettingsDialog'


export default function Home() {
  const [isRunning, setIsRunning] = useState(false)
  const [rounds, setRounds] = useState(0)
  const [totalRounds, setTotalRounds] = useState<number>(0)
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false)
  const [timer, setTimer] = useState(30)
  const [state, setState] = useState({showInstallMessage: false})


  
  useEffect(() => {
    setOpenSettingsDialog(true)
    
    return () => setOpenSettingsDialog(false)
    
  },[])
  
  const renderButtonText = () => {
    if (isRunning) {
      return <>
      <CirclePause className="pr-2" />
      Pause
      </>
    } else {
      return <>
      <CirclePlay className="pr-2" />
      Start
      </>
    }
  }

  

const handleClick = () => {
  if (!isRunning && typeof window != 'undefined') {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojis: ['🍺', '🍻',],
    })
  }
  setIsRunning(!isRunning)
}


  
  //preventPinchZoom()
  return (
    <BackgroundGradientAnimation>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative px-4 z-10 h-dvh"
      >
        <main className="flex flex-col items-center justify-center gap-10 py-8 h-full" vaul-drawer-wrapper="">
          <p className="text-white text-2xl font-semibold">{`Runde nummer: ${rounds} ud af ${totalRounds}`}</p>
          
          <Counter 
            isRunning={isRunning} 
            setIsRunning={setIsRunning} 
            setRounds={setRounds} 
            rounds={rounds} 
            timer={timer}
          />
          <Button className="w-64 hover:after:scale-150" onClick={() => handleClick() }> {renderButtonText()} </Button>
          <Alert rounds={rounds} isRunning={isRunning} setIsRunning={setIsRunning} />
          <PreGameSettingsDialog
            openSettingsDialog={openSettingsDialog} 
            setOpenSettingsDialog={setOpenSettingsDialog}
            setTotalRounds={setTotalRounds}
            timer={timer}
            setTimer={setTimer}
          />
        </main>
        </motion.div>
      </BackgroundGradientAnimation>

    

  );
}
