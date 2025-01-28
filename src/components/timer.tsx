"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';


const Timer = () => {
    const [time, setTime] = useState(5);
    const [running, setRunning] = useState(false);

    useEffect(()=>{
        let timer: NodeJS.Timeout;

        if(running && time > 0){
            timer = setInterval(() =>{
                setTime((prevTime)=> prevTime - 1)
            },1000)
        }

        if( time === 0 ){
            setRunning(false);
        }

        return () => clearInterval(timer)

    },[running, time])

    const handleStart = () => {
        setRunning(true)
    }

    const handleStop = () =>{
        setRunning(false)
    }

    const handleReset = () =>{
        setRunning(false);
        setTime(0);
    }

  return (
    <div className='flex flex-col items-center justify-center gap-4 p-20 bg-lime-200/60 text-3xl font-medium tracking-tight'>
        <span>Timer</span>
        <span className=' text-3xl font-semibold'>{time}</span>
        <div className=' w-max flex items-center justify-center gap-4'>
            <Button variant={"default"} disabled={running} onClick={handleStart}>Start</Button>
            <Button variant={"destructive"} disabled={!running} onClick={handleStop}>Stop</Button>
            <Button variant={"secondary"} disabled={!running} onClick={handleReset}>Reset</Button>     
        </div>
            {
                time === 0 && running &&
                (
                    <span className='text-2xl font-semibold'> Time is over</span>
                )
            } 
    </div>
  )
}

export default Timer