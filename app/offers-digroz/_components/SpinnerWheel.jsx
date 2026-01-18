"use client";
import { useState, useRef } from "react";
import Wheel from "./Wheel";
import SurpriseBox from "./SurpriseBox";
import ResultCard from "./ResultCard";
import Instructions from "./Instructions";
import SaveResult from "./SaveResult";

export default function SpinnerWheel() {
  const options = [
    { 
      label: "FREE Campaign", 
      emoji: "🎯", 
      color: "from-green-500 to-emerald-600",
      description: "Complete ₹8000 ad campaign FREE!",
      type: "free"
    },
    { 
      label: "Surprise Box", 
      emoji: "🎁", 
      color: "from-purple-500 to-pink-600",
      description: "Open to reveal discount!",
      type: "box"
    }
  ];
  
  const surpriseBoxContents = [
    { discount: "25% OFF", color: "from-yellow-400 to-orange-500", emoji: "🔥", value: 25 },
    { discount: "50% OFF", color: "from-blue-400 to-cyan-500", emoji: "⚡", value: 50 },
    { discount: "70% OFF", color: "from-red-400 to-rose-600", emoji: "🎉", value: 70 }
  ];
  
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showSurpriseBox, setShowSurpriseBox] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxResult, setBoxResult] = useState(null);
  const [screenshotUrl, setScreenshotUrl] = useState(null);
  const [savedResults, setSavedResults] = useState([]);
  
  const resultRef = useRef(null);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setResult(null);
    setShowSurpriseBox(false);
    setSelectedBox(null);
    setBoxResult(null);
    setScreenshotUrl(null);
    
    const randomIndex = Math.floor(Math.random() * options.length);
    const anglePerOption = 360 / options.length;
    const extraRotations = 5;
    const finalRotation = rotation + 360 * extraRotations + randomIndex * anglePerOption + (randomIndex === 0 ? 15 : 195);

    setRotation(finalRotation);
    
    setTimeout(() => {
      const resultData = {
        type: options[randomIndex].type,
        label: options[randomIndex].label,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      setResult(resultData);
      
      if (options[randomIndex].type === "box") {
        setTimeout(() => {
          setShowSurpriseBox(true);
        }, 1000);
      }
      
      setIsSpinning(false);
    }, 3000);
  };

  const openBox = (boxIndex) => {
    setSelectedBox(boxIndex);
    
    setTimeout(() => {
      const boxContent = {
        ...surpriseBoxContents[boxIndex],
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      setBoxResult(boxContent);
    }, 1000);
  };

  const handleScreenshotGenerated = (url) => {
    setScreenshotUrl(url);
  };

  const handleSaveResult = (resultData) => {
    const resultToSave = {
      ...resultData,
      id: Date.now(),
      savedAt: new Date().toISOString(),
      screenshotUrl: screenshotUrl
    };
    
    // Save to localStorage
    const existingResults = JSON.parse(localStorage.getItem('savedSpinnerResults') || '[]');
    const updatedResults = [resultToSave, ...existingResults].slice(0, 10); // Keep last 10 results
    localStorage.setItem('savedSpinnerResults', JSON.stringify(updatedResults));
    setSavedResults(updatedResults);
    
    // Show success message
    alert('Result saved successfully! You can view it in "Saved Results" section.');
  };

  const handleLoadSavedResults = () => {
    const saved = JSON.parse(localStorage.getItem('savedSpinnerResults') || '[]');
    setSavedResults(saved);
  };

  const handleDeleteResult = (id) => {
    const updatedResults = savedResults.filter(result => result.id !== id);
    localStorage.setItem('savedSpinnerResults', JSON.stringify(updatedResults));
    setSavedResults(updatedResults);
  };

  const calculatePrice = (discount) => {
    const originalPrice = 8000;
    const discountedPrice = originalPrice - (originalPrice * discount / 100);
    return {
      original: originalPrice,
      discounted: discountedPrice,
      savings: originalPrice - discountedPrice
    };
  };

  return (
    <div className="flex flex-col items-center gap-8 p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          🎯 Ad Campaign Spin & Win
        </h1>
        <p className="text-gray-300 mt-2">
          Monthly Campaign Price: <span className="line-through text-gray-400">₹8000</span>
        </p>
      </div>

      {/* Wheel Component */}
      <Wheel 
        rotation={rotation}
        isSpinning={isSpinning}
        options={options}
      />

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className={`px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 active:scale-95 ${
          isSpinning 
            ? 'bg-gray-700 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl'
        }`}
      >
        {isSpinning ? (
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Spinning...
          </span>
        ) : (
          '🎯 SPIN FOR DISCOUNT'
        )}
      </button>

      {/* View Saved Results Button */}
      <button
        onClick={handleLoadSavedResults}
        className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
      >
        📋 View Saved Results ({savedResults.length})
      </button>

      {/* Surprise Box Component */}
      {showSurpriseBox && !boxResult && (
        <SurpriseBox 
          surpriseBoxContents={surpriseBoxContents}
          selectedBox={selectedBox}
          openBox={openBox}
        />
      )}

      {/* Result Card Component */}
      {(result?.type === "free" || boxResult) && (
        <>
          <ResultCard 
            ref={resultRef}
            result={result}
            boxResult={boxResult}
            calculatePrice={calculatePrice}
            screenshotUrl={screenshotUrl}
            onScreenshotGenerated={handleScreenshotGenerated}
          />
          
          {/* Save Result Button */}
          <SaveResult 
            result={result}
            boxResult={boxResult}
            screenshotUrl={screenshotUrl}
            onSave={handleSaveResult}
          />
        </>
      )}

      {/* Saved Results Display */}
      {savedResults.length > 0 && (
        <div className="mt-8 w-full max-w-2xl">
          <h3 className="text-2xl font-bold text-center mb-6 text-amber-300">
            📋 Your Saved Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedResults.map((savedResult) => (
              <div key={savedResult.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-amber-500/30">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-lg font-bold">
                      {savedResult.type === "free" ? "🎯 FREE Campaign" : "🎁 Surprise Box"}
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(savedResult.savedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteResult(savedResult.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    🗑️
                  </button>
                </div>
                
                {savedResult.type === "box" && savedResult.discount && (
                  <div className="mb-3">
                    <div className="text-xl font-bold text-green-400">
                      {savedResult.emoji} {savedResult.discount}
                    </div>
                    <div className="text-sm text-gray-300">
                      You saved: ₹{calculatePrice(savedResult.value).savings}
                    </div>
                  </div>
                )}
                
                {savedResult.screenshotUrl && (
                  <div className="mt-3">
                    <img 
                      src={savedResult.screenshotUrl} 
                      alt="Saved Result" 
                      className="w-full h-32 object-cover rounded-lg opacity-80"
                    />
                    <a
                      href={savedResult.screenshotUrl}
                      download={`offer-${savedResult.id}.png`}
                      className="block mt-2 text-center text-sm text-cyan-400 hover:text-cyan-300"
                    >
                      Download Again
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <button
              onClick={() => {
                localStorage.removeItem('savedSpinnerResults');
                setSavedResults([]);
              }}
              className="text-sm text-red-400 hover:text-red-300"
            >
              Clear All Saved Results
            </button>
          </div>
        </div>
      )}

      {/* Instructions Component */}
      <Instructions />
    </div>
  );
}