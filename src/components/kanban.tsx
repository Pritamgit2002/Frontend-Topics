"use client";

import { useState } from "react";
import Draggable from "react-draggable";

type Card = {
  id: string;
  text: string;
};

type Column = {
  id: string;
  title: string;
  cards: Card[];
};

const initialData: Column[] = [
  {
    id: "todo",
    title: "To-Do",
    cards: [
      { id: "1", text: "Task A" },
      { id: "2", text: "Task B" },
    ],
  },
  {
    id: "review",
    title: "Review",
    cards: [
      { id: "3", text: "Task C" },
      { id: "4", text: "Task D" },
    ],
  },
];

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(initialData);

  const onDrop = (cardId: string, toColumnId: string) => {
    const fromColumn = columns.find((col) =>
      col.cards.some((card) => card.id === cardId)
    );
    const toColumn = columns.find((col) => col.id === toColumnId);

    if (!fromColumn || !toColumn) return;

    const cardToMove = fromColumn.cards.find((c) => c.id === cardId)!;
    const newFromCards = fromColumn.cards.filter((c) => c.id !== cardId);
    const newToCards = [...toColumn.cards, cardToMove];

    setColumns((prev) =>
      prev.map((col) => {
        if (col.id === fromColumn.id) return { ...col, cards: newFromCards };
        if (col.id === toColumn.id) return { ...col, cards: newToCards };
        return col;
      })
    );
  };

  return (
    <div className="flex gap-6 items-start justify-start p-4">
      <div className=" flex items-center justify-center gap-4 p-4">
        {columns.map((column) => (
          <div
            key={column.id}
            className="w-80 p-4 bg-gray-100 rounded shadow"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const cardId = e.dataTransfer.getData("text/plain");
              onDrop(cardId, column.id);
            }}
          >
            <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
            <div className="space-y-4 min-h-[100px]">
              {column.cards.map((card) => (
                <Draggable key={card.id}>
                  <div
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData("text/plain", card.id)
                    }
                    className="p-3 bg-white rounded shadow cursor-move"
                  >
                    {card.text}
                  </div>
                </Draggable>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 p-4 overflow-x-auto bg-gray-200 rounded-lg">
        <span className=" text-2xl font-semibold underline">View Only</span>
        <div className=" w-max flex items-center justify-center gap-4">
          {columns.map((column, colIdx) => (
            <div
              key={colIdx}
              className="bg-white shadow-lg rounded-2xl p-4 w-40 min-w-max border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {column.title}
              </h2>
              <div className="space-y-2">
                {column.cards.map((card, cardIdx) => (
                  <div
                    key={cardIdx}
                    className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 shadow-sm hover:bg-gray-200 transition"
                  >
                    {card.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
