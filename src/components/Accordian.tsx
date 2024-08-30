import React, { useState } from "react";

type DefaultOpenIndex = {
  defaultOpenIndex?: number;
};

type AccordianTypes = {
  id: number;
  question: string;
  answer: string;
};

const data: AccordianTypes[] = [
  {
    id: 1,
    question: "What is an accordion component?",
    answer:
      "An accordion is a UI component that allows users to toggle between hiding and showing sections of related content.",
  },
  {
    id: 2,
    question: "How does the accordion component improve user experience?",
    answer:
      "Accordions help organize content in a compact manner, reducing clutter and allowing users to focus on one section at a time.",
  },
  {
    id: 3,
    question: "What are some common use cases for accordions?",
    answer:
      "Accordions are often used in FAQs, menus, and settings panels where content is grouped into expandable and collapsible sections.",
  },
  {
    id: 4,
    question: "How can I customize the appearance of an accordion?",
    answer:
      "You can customize an accordion's appearance using CSS, adding styles to the headers, content panels, and animation effects.",
  },
  {
    id: 5,
    question:
      "What is the difference between an accordion and a tab component?",
    answer:
      "An accordion allows multiple sections to be expanded or collapsed independently, while a tab component switches between different content views without overlapping.",
  },
  {
    id: 6,
    question: "How do I implement an accordion in React?",
    answer:
      "In React, you can implement an accordion using state to track which sections are open and conditionally rendering the content based on that state.",
  },
  {
    id: 7,
    question:
      "What are the benefits of using an accordion over a long list of content?",
    answer:
      "Accordions make it easier to navigate large amounts of content by breaking it into manageable sections, improving readability and reducing scrolling.",
  },
  {
    id: 8,
    question: "Can an accordion have multiple sections open at once?",
    answer:
      "Yes, accordions can be configured to allow multiple sections to be open at the same time, depending on the implementation.",
  },
  {
    id: 9,
    question:
      "Is it possible to animate the opening and closing of accordion sections?",
    answer:
      "Yes, you can add animations using CSS transitions or libraries like Framer Motion to animate the height change when sections open and close.",
  },
  {
    id: 10,
    question: "How can I make my accordion component accessible?",
    answer:
      "To make an accordion accessible, ensure that each section has proper ARIA attributes like `aria-expanded`, `aria-controls`, and that the headers are focusable.",
  },
];

const Accordian = (props: DefaultOpenIndex) => {
  const [expandedId, setExpandedId] = useState<number>(
    props.defaultOpenIndex || 0
  );

  const handleExpanded = (id: number) => () => {
    setExpandedId((prevId) => (prevId === id ? 0 : id));
  };

  return (
    <div className="w-full max-w-lg mx-0 my-6 p-4 bg-white shadow-lg rounded-lg border border-gray-200 h-[550px] overflow-y-auto ">
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="border-b border-gray-200">
            <div
              onClick={handleExpanded(item.id)}
              className={`cursor-pointer p-3 rounded-t-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300 ease-in-out ${
                expandedId === item.id ? "bg-gray-300" : ""
              }`}
            >
              <div className="font-semibold text-lg">{item.question}</div>
            </div>
            {expandedId === item.id && (
              <div className="p-3 bg-gray-50 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
