"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
export const Stopwatch = () =>{
    const [ timeInMicroSec, setTimeInMicroSec ] = useState(0)
    const [ timeInSec, setTimeInSec ] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() =>{
        let microSecTimer:any;
        let secTimer:any;

        if(running){
            
            microSecTimer = setInterval(() =>{
                setTimeInMicroSec((prev) => prev+1)   
            },100)
            
            secTimer = setInterval(() =>{
                setTimeInSec((prev) => prev+1)   
            },1000)
        }

        if(!running){
            setTimeInSec(timeInSec)
            setTimeInMicroSec(timeInMicroSec)
        }

        return () => {
            clearInterval(secTimer);
            clearInterval(microSecTimer);
        };

    },[timeInSec, running])

    const handleStart = () =>{
        setRunning(true)
    }

    const handlePause = () =>{
        setRunning(false)
    }

    const handleReset = () =>{
        setRunning(false)
        setTimeInMicroSec(0);
        setTimeInSec(0);
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4 p-20 bg-lime-200/60 text-3xl font-medium tracking-tight'>
            <span>Stopwatch : </span>
            <span>{timeInSec} : {timeInMicroSec}</span>
            <div className=' w-max flex items-center justify-center gap-x-3'>
                <Button onClick={handleStart} disabled={running}>Start</Button>
                <Button onClick={handlePause} disabled={!running}>Pause</Button>
                <Button 
                    onClick={handleReset} 
                    disabled={timeInMicroSec === 0 && timeInSec === 0}>
                        Reset
                </Button>
            </div>

        </div>
    )
}