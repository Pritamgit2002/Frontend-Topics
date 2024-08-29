import React, { useState } from "react";

type TabsProps = {
  id: number;
  name: string;
  content: string;
};

const tabs: TabsProps[] = [
  {
    id: 1,
    name: "Basic",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: 2,
    name: "Intermediate",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    id: 3,
    name: "Advanced",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1); // Start with the first tab as active

  return (
    <div className="max-w-md mx-0 bg-white p-4 rounded-lg shadow-md">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 flex-1 text-center font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "border-b-2 border-transparent text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="text-gray-700">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tab;
