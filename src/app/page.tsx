"use client"
import { Button } from "@/components/ui/button";
import Counter from "./components/Counter"
import { useState } from "react";
import Alert from "./components/Alert"
import { CircularProgress } from "@nextui-org/progress";
import { AuroraBackground } from "../components/ui/aurora-background"
import { motion } from "framer-motion";
import preventPinchZoom from "@/lib/preventPinchZoom";

export default function Home() {
  const [isRunning, setIsRunning] = useState(false)
  const [rounds, setRounds] = useState(0)
  
  preventPinchZoom()
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="h-full relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <main className="flex flex-col items-center justify-between">
          <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/50",
                value: "text-3xl font-semibold text-white",
              }}
              value={(rounds)}
              maxValue={60}
              strokeWidth={4}
              showValueLabel={true}
            />    
          <p>Roundes: {rounds}</p>
          <Counter isRunning={isRunning} setIsRunning={setIsRunning} setRounds={setRounds} rounds={rounds} />
          <Button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</Button>
          <Alert rounds={rounds} isRunning={isRunning} setIsRunning={setIsRunning} />
        </main>
      </motion.div>
    </AuroraBackground>

  );
}
