import React from "react";

const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-cyan-400"
    >
      <path
        d="M4 15L12 7L20 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 10L12 2L20 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="font-bold text-2xl text-white">Digital Ascent</span>
  </div>
);

export default Logo;
