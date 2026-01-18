"use client";

export default function SaveResult({ result, boxResult, screenshotUrl, onSave }) {
  const handleSave = () => {
    if (!result && !boxResult) return;
    
    const resultData = {
      type: result?.type || 'box',
      label: result?.label || 'Surprise Box',
      ...(boxResult && {
        discount: boxResult.discount,
        value: boxResult.value,
        emoji: boxResult.emoji,
        color: boxResult.color
      }),
      timestamp: new Date().toISOString()
    };
    
    onSave(resultData);
  };

  const handleExportAsJson = () => {
    const resultData = {
      type: result?.type || 'box',
      label: result?.label || 'Surprise Box',
      ...(boxResult && {
        discount: boxResult.discount,
        value: boxResult.value,
        emoji: boxResult.emoji
      }),
      campaignValue: 8000,
      finalPrice: result?.type === "free" ? 0 : 8000 - (8000 * (boxResult?.value || 0) / 100),
      timestamp: new Date().toISOString(),
      screenshotUrl: screenshotUrl
    };

    const dataStr = JSON.stringify(resultData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `campaign-offer-${Date.now()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleCopyToClipboard = () => {
    const resultText = `🎉 I won a ${result?.type === "free" ? "FREE Campaign (₹8000 value)" : `${boxResult?.discount} on Campaign`} from DigRoz Agency!\n\nCampaign Value: ₹8000\nMy Price: ${result?.type === "free" ? "₹0 (FREE!)" : `₹${8000 - (8000 * (boxResult?.value || 0) / 100)}`}\nValid for 7 days\n\nTag @digrozagency to claim!\n\nGenerated: ${new Date().toLocaleString()}`;
    
    navigator.clipboard.writeText(resultText)
      .then(() => alert('Result copied to clipboard! You can paste it anywhere.'))
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-cyan-500/30 max-w-md w-full">
      <h3 className="text-xl font-bold text-center mb-4 text-cyan-300">
        💾 Save Your Result
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={handleSave}
          className="px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          💾 Save to Browser
        </button>
        
        <button
          onClick={handleExportAsJson}
          className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          📄 Export as JSON
        </button>
        
        <button
          onClick={handleCopyToClipboard}
          className="px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          📋 Copy Text
        </button>
        
        {screenshotUrl && (
          <a
            href={screenshotUrl}
            download={`campaign-offer-${Date.now()}.png`}
            className="px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform text-center"
          >
            📷 Download Image
          </a>
        )}
      </div>
      
      <div className="mt-4 text-sm text-gray-400 text-center">
        <p>Results are saved in your browser&apos;s local storage.</p>
        <p>You can access them anytime from this device.</p>
      </div>
    </div>
  );
}