'use client';

import { useState } from 'react';

export default function UserDashboard() {
  const [trackingNumber, setTrackingNumber] = useState('');

  return (
    <div className="p-16 max-w-4xl mx-auto h-full flex flex-col justify-center -mt-10">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">Track Your Shipment</h1>
        <p className="text-gray-400 text-sm">Enter your tracking number to view shipment status</p>
      </div>

      {/* Input Form & Button */}
      <div className="flex gap-4 mb-4">
        <div className="relative flex-1">
          <span className="absolute left-4 top-4 text-gray-500">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </span>
          <input 
            type="text" 
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number (e.g. OL2026041301)" 
            className="w-full bg-[#1A1C24] border border-transparent text-white text-sm p-4 pl-12 rounded focus:border-[#D977F9] focus:outline-none placeholder-gray-600 transition" 
          />
        </div>
        <button className="bg-[#D977F9] text-[#250F2D] px-8 py-4 text-xs font-bold tracking-widest rounded hover:bg-[#c75be9] active:scale-95 transition flex items-center gap-2">
          TRACK 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      {/* Sample Links */}
      <div className="text-[11px] text-gray-400 mb-12">
        Try these sample tracking numbers: &nbsp;
        <button onClick={() => setTrackingNumber('OL2026041301')} className="text-[#D977F9] hover:underline underline-offset-2">OL2026041301</button> &nbsp;|&nbsp; 
        <button onClick={() => setTrackingNumber('OL2026041302')} className="text-[#D977F9] hover:underline underline-offset-2">OL2026041302</button> &nbsp;|&nbsp; 
        <button onClick={() => setTrackingNumber('OL2026041303')} className="text-[#D977F9] hover:underline underline-offset-2">OL2026041303</button>
      </div>

      {/* Empty State Card */}
      <div className="bg-gradient-to-b from-[#151822] to-[#0A0C10] rounded-lg border border-gray-800/50 shadow-2xl p-16 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-[#1A1C24] rounded-lg border border-gray-800 flex items-center justify-center mb-6 text-gray-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">No Shipment Tracked Yet</h3>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
          Enter a tracking number above to view real-time telemetry, location history, and estimated arrival details for your maritime cargo.
        </p>
      </div>

    </div>
  );
}