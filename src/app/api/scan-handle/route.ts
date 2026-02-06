import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const handle = searchParams.get('handle');

  if (!handle) return NextResponse.json({ flavor: 'Quick & Energetic 💚' });

  // Real public fetch via nitter RSS (working instance)
  const nitterInstance = 'https://nitter.net';
  const rssUrl = `${nitterInstance}/${handle}/rss`;

  try {
    const res = await fetch(rssUrl);
    const text = await res.text();

    // Simple keyword count for flavor (expand with better analysis)
    const lower = text.toLowerCase();
    const bullishCount = (lower.match(/abundance|ripple|compounding|🚀|❤️/g) || []).length;
    const motivationalCount = (lower.match(/vision|inspire|unity|potential/g) || []).length;
    const warmCount = (lower.match(/gratitude|warm|encourage|heart/g) || []).length;

    let flavor = 'Quick & Energetic 💚';
    if (bullishCount > motivationalCount && bullishCount > warmCount) flavor = 'Energetic & Bullish';
    else if (motivationalCount > warmCount) flavor = 'Motivational & Inspirational';
    else if (warmCount > 0) flavor = 'Warm & Encouraging';

    return NextResponse.json({ flavor });
  } catch {
    return NextResponse.json({ flavor: 'Quick & Energetic 💚' }); // Fallback
  }
}