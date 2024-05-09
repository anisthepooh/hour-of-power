"use client"
import { CircularProgress, Progress } from '@nextui-org/progress';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Counter = ({isRunning, setIsRunning, setRounds, rounds}) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (!isRunning) return

    
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 0) {
            console.log("zero");
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


  return (
    <>
      <CircularProgress
        classNames={{
          svg: "w-48 h-48 drop-shadow-md",
          indicator: "stroke-green-500 ",
          track: "stroke-white/50",
          value: "text-3xl font-semibold text-white",
        }}
        value={(seconds)}
        maxValue={60}
        strokeWidth={4}
        showValueLabel={true}
              formatOptions={{ style: "unit", unit: "second" }}

        
      />    
    </>
  )
}

export default Counter