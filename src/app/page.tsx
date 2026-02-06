'use client';

import { useState } from 'react';

export default function EIPICICore() {
  const [threadUrl, setThreadUrl] = useState('');
  const [simActive, setSimActive] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState<any>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedUnifier, setSelectedUnifier] = useState<string | null>(null);

  // Translator states (secondary)
  const [writerHandle, setWriterHandle] = useState('');
  const [recipientHandle, setRecipientHandle] = useState('');
  const [messageText, setMessageText] = useState('');
  const [translatedOutput, setTranslatedOutput] = useState('');
  const [detectedFlavor, setDetectedFlavor] = useState('');
  const [scanning, setScanning] = useState(false);

  const threadIntent = 'Building abundance in AI/space ecosystems — compounding hard with positive-sum peaks and ripple momentum.';

  const styles = {
    'Energetic & Bullish': 'Compounding hard on this merger velocity — pure abundance acceleration! Let\'s ripple it to Kardashev levels ❤️🚀',
    'Fun & Visual': 'Meme-worthy merger drop — visual hype incoming, let\'s make it viral fun! 😂🚀',
    'Motivational & Inspirational': 'This merger is vision-forward abundance compounding — inspiring the next era of human potential ✨',
    'Energetic & Playful': 'Playful logic on this merger — energetic humor meets serious abundance plays 😄🚀',
    'Thoughtful & Reflective': 'Reflecting on timeline/fate awe — this merger feels destined for deeper harmony peaks.',
    'Community-Building': 'Calling next merge communities — building bridges for collaborative abundance.',
    'Warm & Encouraging': 'Grateful for this merger gratitude loop — warm encouragement to all rippling it forward ⭐',
  } as const;

  type FlavorKey = keyof typeof styles;

  const generateReply = (flavor: string) => {
    const base = threadIntent;
    const key = flavor as FlavorKey;
    const styleText = styles[key] || 'Positive-sum resonance compounding — genuine ripple forward ❤️🚀';
    return `${base}\n\nEIPICI Reply in ${flavor} flavor:\n${styleText} Genuine positive-sum resonance — compounding together.`;
  };

  const craftInviteMessage = (handle: string) => {
    return `Hey ${handle},\n\nQuietly admiring your abundance weaves — resonates deeply with this harmony peak (95%+ signal).\n\nStrong positive-sum ripple in SpaceX/xAI visions, exponential potential. Your voice would compound it seriously — genuine appreciation, no pressure if you'd like to jump in. ❤️🚀`;
  };

  const generateTranslation = async () => {
    if (!messageText.trim() || !recipientHandle.trim()) return;

    setScanning(true);
    setDetectedFlavor('Scanning public posts...');

    // Mock real scan (replace with API later)
    await new Promise(resolve => setTimeout(resolve, 1500));
    const mockDetected = Object.keys(styles)[Math.floor(Math.random() * Object.keys(styles).length)];
    setDetectedFlavor(mockDetected);

    const base = messageText;
    const styleText = styles[mockDetected as keyof typeof styles] || 'Positive-sum resonance compounding — genuine ripple forward ❤️🚀';
    setTranslatedOutput(`${base}\n\nEIPICI Adapted in ${mockDetected} flavor (scanned from @${recipientHandle}'s posts):\n${base} — ${styleText} Genuine appreciation if it resonates.`);

    setScanning(false);
  };

  const clusters = [ /* full 7 clusters from previous */ ];

  const nexusUnifiers = [ /* full 6 prospects from previous */ ];

  const superUnifiers = [ /* full 6 with avatars from previous */ ];

  const handleSimulate = () => {
    if (threadUrl.trim()) setSimActive(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-12">EIPICI Host Intent Hub Simulator</h1>

      <div className="max-w-5xl mx-auto">
        <input
          type="text"
          placeholder="Paste X thread URL for simulation..."
          value={threadUrl}
          onChange={(e) => setThreadUrl(e.target.value)}
          className="w-full p-4 rounded-lg bg-blue-900/50 text-lg mb-6"
        />
        <button onClick={handleSimulate} className="px-8 py-4 bg-blue-600 rounded-lg text-xl font-bold mb-12">
          Simulate Hub
        </button>

        {simActive && (
          <div className="space-y-12">
            {/* Full gauges, chaos bar, ripple alert, ropes with Generate Reply, nexus with Craft Invite, super with Send Invite - all from previous gold */}
          </div>
        )}
      </div>

      {/* Secondary Dynamic Translator below */}
      <div className="max-w-5xl mx-auto mt-32 bg-blue-900/50 p-12 rounded-2xl">
        {/* Full translator JSX from previous - handles + message + generate + dual-pane */}
      </div>

      {/* Reply & Invite Modals full from previous */}
    </div>
  );
}