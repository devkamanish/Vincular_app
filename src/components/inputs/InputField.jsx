"use client";
import { useState } from "react";

export default function InputField({ label, name, type = "text", onChange, value }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };

  return (
    <div className="relative w-full mb-6">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`block w-full px-3 py-2 text-gray-700 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 
        ${isFocused || value ? "pt-6 pb-1" : "pt-3"} transition-all`}
        required
      />
      <label
        className={`absolute left-3 text-sm text-gray-500 pointer-events-none transition-all
        ${isFocused || value ? "-top-3 text-xs px-1 bg-white" : "top-2"} `}
      >
        {label}
      </label>
    </div>
  );
}



