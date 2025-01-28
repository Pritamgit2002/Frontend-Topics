"use client"
import React, { useEffect, useState } from 'react'

export const Fetchme = () => {
    const [ids, setIds] = useState("")
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            const res = await response.json()
            setIds(res)  // Correctly setting data to res.hits
        }
        fetchData();
    }, [])

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = Number(ids.slice(startIndex, endIndex));

    const totalPages = Math.ceil(ids.length / itemsPerPage);

  
    console.log("data", ids)

    return (
        <div>
            <span>Hello</span>
            <br />
            {/* { currentItems.map((item) => (
                <div>
                    <span>{item.id}</span>
                </div>
            ))} */}
            <br />
            <span>Total Pages</span>
            <span>{ids}</span>
        </div>
    )
}
