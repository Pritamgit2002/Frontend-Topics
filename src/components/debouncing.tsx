import React, { useEffect, useState } from 'react'

const arr = [
    { id: 0, name: "sports", subName: ["cricket", "football", "chess", "kabaddi"] },
    { id: 1, name: "music", subName: ["rock", "pop", "classical", "jazz"] },
    { id: 2, name: "technology", subName: ["AI", "blockchain", "cybersecurity", "IoT"] },
    { id: 3, name: "movies", subName: ["action", "comedy", "drama", "horror"] },
    { id: 4, name: "science", subName: ["physics", "chemistry", "biology", "astronomy"] },
    { id: 5, name: "education", subName: ["math", "history", "literature", "geography"] },
    { id: 6, name: "health", subName: ["nutrition", "fitness", "mental health", "yoga"] },
    { id: 7, name: "business", subName: ["marketing", "finance", "entrepreneurship", "investment"] },
    { id: 8, name: "travel", subName: ["beaches", "mountains", "cities", "forests"] },
    { id: 9, name: "food", subName: ["Italian", "Chinese", "Mexican", "Indian"] },
    { id: 10, name: "fashion", subName: ["casual", "formal", "streetwear", "vintage"] },
    { id: 11, name: "gaming", subName: ["PC", "console", "mobile", "VR"] },
    { id: 12, name: "art", subName: ["painting", "sculpture", "photography", "digital art"] },
    { id: 13, name: "automobile", subName: ["cars", "bikes", "trucks", "electric vehicles"] },
    { id: 14, name: "books", subName: ["fiction", "non-fiction", "biographies", "self-help"] }
];

type Result = {
    id:number
    name:string
    //subname:string[]
}
const Debouncing = () => {
    const [result, setResult] = useState<Result[]>([]);
    const [input, setInput] = useState("");

    useEffect(() =>{
        
        const timer = setTimeout(() => {
            if(input.trim()){
                    const getFilteredData = arr.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
                    setResult(getFilteredData || []);
                }
                else{
                    setResult([]);
                }
            },300)

        return () => clearTimeout(timer)
    },[input])
    
    
  return (
    <div className='flex items-center justify-center flex-col gap-2'>
        <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className=' w-80 p-2 border-gray-600 border-2 rounded-xl '
        />

        <ul>
            {result.map((item) => (
                <li className=' my-1 cursor-pointer w-80 rounded-xl p-2 bg-slate-500 hover:bg-slate-600 text-gray-50 text-xl'>{item.name.split('').map((item)=>(
                    <span 
                    className={
                        input && input.toLowerCase().includes(item.toLowerCase())
                            ? 'text-yellow-300' 
                            : ''
                    }
                    >
                        {item}
                    </span>
                ))}</li>
            ))}
        </ul>

    </div>
  )
}

export default Debouncing