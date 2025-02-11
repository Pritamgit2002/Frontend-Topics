import { useEffect, useRef, useState } from "react";

export const useCounter = (initialState:number) => {
    const[count, setCount] = useState(0);
    const previousState = useRef(count);

    useEffect(() => {
        console.log(`State changed from ${previousState.current} to ${count}`)

        previousState.current = count;

    }, [count]);

    return [count, setCount] as const;
}