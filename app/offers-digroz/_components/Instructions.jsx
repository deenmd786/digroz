"use client";

export default function Instructions() {
  return (
    <div className="mt-8 p-5 bg-gray-800/40 rounded-xl max-w-md border border-gray-700">
      <h3 className="font-bold text-lg mb-3 text-cyan-300 flex items-center gap-2">
        📋 How to Claim & Save Your Offer
      </h3>
      <ol className="text-sm text-gray-300 space-y-2 pl-1">
        <li>
            1. <span className="text-white">Spin the wheel</span> to get your offer</li>
        <li>
            2. <span className="text-white">Save the result</span> using "Save to Browser" button</li>
        <li>
            3. <span className="text-white">Download the screenshot</span> of your offer</li>
        <li>
            4. <span className="text-white">Post it on Instagram Story</span> and tag @digrozagency</li>
        <li>
            5. <span className="text-white">DM us the screenshot</span> on Instagram</li>
        <li>
            6. We&apos;ll <span className="text-white">contact you within 24 hours</span></li>
        <li>
            7. Offer valid for <span className="text-yellow-300">7 days</span> after claiming</li>
      </ol>
      
      <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
        <p className="text-xs text-gray-400">
          <span className="text-green-400">💾 Save Feature:</span> Your results are saved in this browser. 
          You can view them anytime by clicking "
          View Saved Results
          ".
        </p>
      </div>
      
      <div className="mt-4 p-3 bg-amber-900/20 rounded-lg border border-amber-500/30">
        <p className="text-xs text-amber-300">
          <span className="text-red-400">⚠️ Important:</span> This offer is only valid when shared on Instagram with our mention. 
          We&apos;ll verify the post before activating your campaign.
        </p>
      </div>
    </div>
  );
}