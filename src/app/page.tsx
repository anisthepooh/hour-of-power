"use client"
import { Button } from "@/components/ui/button";
import Counter from "./components/Counter"
import { useState } from "react";
import Alert from "./components/Alert"
import { CircularProgress } from "@nextui-org/progress";
import { AuroraBackground } from "../components/ui/aurora-background"
import { motion } from "framer-motion";
import preventPinchZoom from "@/lib/preventPinchZoom";
import {CirclePause, CirclePlay} from 'lucide-react'
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import AnimatedCount from "@/components/ui/AnimatedCount"


export default function Home() {
  const [isRunning, setIsRunning] = useState(false)
  const [rounds, setRounds] = useState(0)
  const [totalRounds, setTotalRounds] = useState(5)

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
        <main className="flex flex-col items-center justify-between py-8 h-full">
          <p className="text-white text-2xl font-semibold">{`Runde nummer: ${rounds} ud af ${totalRounds}`}</p>
          
          <Counter isRunning={isRunning} setIsRunning={setIsRunning} setRounds={setRounds} rounds={rounds} />
          <Button className="w-64 hover:after:scale-150" onClick={() => setIsRunning(!isRunning)}> {renderButtonText()} </Button>
          <Alert rounds={rounds} isRunning={isRunning} setIsRunning={setIsRunning} />
        </main>
        </motion.div>
      </BackgroundGradientAnimation>

    

  );
}
