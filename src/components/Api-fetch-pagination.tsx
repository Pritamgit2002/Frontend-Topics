import React, { useEffect, useState } from "react";

interface Item {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

const Datafetching = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobIds, setJobIds] = useState<number[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchJobIds = async () => {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      const jobIds: number[] = await response.json();
      setJobIds(jobIds);
      setLoading(true);
    };
    fetchJobIds();
  }, []);

  useEffect(() => {
    const fetchJobStories = async () => {
      try {
        // const response = await fetch(
        //   "https://hacker-news.firebaseio.com/v0/jobstories.json"
        // );
        // const jobIds: number[] = await response.json();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedJobIds = jobIds.slice(startIndex, endIndex);
        setLastPage(Math.ceil(jobIds.length / itemsPerPage));

        const fetchJobStories = slicedJobIds.map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            (response) => response.json()
          )
        );

        const results = await Promise.all(fetchJobStories);
        setItems(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobStories();
  }, [currentPage, jobIds]);

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto p-4 h ">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 break-words "
          >
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.url}
              </a>
            </p>
            <p className="text-sm text-gray-500">Score: {item.score}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          className={`${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          } px-4 py-2 rounded-md`}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>{currentPage}</span>

        <button
          onClick={handleNextPage}
          className={` px-4 py-2 rounded-md  ${
            currentPage === lastPage
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          } `}
          disabled={currentPage === lastPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Datafetching;
