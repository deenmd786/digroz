"use client";

export default function SurpriseBox({ surpriseBoxContents, selectedBox, openBox }) {
  return (
    <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-purple-500/30 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-300">🎁 Choose a Surprise Box!</h2>
      <p className="text-center text-gray-300 mb-6">Each box contains a different discount percentage</p>
      
      <div className="grid grid-cols-3 gap-4">
        {surpriseBoxContents.map((box, index) => (
          <button
            key={index}
            onClick={() => openBox(index)}
            disabled={selectedBox !== null}
            className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all transform hover:scale-105 ${
              selectedBox === index 
                ? 'animate-bounce ring-4 ring-white' 
                : 'bg-gradient-to-br from-gray-800 to-gray-900'
            }`}
          >
            <div className="text-4xl mb-2">🎁</div>
            <div className="text-sm font-semibold">Box {index + 1}</div>
            <div className="text-xs text-gray-400 mt-1">Click to open</div>
          </button>
        ))}
      </div>
    </div>
  );
}