"use client"
import { Button } from "@/components/ui/button";
import Counter from "./components/Counter"
import { useState } from "react";
import Alert from "./components/Alert"

export default function Home() {
  const [isRunning, setIsRunning] = useState(false)
  const [rounds, setRounds] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow-200">
      <p>Roundes: {rounds}</p>
      <Counter isRunning={isRunning} setIsRunning={setIsRunning} setRounds={setRounds} rounds={rounds} />
      <Button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</Button>
      <Alert rounds={rounds} isRunning={isRunning} setIsRunning={setIsRunning} />
    </main>
  );
}
