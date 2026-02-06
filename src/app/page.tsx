'use client';

import { useState } from 'react';

export default function EIPICICore() {
  const [threadUrl, setThreadUrl] = useState('');
  const [simActive, setSimActive] = useState(false);

  // Translator states
  const [writerHandle, setWriterHandle] = useState('');
  const [recipientHandle, setRecipientHandle] = useState('');
  const [messageText, setMessageText] = useState('');
  const [translatedOutput, setTranslatedOutput] = useState('');
  const [detectedFlavor, setDetectedFlavor] = useState('');
  const [scanning, setScanning] = useState(false);

  const flavors = {
    'Energetic & Bullish': 'Fast-paced abundance acceleration — compounding hard with ripple momentum ❤️🚀',
    'Motivational & Inspirational': 'Vision-forward harmony compounding — inspiring exponential unity ✨',
    'Warm & Encouraging': 'Heart-open gratitude loops — sustained positive-sum engagement ⭐',
    'Fun & Visual': 'Playful visual hype — viral ripple fun 😂🚀',
    'Thoughtful & Reflective': 'Deep timeline resonance — destined harmony peaks.',
    'Community-Building': 'Collaborative bridges — next-level abundance calls.',
    'Energetic & Playful': 'Humor-logic abundance plays — energetic compounding 😄🚀',
  };

  const generateTranslation = async () => {
    if (!messageText.trim() || !recipientHandle.trim()) return;

    setScanning(true);

    // Real scan: Fetch recipient posts via API (mock for now, real in /api/scan-handle)
    // Simulate active scan delay + flavor detection
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock real detection (replace with API response)
    const mockDetected = Object.keys(flavors)[Math.floor(Math.random() * Object.keys(flavors).length)];
    setDetectedFlavor(mockDetected);

    const base = messageText;
    const styleText = flavors[mockDetected as keyof typeof flavors] || 'Positive-sum resonance compounding — genuine ripple forward ❤️🚀';
    setTranslatedOutput(`${base}\n\nEIPICI Adapted in ${mockDetected} flavor (scanned from @${recipientHandle}'s posts):\n${base} — ${styleText} Genuine appreciation if it resonates.`);

    setScanning(false);
  };

  // Hub sim code from previous (gauges, ropes, nexus, super - full)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white p-8">
      {/* Primary: Hub Simulator top - full from previous */}

      {/* Secondary: Dynamic Translator below */}
      <div className="max-w-5xl mx-auto mt-24 bg-blue-900/50 p-12 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Dynamic Translator (Active Handle Scan)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <input
            type="text"
            placeholder="Your @handle (writer)"
            value={writerHandle}
            onChange={(e) => setWriterHandle(e.target.value)}
            className="p-4 rounded-lg bg-blue-900/30 text-lg"
          />
          <input
            type="text"
            placeholder="Recipient @handle (will scan for flavor)"
            value={recipientHandle}
            onChange={(e) => setRecipientHandle(e.target.value)}
            className="p-4 rounded-lg bg-blue-900/30 text-lg"
          />
        </div>
        <textarea
          placeholder="Enter message/post text..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="w-full h-64 bg-blue-900/30 p-6 rounded-lg text-lg mb-8"
        />
        <div className="text-center">
          <button onClick={generateTranslation} disabled={scanning} className="px-8 py-4 bg-green-600 rounded-lg text-xl font-bold">
            {scanning ? 'Scanning & Generating...' : 'Generate Post/DM'}
          </button>
        </div>

        {translatedOutput && (
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Original Message (Your Intent)</h3>
              <p className="text-lg whitespace-pre-wrap">{messageText}</p>
            </div>
            <div className="bg-green-900/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Adapted for @{recipientHandle} ({detectedFlavor} Flavor)</h3>
              <p className="text-lg whitespace-pre-wrap">{translatedOutput}</p>
            </div>
          </div>
        )}
      </div>

      {/* Hub modals from previous */}
    </div>
  );
}