"use client";

import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-cyan-400 font-medium mb-8 px-4 py-2 
                 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 
                 hover:text-white transition-all duration-300 hover:shadow-cyan-400/20 hover:shadow-md"
    >
      <FaArrowLeft className="h-4 w-4" />
      <span>Back to Services</span>
    </button>
  );
}
