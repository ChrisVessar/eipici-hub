'use client';

import { useState } from 'react';

export default function EIPICICore() {
  const [threadUrl, setThreadUrl] = useState('');
  const [simActive, setSimActive] = useState(false);
  const [showTranslator, setShowTranslator] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState<any>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedUnifier, setSelectedUnifier] = useState<string | null>(null);

  // Translator states
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

    await new Promise(resolve => setTimeout(resolve, 1500));
    const mockDetected = Object.keys(styles)[Math.floor(Math.random() * Object.keys(styles).length)];
    setDetectedFlavor(mockDetected);

    const base = messageText;
    const styleText = styles[mockDetected as keyof typeof styles] || 'Positive-sum resonance compounding — genuine ripple forward ❤️🚀';
    setTranslatedOutput(`${base}\n\nEIPICI Adapted in ${mockDetected} flavor (scanned from @${recipientHandle}'s posts):\n${base} — ${styleText} Genuine appreciation if it resonates.`);

    setScanning(false);
  };

  const clusters = [
    { rank: 1, name: "Pure Hype & Congrats", weight: "+43%", posts: 1118, flavor: "Energetic & Bullish", harmony: "99/95%" },
    { rank: 2, name: "Meme/Visual Drops", weight: "+27%", posts: 702, flavor: "Fun & Visual", harmony: "99/98%" },
    { rank: 3, name: "Abundance Vision Forward", weight: "+14%", posts: 364, flavor: "Motivational & Inspirational", harmony: "99/96%" },
    { rank: 4, name: "Merger Humor/Logic", weight: "+8%", posts: 208, flavor: "Energetic & Playful", harmony: "95/87%" },
    { rank: 5, name: "Timeline/Fate Awe", weight: "+4%", posts: 104, flavor: "Thoughtful & Reflective", harmony: "98/90%" },
    { rank: 6, name: "Next Merge Calls", weight: "+3%", posts: 78, flavor: "Community-Building", harmony: "97/91%" },
    { rank: 7, name: "Personal Gratitude", weight: "+1%", posts: 26, flavor: "Warm & Encouraging", harmony: "98/95%" },
  ];

  const nexusUnifiers = [
    { handle: "@Gnaval", score: 68, desc: "Relentless optimist threading abundance into every interaction with high energy." },
    { handle: "@lexfridman", score: 142, desc: "Deep thinker bridging AI, philosophy, and human potential." },
    { handle: "@PeterDiamandis", score: 91, desc: "Abundance visionary extending healthspan and exponential tech." },
    { handle: "@joerogan", score: 120, desc: "Curious explorer discussing big ideas and human optimization." },
    { handle: "@timferriss", score: 85, desc: "Efficiency master deconstructing world-class performance." },
    { handle: "@andrewng", score: 78, desc: "AI educator democratizing machine learning for global impact." },
  ];

  const superUnifiers = [
    { handle: "@elonmusk", avatar: "https://pbs.twimg.com/profile_images/2008546467615580160/57KcqsTA.jpg" },
    { handle: "@lexfridman", avatar: "https://pbs.twimg.com/profile_images/1854713863817646088/nTmsz7jR.jpg" },
    { handle: "@PeterDiamandis", avatar: "https://pbs.twimg.com/profile_images/1270804940936503296/oVhO8Njn.jpg" },
    { handle: "@joerogan", avatar: "https://pbs.twimg.com/profile_images/552307347851210752/vrXDcTFC.jpeg" },
    { handle: "@naval", avatar: "https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2.jpg" },
    { handle: "@kfschris", avatar: "https://pbs.twimg.com/profile_images/1728967165469167616/FVcyJLPK.jpg" },
  ];

  const handleSimulate = () => {
    setSimActive(true); // Always activate for demo (remove condition for now)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-12">EIPICI Host Intent Hub Simulator</h1>

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-8 mb-12">
          <input
            type="text"
            placeholder="Paste X thread URL for simulation..."
            value={threadUrl}
            onChange={(e) => setThreadUrl(e.target.value)}
            className="flex-1 p-4 rounded-lg bg-blue-900/50 text-lg"
          />
          <button onClick={handleSimulate} className="px-8 py-4 bg-blue-600 rounded-lg text-xl font-bold">
            Simulate Hub
          </button>
          <p className="text-2xl font-semibold text-cyan-300">Harmony and intent? Authenticity is truly exponentially epic.</p>
        </div>

        {simActive && (
          <div className="space-y-12">
            {/* Full gauges, chaos bar, ripple alert, ropes, nexus, super - from previous */}
          </div>
        )}
      </div>

      {/* Button for Translator */}
      <div className="max-w-5xl mx-auto mt-24 text-center">
        <button onClick={() => setShowTranslator(!showTranslator)} className="px-8 py-4 bg-green-600 rounded-lg text-xl font-bold">
          {showTranslator ? 'Hide' : 'Open'} EIPICI Dynamic Translator
        </button>
      </div>

      {showTranslator && (
        <div className="max-w-5xl mx-auto mt-12 bg-blue-900/50 p-12 rounded-2xl">
          {/* Full translator JSX from previous */}
        </div>
      )}

      {/* Modals */}
    </div>
  );
}