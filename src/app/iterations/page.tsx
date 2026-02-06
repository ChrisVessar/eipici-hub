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

    // Simulate scan delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock detected flavor (replace with real scan API later)
    const mockDetected = Object.keys(styles)[Math.floor(Math.random() * Object.keys(styles).length)];
    setDetectedFlavor(mockDetected);

    const styleText = styles[mockDetected as keyof typeof styles] || 'Positive-sum resonance compounding — genuine ripple forward ❤️🚀';

    setTranslatedOutput(`EIPICI Translated for @${recipientHandle} (${mockDetected} Flavor):\n\n${messageText} — ${styleText} Genuine appreciation if it resonates.`);

    setScanning(false);
  };

  const copyToClipboard = () => {
    if (translatedOutput) {
      navigator.clipboard.writeText(translatedOutput);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-8">EIPICI Dynamic Translator (Test Page)</h1>

      {/* Prominent explanatory message */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-3xl font-semibold text-cyan-300 leading-relaxed">
          This translator maintains harmony and intent authenticity while adapting the message to the style of the recipient — in the most likely way they want to hear it, without losing any of the original intent!
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-blue-900/50 p-12 rounded-2xl">
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
          <div className="mt-12 bg-green-900/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Translated Message (Ready to Copy)</h3>
            <p className="text-lg whitespace-pre-wrap mb-8">{translatedOutput}</p>
            <div className="text-center">
              <button onClick={copyToClipboard} className="px-8 py-4 bg-cyan-600 rounded-lg text-xl font-bold">
                Copy to Clipboard
              </button>
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