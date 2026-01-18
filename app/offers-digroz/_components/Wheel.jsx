"use client";

export default function Wheel({ rotation, isSpinning, options }) {
  return (
    <div className="relative">
      {/* Outer ring */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main Wheel */}
      <div className="relative w-72 h-72">
        <div
          className={`w-full h-full rounded-full border-8 border-gray-800 transition-all duration-[3s] ease-out relative overflow-hidden ${isSpinning ? 'animate-pulse' : ''}`}
          style={{
            transform: `rotate(${rotation}deg)`,
            background: `conic-gradient(
              ${options[0].color.replace('from-', '').replace('to-', '')} 0deg 180deg,
              ${options[1].color.replace('from-', '').replace('to-', '')} 180deg 360deg
            )`
          }}
        >
          {/* Option 1 - Top Half */}
          <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-8 text-center">
              <div className="text-3xl mb-1">{options[0].emoji}</div>
              <div className="font-bold text-lg">{options[0].label}</div>
              <div className="text-xs mt-1 text-gray-200">₹8000 Value</div>
            </div>
          </div>
          
          {/* Option 2 - Bottom Half */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rotate-180">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-8 text-center">
              <div className="text-3xl mb-1">{options[1].emoji}</div>
              <div className="font-bold text-lg">{options[1].label}</div>
              <div className="text-xs mt-1 text-gray-200">25% - 70% OFF</div>
            </div>
          </div>
          
          {/* Center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gray-900 border-4 border-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold">SPIN</div>
              <div className="text-xs">TO WIN</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pointer */}
      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2">
        <div className="relative">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-transparent border-b-red-600 shadow-lg"></div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}