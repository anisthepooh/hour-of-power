"use client"
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Counter = ({isRunning, setIsRunning, setRounds, rounds}) => {
  const [seconds, setSeconds] = useState(5);

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
    <p className='!text-4xl text-green-500 font-semibold'>{seconds}</p>
  )
}

export default Counter