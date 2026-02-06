'use client';

import { useState } from 'react';

export default function EIPICICore() {
  const [threadUrl, setThreadUrl] = useState('');
  const [simActive, setSimActive] = useState(false);
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
    setSimActive(true);
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
            <div className="grid grid-cols-3 gap-12 text-center">
              <div className="bg-cyan-900/50 p-8 rounded-2xl">
                <p className="text-7xl font-bold">98%</p>
                <p className="text-2xl mt-4">Harmony</p>
              </div>
              <div className="bg-green-900/50 p-8 rounded-2xl">
                <p className="text-7xl font-bold">95%</p>
                <p className="text-2xl mt-4">Chaos Reduction</p>
              </div>
              <div className="bg-orange-900/50 p-8 rounded-2xl">
                <p className="text-7xl font-bold">130x+</p>
                <p className="text-2xl mt-4">Ripple Potential</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-green-500 p-6 rounded-lg text-center text-2xl font-bold mb-12">
              Chaos Reduction: 95% vs 92% target • Above - signal strong
            </div>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-lg flex justify-between items-center mb-12 text-xl">
              <p>Exponential Ripple Alert ⚠️: This harmony peak could reach 130x+ users (tens of millions in AI/space abundance play!)</p>
              <button className="px-8 py-4 bg-orange-500 rounded-lg font-bold">Propagate Ripple</button>
            </div>

            <h2 className="text-3xl font-bold mb-6">Condense Rope - 7 Precision Clusters (2,600 total replies)</h2>
            <div className="grid grid-cols-1 gap-6 mb-12">
              {clusters.map((cluster) => (
                <div key={cluster.rank} className="bg-blue-900/60 p-6 rounded-lg flex justify-between items-center">
                  <p className="text-xl font-semibold">
                    {cluster.rank}. {cluster.name} ({cluster.weight} - {cluster.posts} posts) - {cluster.flavor} - {cluster.harmony}
                  </p>
                  <button onClick={() => { setSelectedCluster(cluster); setShowReplyModal(true); }} className="px-6 py-3 bg-green-600 rounded-lg font-semibold">
                    Generate Reply
                  </button>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Nexus Propagate (X-Wide Unifiers - 6 Fresh Prospects)</h2>
            <div className="grid grid-cols-1 gap-6 mb-12">
              {nexusUnifiers.map((u) => (
                <div key={u.handle} className="bg-blue-900/60 p-6 rounded-lg flex justify-between items-start">
                  <div>
                    <p className="text-2xl font-bold">
                      {u.handle} <span className="text-orange-400 ml-4">{u.score}</span>
                    </p>
                    <p className="text-lg mt-2 opacity-80">{u.desc}</p>
                  </div>
                  <button onClick={() => { setSelectedUnifier(u.handle); setShowInviteModal(true); }} className="px-6 py-3 bg-purple-600 rounded-lg font-semibold">
                    Craft Unique Invite
                  </button>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Super Unifiers (6 High-Profile)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {superUnifiers.map((u) => (
                <div key={u.handle} className="bg-blue-900/60 p-8 rounded-2xl text-center">
                  <img src={u.avatar} alt={u.handle} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-400" />
                  <p className="text-2xl font-bold mb-6">{u.handle}</p>
                  <button onClick={() => { setSelectedUnifier(u.handle); setShowInviteModal(true); }} className="px-6 py-3 bg-blue-500 rounded-lg font-semibold">
                    Send Invite
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Translator */}
      <div className="max-w-5xl mx-auto mt-32 bg-blue-900/50 p-12 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">EIPICI Dynamic Translator</h2>
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

      {/* Modals */}
      {showReplyModal && selectedCluster && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-blue-950/90 rounded-2xl p-8 max-w-4xl w-full mx-4">
            <h3 className="text-2xl font-bold mb-8 text-center">Generated Reply for Cluster {selectedCluster.rank} ({selectedCluster.flavor} Flavor)</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Original Thread Intent</h4>
                <p className="text-lg whitespace-pre-wrap">{threadIntent}</p>
              </div>
              <div className="bg-green-900/50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Adapted Reply (What Cluster Wants to Hear)</h4>
                <p className="text-lg whitespace-pre-wrap">{generateReply(selectedCluster.flavor)}</p>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button onClick={() => setShowReplyModal(false)} className="px-8 py-4 bg-gray-700 rounded-full text-xl">Cancel</button>
              <button className="px-8 py-4 bg-green-500 rounded-full text-xl font-bold">Copy Reply</button>
            </div>
          </div>
        </div>
      )}

      {showInviteModal && selectedUnifier && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-blue-950/90 rounded-2xl p-8 max-w-4xl w-full mx-4">
            <h3 className="text-2xl font-bold mb-8 text-center">Soft Invite for {selectedUnifier}</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Original Thread Intent</h4>
                <p className="text-lg whitespace-pre-wrap">{threadIntent}</p>
              </div>
              <div className="bg-green-900/50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Adapted Soft Invite</h4>
                <p className="text-lg whitespace-pre-wrap">{craftInviteMessage(selectedUnifier)}</p>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button onClick={() => setShowInviteModal(false)} className="px-8 py-4 bg-gray-700 rounded-full text-xl">Cancel</button>
              <button className="px-8 py-4 bg-green-500 rounded-full text-xl font-bold">Copy Invite & Mark Sent ✓</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}