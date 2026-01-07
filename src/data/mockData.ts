// Demo Investigation Data - AI Regulation Topic
export const demoInvestigation = {
  id: "demo-ai-regulation",
  title: "AI Regulation: Innovation vs Safety",
  topic: "AI regulation policies 2025",
  createdAt: "2025-12-30T10:00:00Z",
  status: "completed",
  videosAnalyzed: 2,
  contradictionClusters: 4,
  confidenceLevel: "high" as const,
};

export const executiveSummary = {
  contradictionClusters: 4,
  mainTension: "AI development should be slowed for safety vs AI innovation must continue rapidly",
  confidence: "high" as const,
  totalVideosAnalyzed: 2,
  totalCommentsAnalyzed: 3847,
  keyInsight: "Deep divide between tech industry perspectives emphasizing innovation speed and AI safety researchers warning of existential risks.",
};

export const contradictionCards = [
  {
    id: "contradiction-1",
    title: "Speed of AI Development",
    claimA: "AI development must pause or slow down significantly to ensure safety protocols are established before advancing further.",
    claimB: "Slowing AI development would cede technological leadership to less safety-conscious actors and harm innovation.",
    videosA: [
      {
        id: "v1a",
        title: "Why We Need an AI Pause Now - Safety First",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=320&h=180&fit=crop",
        channel: "AI Safety Research",
        views: "1.2M",
      },
      {
        id: "v2a",
        title: "The Case for Slowing Down AI",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=320&h=180&fit=crop",
        channel: "Tech Ethics Today",
        views: "890K",
      },
    ],
    videosB: [
      {
        id: "v1b",
        title: "Why Pausing AI Would Be a Catastrophic Mistake",
        thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=320&h=180&fit=crop",
        channel: "Innovation Forward",
        views: "2.1M",
      },
      {
        id: "v2b",
        title: "The Innovation Imperative: Keep Building AI",
        thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=320&h=180&fit=crop",
        channel: "Silicon Valley Insights",
        views: "1.5M",
      },
    ],
    severity: "critical" as const,
  },
  {
    id: "contradiction-2",
    title: "Government Regulation Effectiveness",
    claimA: "Comprehensive government regulation is essential to prevent AI misuse and ensure public safety.",
    claimB: "Government regulators lack technical expertise and will stifle innovation with poorly designed rules.",
    videosA: [
      {
        id: "v3a",
        title: "EU AI Act: A Model for the World",
        thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=320&h=180&fit=crop",
        channel: "Policy Explained",
        views: "650K",
      },
    ],
    videosB: [
      {
        id: "v3b",
        title: "Why AI Regulation Will Fail",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&h=180&fit=crop",
        channel: "Tech Freedom",
        views: "980K",
      },
    ],
    severity: "high" as const,
  },
  {
    id: "contradiction-3",
    title: "Existential Risk Assessment",
    claimA: "AI poses a genuine existential threat to humanity and should be treated with the same urgency as nuclear weapons.",
    claimB: "Existential risk claims are overblown fear-mongering that distract from real, immediate AI harms.",
    videosA: [
      {
        id: "v4a",
        title: "AI Could End Humanity - Here's Why",
        thumbnail: "https://images.unsplash.com/photo-1636690513351-0af1763f6237?w=320&h=180&fit=crop",
        channel: "Future Risks Institute",
        views: "3.2M",
      },
    ],
    videosB: [
      {
        id: "v4b",
        title: "Stop Worrying About AI Doom - Focus on Real Problems",
        thumbnail: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=320&h=180&fit=crop",
        channel: "Practical AI",
        views: "1.8M",
      },
    ],
    severity: "high" as const,
  },
  {
    id: "contradiction-4",
    title: "Open Source vs Closed Development",
    claimA: "Open source AI models democratize access and enable safety research by the broader community.",
    claimB: "Open source AI is dangerous as it allows malicious actors to access powerful capabilities without restrictions.",
    videosA: [
      {
        id: "v5a",
        title: "Open Source AI: The Path to Safe Development",
        thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=320&h=180&fit=crop",
        channel: "Open Tech",
        views: "720K",
      },
    ],
    videosB: [
      {
        id: "v5b",
        title: "The Hidden Dangers of Open Source AI",
        thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=320&h=180&fit=crop",
        channel: "Security First",
        views: "540K",
      },
    ],
    severity: "medium" as const,
  },
];

export const narrativeSplitData = {
  narrativeA: {
    title: "Safety-First Approach",
    color: "cyan",
    keyClaimsCount: 12,
    keyClaims: [
      "AI development should be paused until safety measures are proven",
      "Government regulation is essential for responsible AI deployment",
      "Current AI capabilities already pose significant risks",
      "AI labs prioritize profits over safety research",
      "International coordination is required to prevent an AI arms race",
    ],
    topVideos: [
      { title: "The AI Safety Crisis No One Is Talking About", views: "2.8M", channel: "Safety First" },
      { title: "Why AI Researchers Are Worried", views: "1.5M", channel: "Tech Documentary" },
      { title: "Regulation Now: The Case for AI Oversight", views: "890K", channel: "Policy Watch" },
    ],
    keyPhrases: [
      "existential risk",
      "alignment problem",
      "pause AI development",
      "responsible innovation",
      "precautionary principle",
    ],
    audienceProfile: "Researchers, ethicists, policy advocates",
  },
  narrativeB: {
    title: "Innovation-First Approach",
    color: "violet",
    keyClaimsCount: 14,
    keyClaims: [
      "AI development benefits humanity and should continue at pace",
      "Regulation will stifle innovation and push development overseas",
      "AI safety concerns are exaggerated by those with vested interests",
      "Competition with China requires rapid AI advancement",
      "Market forces and industry self-regulation are sufficient safeguards",
    ],
    topVideos: [
      { title: "Why AI Fear Is Overblown", views: "3.1M", channel: "Tech Optimist" },
      { title: "The Real AI Race: Why We Can't Slow Down", views: "2.2M", channel: "Geopolitics Now" },
      { title: "Innovation Under Attack: AI Edition", views: "1.1M", channel: "Business Forward" },
    ],
    keyPhrases: [
      "innovation at stake",
      "competitive advantage",
      "progress cannot wait",
      "self-regulation",
      "doom-mongering",
    ],
    audienceProfile: "Tech executives, entrepreneurs, investors",
  },
};

export const commentIntelligence = {
  confusionSignals: {
    topQuestions: [
      { text: "So should I be worried about AI or not? Every video says something different.", frequency: "Frequently observed" },
      { text: "Is this the same AI we use in ChatGPT? I'm confused about what exactly is dangerous.", frequency: "Common" },
      { text: "If AI is so dangerous, why are they still building it?", frequency: "Common" },
      { text: "Which experts should I trust? Both sides have PhDs.", frequency: "Moderately observed" },
    ],
    exampleComments: [
      { text: "I watched 10 videos on this and I'm more confused than when I started...", likes: 2341, side: "neutral" },
      { text: "One video says AI will cure cancer, the next says it will kill us all. Make it make sense.", likes: 1876, side: "neutral" },
      { text: "The conflicting information is giving me anxiety honestly", likes: 943, side: "neutral" },
    ],
    confusionSpike: [
      { date: "2025-12-01", level: 45 },
      { date: "2025-12-08", level: 52 },
      { date: "2025-12-15", level: 78 },
      { date: "2025-12-22", level: 65 },
      { date: "2025-12-28", level: 82 },
    ],
  },
  agreementPatterns: {
    commonAgreements: [
      "AI is a transformative technology",
      "Some level of oversight is probably needed",
      "China's AI development is relevant to the discussion",
      "Current AI can be misused for deepfakes and misinformation",
    ],
    mainDisagreements: [
      "Severity of existential risk",
      "Effectiveness of government regulation",
      "Trustworthiness of AI companies",
      "Timeline of potential risks",
    ],
  },
  narrativeEchoes: {
    sideA: [
      { phrase: "we need to slow down", frequency: "Widely echoed" },
      { phrase: "alignment is unsolved", frequency: "Common" },
      { phrase: "existential threat", frequency: "Common" },
      { phrase: "regulate now", frequency: "Moderately observed" },
    ],
    sideB: [
      { phrase: "can't stop progress", frequency: "Widely echoed" },
      { phrase: "fear mongering", frequency: "Common" },
      { phrase: "China will win", frequency: "Common" },
      { phrase: "overblown concerns", frequency: "Moderately observed" },
    ],
    overlap: [
      { phrase: "AI is powerful", frequencyA: "Common", frequencyB: "Common" },
      { phrase: "jobs will change", frequencyA: "Moderately observed", frequencyB: "Common" },
    ],
  },
  toneAnalysis: {
    sideA: [
      { tone: "Concerned", level: "High", width: 85, color: "hsl(var(--confusion))" },
      { tone: "Analytical", level: "Medium", width: 68, color: "hsl(var(--narrative-a))" },
      { tone: "Urgent", level: "Medium", width: 55, color: "hsl(var(--destructive))" },
      { tone: "Hopeful", level: "Low", width: 38, color: "hsl(var(--agreement))" },
    ],
    sideB: [
      { tone: "Optimistic", level: "High", width: 80, color: "hsl(var(--agreement))" },
      { tone: "Dismissive", level: "Medium", width: 65, color: "hsl(var(--muted-foreground))" },
      { tone: "Frustrated", level: "Medium", width: 60, color: "hsl(var(--destructive))" },
      { tone: "Skeptical", level: "Low", width: 45, color: "hsl(var(--confusion))" },
    ],
  },
  representativeComments: {
    sideA: [
      {
        text: "As someone who works in AI research, I can tell you the alignment problem is very real. We don't fully understand what these systems are doing.",
        likes: 4523,
        replies: 234,
        sentiment: "analytical",
      },
      {
        text: "The fact that AI labs are moving this fast while admitting they can't control these systems is genuinely terrifying.",
        likes: 3211,
        replies: 189,
        sentiment: "concerned",
      },
    ],
    sideB: [
      {
        text: "Every new technology has had doomsayers. Remember when people thought trains would make cows stop producing milk? This is the same thing.",
        likes: 5678,
        replies: 412,
        sentiment: "dismissive",
      },
      {
        text: "If we pause, China won't. And then we'll have AI developed by a country with no free press or civil liberties concerns. How is that better?",
        likes: 4892,
        replies: 356,
        sentiment: "strategic",
      },
    ],
  },
};

export const userInvestigations = [
  {
    id: "demo-ai-regulation",
    title: "AI Regulation: Innovation vs Safety",
    topic: "AI regulation policies 2025",
    createdAt: "2025-12-30T10:00:00Z",
    status: "completed" as const,
    videosAnalyzed: 2,
    contradictions: 4,
  },
  {
    id: "inv-2",
    title: "Climate Change Solutions",
    topic: "nuclear energy climate solution",
    createdAt: "2025-12-28T14:30:00Z",
    status: "completed" as const,
    videosAnalyzed: 2,
    contradictions: 3,
  },
  {
    id: "inv-3",
    title: "Cryptocurrency Future",
    topic: "bitcoin regulation 2025",
    createdAt: "2025-12-25T09:00:00Z",
    status: "completed" as const,
    videosAnalyzed: 2,
    contradictions: 2,
  },
];

export const deepDiveData = {
  "contradiction-1": {
    id: "contradiction-1",
    title: "Speed of AI Development",
    fullAnalysis: {
      summary: "This is the most polarizing debate in the AI community, with significant implications for policy and industry practices.",
      historicalContext: "The debate intensified following the public release of GPT-4 in early 2023 and subsequent open letters calling for AI development pauses.",
      stakeholderPositions: [
        { name: "AI Safety Researchers", position: "Strong support for pause", influence: "High in academic circles" },
        { name: "Major Tech Companies", position: "Mixed - public safety messaging, private acceleration", influence: "Dominant in practice" },
        { name: "Governments", position: "Increasingly concerned, slow to act", influence: "Growing regulatory efforts" },
        { name: "Open Source Community", position: "Divided on pace vs access", influence: "Significant in model development" },
      ],
    },
    claimA: {
      fullText: "AI development must pause or slow down significantly to ensure safety protocols are established before advancing further. Current capabilities already pose risks, and we don't understand how these systems work internally.",
      evidenceCited: [
        "Open letter signed by AI researchers calling for 6-month pause",
        "Studies showing AI systems developing unexpected capabilities",
        "Incidents of AI generating harmful content",
      ],
      speakerCredentials: "AI safety researchers, former AI lab employees, academic ethicists",
      videoTimestamps: [
        { video: "Why We Need an AI Pause Now", timestamp: "4:32", quote: "We're racing towards something we don't understand" },
        { video: "The Case for Slowing Down AI", timestamp: "12:15", quote: "The alignment problem remains unsolved" },
      ],
    },
    claimB: {
      fullText: "Slowing AI development would cede technological leadership to less safety-conscious actors and harm innovation. Competitive pressures, especially from China, mean pausing is not a viable option.",
      evidenceCited: [
        "Analysis of China's AI investment and capabilities",
        "Economic impact studies of AI innovation",
        "Arguments about distributed safety research benefiting from progress",
      ],
      speakerCredentials: "Tech executives, venture capitalists, geopolitical analysts",
      videoTimestamps: [
        { video: "Why Pausing AI Would Be Catastrophic", timestamp: "8:45", quote: "If we stop, they won't" },
        { video: "The Innovation Imperative", timestamp: "15:20", quote: "Progress benefits everyone, including safety research" },
      ],
    },
    commentAnalysis: {
      totalComments: 4521,
      sentimentBreakdown: { sideA: 42, sideB: 38, confused: 20 },
      topDebatePoints: [
        "Whether a pause is even enforceable globally",
        "Trade-offs between short-term and long-term risks",
        "Who gets to decide what 'safe enough' means",
      ],
    },
  },
};
