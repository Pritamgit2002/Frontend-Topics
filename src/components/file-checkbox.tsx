"use client";
import React, { useState } from "react";

type FileType = {
  id: number;
  name: string;
  children?: FileType[];
};

const fileData: FileType[] = [
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
    id: 5,
    name: "Contracts",
    children: [
      {
        id: 6,
        name: "Word.doc",
      },
      {
        id: 7,
        name: "Powerpoint.ppt",
      },
    ],
  },
];

export const FileCheckBox = () => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <div className="w-max h-max p-6 rounded bg-gray-800 flex items-center justify-center">
      <div className="text-black flex flex-col items-center justify-center gap-3">
        <Explorer
          fileData={fileData}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
    </div>
  );
};

function Explorer({
  fileData,
  checked,
  setChecked,
}: {
  fileData: FileType[];
  checked: Record<number, boolean>;
  setChecked: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}) {
  const handleChange = (checked: boolean, child: FileType) => {
    setChecked((prev: Record<number, boolean>) => {
      const newState = {
        ...prev,
        [child.id]: checked,
      };

      const updateChildren = (parentNode: FileType) => {
        parentNode.children?.forEach((childNode) => {
          newState[childNode.id] = checked;
          if (childNode.children) {
            updateChildren(childNode);
          }
        });
      };

      updateChildren(child);

      const verifyChecked = (node: FileType): boolean => {
        if (!node.children || node.children.length === 0) {
          return newState[node.id] || false;
        }

        const allChildrenChecked = node.children.every((childNode) =>
          verifyChecked(childNode)
        );

        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      fileData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  return (
    <div className="text-white">
      {fileData.map((child) => (
        <div key={child.id}>
          <div className="space-x-1">
            <input
              type="checkbox"
              checked={checked[child.id] || false}
              onChange={(e) => handleChange(e.target.checked, child)}
            />
            <span>{child.name}</span>
          </div>
          <div className="ml-4">
            {child.children && child.children.length > 0 && (
              <Explorer
                fileData={child.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
