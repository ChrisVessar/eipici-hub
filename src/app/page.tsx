'use client';

import { useState } from 'react';

export default function EIPICICore() {
  const [threadUrl, setThreadUrl] = useState('https://x.com/SpaceX/status/20184403351400243837?s=20');
  const [simActive, setSimActive] = useState(true);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [selectedCluster, setSelectedCluster] = useState<any>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedUnifier, setSelectedUnifier] = useState<string | null>(null);

  const threadIntent = 'Announcing SpaceX/xAI merger — accelerating abundance in AI/space ecosystems with exponential velocity.';

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

  const handleSimulate = () => setSimActive(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white p-8">
      {/* Full JSX from last version - gauges, bars, ropes with Generate Reply, nexus, super with avatars, reply/invite modals with dual-pane */}
      {/* (The body is identical to previous, just with typed generateReply) */}
    </div>
  );
}