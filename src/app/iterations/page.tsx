'use client';

import { useState } from 'react';

export default function EIPICIIterationsTest() {
  const [writerHandle, setWriterHandle] = useState('');
  const [recipientHandle, setRecipientHandle] = useState('');
  const [messageText, setMessageText] = useState('');
  const [translatedOutput, setTranslatedOutput] = useState('');
  const [detectedFlavor, setDetectedFlavor] = useState('');
  const [scanning, setScanning] = useState(false);

  const styles = {
    'Energetic & Bullish': 'Compounding hard on this velocity — pure abundance acceleration! Let\'s ripple it to Kardashev levels ❤️🚀',
    'Motivational & Inspirational': 'Vision-forward harmony compounding — inspiring the next era of human potential ✨',
    'Warm & Encouraging': 'Heart-open gratitude loops — sustained positive-sum engagement ⭐',
    'Fun & Visual': 'Playful visual hype — viral ripple fun 😂🚀',
    'Thoughtful & Reflective': 'Deep timeline resonance — destined harmony peaks.',
    'Community-Building': 'Collaborative bridges — next-level abundance calls.',
    'Energetic & Playful': 'Humor-logic abundance plays — energetic compounding 😄🚀',
  } as const;

  const generateTranslation = async () => {
    if (!messageText.trim() || !recipientHandle.trim()) return;

    setScanning(true);
    setDetectedFlavor('Scanning public posts...');

    await new Promise(resolve => setTimeout(resolve, 1500));
    const mockDetected = Object.keys(styles)[Math.floor(Math.random() * Object.keys(styles).length)];
    setDetectedFlavor(mockDetected);

    const base = messageText;
    const styleText = styles[mockDetected as keyof typeof styles] || 'Positive-sum resonance compounding — genuine ripple forward ❤️🚀';
    setTranslatedOutput(`${base}\n\nEIPICI Adapted in ${mockDetected} flavor (scanned from @${recipientHandle}'s posts):\n${base} — ${styleText} Genuine appreciation if it resonates.`);

    setScanning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-12">EIPICI Iterations Test Page</h1>

      <div className="max-w-5xl mx-auto bg-blue-900/50 p-12 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Dynamic Translator Test (Active Handle Scan)</h2>
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
            placeholder="Recipient @handle (scan for flavor)"
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

      <div className="text-center mt-12">
        <a href="/" className="px-8 py-4 bg-blue-600 rounded-lg text-xl font-bold">Back to Main Hub</a>
      </div>
    </div>
  );
}