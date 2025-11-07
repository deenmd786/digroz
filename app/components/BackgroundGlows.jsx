import React from "react";

const BackgroundGlows = () => {
  return (
<div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Image with responsive side margins */}
      

      {/* Responsive Glow Overlays (soft lighting effect) */}
      <div className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] sm:w-1/2 sm:h-1/2 bg-cyan-600/20 rounded-full blur-3xl opacity-50"></div>

      <div className="absolute -bottom-1/3 -right-1/4 w-[80vw] h-[80vw] sm:w-2/3 sm:h-2/3 bg-blue-700/20 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute top-1/3 right-0 w-[50vw] h-[50vw] sm:w-1/2 sm:h-1/2 bg-cyan-600/10 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
};

export default BackgroundGlows;
