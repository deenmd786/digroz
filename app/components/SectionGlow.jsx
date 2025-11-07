"use client";
import React from "react";

const SectionGlow = () => {
  return (
    <div className="relative w-full flex justify-center items-center mt-16 mb-6">
      <div className="h-px w-full bg-transparent" />

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-[90%] h-[7px] bg-[linear-gradient(to_right,transparent_0%,#22d3ee_50%,transparent_100%)] mask-[radial-gradient(closest-side,black,transparent)]"
      />
    </div>
  );
};

export default SectionGlow;
