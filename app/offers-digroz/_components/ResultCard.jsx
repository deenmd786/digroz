"use client";
import { forwardRef, useEffect } from "react";
import html2canvas from "html2canvas";

// -------- FIX: Generate values OUTSIDE component --------
const STATIC_OFFER_ID = Date.now().toString().slice(-8);
const STATIC_DATE = new Date().toLocaleDateString();

const ResultCard = forwardRef(
  (
    { result, boxResult, calculatePrice, screenshotUrl, onScreenshotGenerated },
    ref
  ) => {

    // --------- Screenshot generator ----------
    const generateScreenshot = async () => {
      if (ref?.current) {
        try {
          const canvas = await html2canvas(ref.current, {
            backgroundColor: null,
            scale: 2,
            useCORS: true,
          });

          const imageUrl = canvas.toDataURL("image/png");
          onScreenshotGenerated(imageUrl);
        } catch (error) {
          console.error("Failed to generate screenshot:", error);
        }
      }
    };

    // --------- Effect for screenshot ----------
    useEffect(() => {
      if ((result?.type === "free" || boxResult) && !screenshotUrl) {
        generateScreenshot();
      }
    }, [result, boxResult, screenshotUrl]);

    return (
      <div ref={ref} className="mt-8">
        <div className="bg-linear-to-br from-gray-900 to-gray-800 border-2 border-cyan-500/30 rounded-3xl p-8 max-w-md w-full shadow-2xl">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="text-5xl mb-2">🎉</div>
            <h2 className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CONGRATULATIONS!
            </h2>
            <p className="text-gray-300 mt-2">You&apos;ve won an exclusive offer!</p>
          </div>

          {/* Offer Details */}
          <div className="bg-linear-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 mb-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-lg font-semibold text-gray-300">Campaign Value</div>
                <div className="text-3xl font-bold text-white">₹8000</div>
              </div>
              <div className="text-4xl">➡️</div>
              <div>
                <div className="text-lg font-semibold text-gray-300">Your Price</div>
                <div className="text-3xl font-bold text-green-400">
                  {result?.type === "free"
                    ? "₹0"
                    : `₹${calculatePrice(boxResult?.value).discounted}`}
                </div>
              </div>
            </div>

            {result?.type === "free" ? (
              <div className="text-center py-3 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-xl">
                <div className="text-2xl font-bold text-green-300">100% FREE CAMPAIGN!</div>
                <div className="text-green-200">Complete ₹8000 value</div>
              </div>
            ) : (
              <div className={`text-center py-3 bg-linear-to-r ${boxResult?.color || ""}/20 rounded-xl`}>
                <div className="text-2xl font-bold text-white">
                  {boxResult?.emoji} {boxResult?.discount}
                </div>
                <div className="text-gray-200 mt-1">
                  You save: ₹{calculatePrice(boxResult?.value).savings}
                </div>
              </div>
            )}
          </div>

          {/* Terms */}
          <div className="border-t border-gray-700 pt-4 text-sm text-gray-400">
            <p className="text-center mb-2">
              📍 <span className="text-cyan-300">@digrozagency</span>
            </p>
            <p className="text-center">Valid for 7 days • Share on Instagram & mention us to claim</p>
          </div>

          {/* Watermark */}
          <div className="text-center text-xs text-gray-500 mt-6">
            Offer ID: {STATIC_OFFER_ID} • Generated on {STATIC_DATE}
          </div>
        </div>
      </div>
    );
  }
);

ResultCard.displayName = "ResultCard";

export default ResultCard;
