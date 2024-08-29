import { ChevronDown, ChevronUp, FileIcon, FolderIcon } from "lucide-react";
import React, { useState } from "react";

interface FileObject {
  id: number;
  name: string;
  children?: FileObject[];
}

const fileData: FileObject[] = [
  {
    id: 1,
    name: "README",
    children: [],
  },
  {
    id: 2,
    name: "Documents",
    children: [
      {
        id: 3,
        name: "Word.doc",
      },
      {
        id: 4,
        name: "Powerpoint.ppt",
      },
    ],
  },
  {
    id: 2,
    name: "Contracts",
    children: [
      {
        id: 3,
        name: "Word.doc",
      },
      {
        id: 4,
        name: "Powerpoint.ppt",
      },
    ],
  },
];

const File = () => {
  return (
    <div className=" p-8 max-w-sm mx-0 h-96 ">
      <ul className=" flex flex-col gap-2 ">
        {fileData.map((file, index) => {
          return <Explorer file={file} key={index} />;
        })}
      </ul>
    </div>
  );
};

function Explorer({ file }: { file: FileObject }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <li>
      <div className={` flex items-center justify-start gap-1  `}>
        {file.children ? (
          // folder
          <div
            className=" bg-gray-300 flex items-center justify-between gap-1 w-full p-1 rounded-lg cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className=" flex items-center justify-between gap-x-1 ">
              <FolderIcon className=" text-sky-500 " />
              <span className=" text-black font-semibold ">{file.name}</span>
            </div>
            <div>
              {isOpen ? (
                <ChevronDown className=" text-sky-500 " />
              ) : (
                <ChevronUp className=" text-sky-500 " />
              )}
            </div>
          </div>
        ) : (
          // File
          <div className=" flex  items-center justify-start gap-1 w-full p-1 rounded-lg ">
            <FileIcon className=" text-sky-500 " />
            <span className=" text-black ">{file.name}</span>
          </div>
        )}
      </div>
      <ul
        className={`pl-10 transform transition-transform ease-in-out duration-500 ${
          isOpen
            ? "max-h-max translate-y-0 opacity-100"
            : "max-h-0 -translate-y-4 opacity-0"
        } overflow-hidden`}
      >
        {file.children &&
          file.children.map((item, index) => (
            <Explorer file={item} key={index} />
          ))}
      </ul>
    </li>
  );
}
export default File;
