import React from "react";
import Image from "next/image";

const Logo = () => (
  <div className="flex items-center space-x-2">
    {/* Full logo on screens md and above (larger than sm) */}
    <Image 
      src="/logo.png" 
      width={140} 
      height={50} 
      alt="Digital Ascent Logo" 
      className="hidden md:block" 
    />
    {/* Logo icon on screens sm and below */}
    <Image 
      src="/logo-icon.png" 
      width={50} 
      height={50} 
      alt="Digital Ascent Logo" 
      className="block md:hidden" 
    />
  </div>
);

export default Logo;
