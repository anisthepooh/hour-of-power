"use client"
import { CircularProgress, Progress } from '@nextui-org/progress';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Counter = ({isRunning, setIsRunning, setRounds, rounds, }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (!isRunning) return

    
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 0) {

            clearInterval(intervalId); 
            setRounds( rounds+1);
            setSeconds(5)
            setIsRunning(false) 
            return 0;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const yellow = "stroke-yellow-500"
  const red = "stroke-red-500"
  red 
  yellow 
  return (
    <>
      <CircularProgress
        classNames={{
          svg: "w-48 h-48 drop-shadow-md",
          indicator: `stroke-${seconds > 5*0.6 ? "green" : seconds > 5*0.3 ? "yellow" : "red"}-500 `,
          track: "stroke-white/50",
          value: "text-3xl font-semibold text-white",
        }}
        value={(seconds)}
        maxValue={5}
        strokeWidth={4}
        showValueLabel={true}
        formatOptions={{ style: "unit", unit: "second" }}

        
      />    
    </>
  )
}

export default Counter