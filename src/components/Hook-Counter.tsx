import { useCounter } from '@/hooks/useCounter';
import React from 'react'
import { Button } from './ui/button';

export const HookCounter = () => {
    const [count, setCount] = useCounter(0);
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        <h1>Hook Counter</h1>
        <p>This is a simple counter component that uses a custom hook to manage its state.</p>
        <p>The count is {count}</p>
            <Button onClick={() => setCount(count + 1)}>Increment By One</Button>
            <Button onClick={()=>setCount(count + 10)}>Decrement By One</Button>
    </div>
  )
}