import { useEffect, useState } from "react";

export function useToggleMode<T>(key:string, initialValue:T){
    const [value, setValue] = useState<T>(()=>{
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) :initialValue;
        } catch (error) {
            console.error("Something went wrong",error);
            return initialValue;
        }
    })

    useEffect(()=>{
        try {
            localStorage.getItem(JSON.stringify(initialValue))
        } catch (error) {
            console.error("Something went wrong",error);
        }
    },[key, value])

    return [value, setValue] as const;
    
}