"use client"; // at the top of ServicesMain.jsx

import ServicesMain from "./_components/services/ServicesMain";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white  min-h-[70vh] sm:min-h-[80vh] max-sm:py-20 sm:pt-20 flex items-center">
      <ServicesMain />
    </div>
  );
}
