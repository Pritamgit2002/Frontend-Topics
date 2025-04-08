import React, { useState, CSSProperties } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "./ui/input";

export const Password = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsShowing((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-sm font-medium text-gray-700">Password</span>
      <div className="relative w-80">
        <Input
          type={isShowing ? "text" : "password"}
          placeholder="Enter password"
          style={{
            ...(isShowing
              ? { ["WebkitTextSecurity" as keyof CSSProperties]: "none" }
              : {}),
          }}
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          type="button"
          onClick={toggleVisibility}
          aria-label="Toggle password visibility"
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition"
        >
          {isShowing ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};
