// Demo Investigation Data - AI Regulation Topic
export const demoInvestigation = {
  id: "demo-ai-regulation",
  title: "AI Regulation: Innovation vs Safety",
  topic: "AI regulation policies 2025",
  createdAt: "2025-12-30T10:00:00Z",
  status: "completed",
  videosSelected: 2,
};

// Video Excerpts - Raw statements from selected videos (no interpretation)
export const videoExcerpts = [
  {
    id: "excerpt-1",
    title: "Speed of AI Development",
    topic: "Development Pace",
    statementA: "AI development must pause or slow down significantly to ensure safety protocols are established before advancing further.",
    statementB: "Slowing AI development would cede technological leadership to less safety-conscious actors and harm innovation.",
    sourceA: "AI Safety Research Channel",
    sourceB: "Innovation Forward Channel",
    contextA: "We're racing towards something we don't understand. The alignment problem remains unsolved, and every week we're seeing new capabilities emerge that even the developers didn't predict.",
    contextB: "If we stop, they won't. Progress benefits everyone, including safety research. The best way to make AI safe is to be the ones building it.",
    timestampA: "4:32",
    timestampB: "8:45",
  },
  {
    id: "excerpt-2",
    title: "Government Regulation",
    topic: "Policy",
    statementA: "Comprehensive government regulation is essential to prevent AI misuse and ensure public safety.",
    statementB: "Government regulators lack technical expertise and will stifle innovation with poorly designed rules.",
    sourceA: "Policy Explained Channel",
    sourceB: "Tech Freedom Channel",
    contextA: "The EU AI Act provides a model for the world. We need binding requirements, not voluntary commitments from companies that prioritize profits.",
    contextB: "Regulators are always years behind the technology. By the time they understand what they're regulating, it's already obsolete.",
    timestampA: "12:15",
    timestampB: "6:20",
  },
  {
    id: "excerpt-3",
    title: "Existential Risk Discussion",
    topic: "Risk Assessment",
    statementA: "AI poses a genuine existential threat to humanity and should be treated with the same urgency as nuclear weapons.",
    statementB: "Existential risk claims are overblown fear-mongering that distract from real, immediate AI harms.",
    sourceA: "Future Risks Institute",
    sourceB: "Practical AI Channel",
    contextA: "Leading AI researchers have signed statements warning about extinction risk. This isn't science fiction—it's the assessment of people who build these systems.",
    contextB: "While people debate robot apocalypse, AI is being used right now to discriminate in hiring, spread misinformation, and surveil populations.",
    timestampA: "15:00",
    timestampB: "9:30",
  },
  {
    id: "excerpt-4",
    title: "Open Source Debate",
    topic: "Access & Openness",
    statementA: "Open source AI models democratize access and enable safety research by the broader community.",
    statementB: "Open source AI is dangerous as it allows malicious actors to access powerful capabilities without restrictions.",
    sourceA: "Open Tech Channel",
    sourceB: "Security First Channel",
    contextA: "When models are open, thousands of researchers can probe for weaknesses and develop safeguards. Secrecy doesn't equal safety.",
    contextB: "Releasing model weights is like publishing nuclear weapon designs. Some capabilities should never be freely available.",
    timestampA: "7:45",
    timestampB: "11:20",
  },
];

// Comment Excerpts - Raw comments (no counts, no frequency, no interpretation)
export const commentExcerpts = {
  questions: [
    { text: "So should I be worried about AI or not? Every video says something different.", videoSource: "Video A" },
    { text: "Is this the same AI we use in ChatGPT? I'm confused about what exactly is dangerous.", videoSource: "Video B" },
    { text: "If AI is so dangerous, why are they still building it?", videoSource: "Video A" },
    { text: "Which experts should I trust? Both sides have PhDs.", videoSource: "Video B" },
  ],
  videoA: [
    { text: "As someone who works in AI research, I can tell you the alignment problem is very real. We don't fully understand what these systems are doing." },
    { text: "The fact that AI labs are moving this fast while admitting they can't control these systems is genuinely terrifying." },
    { text: "I watched 10 videos on this and I'm more confused than when I started..." },
  ],
  videoB: [
    { text: "Every new technology has had doomsayers. Remember when people thought trains would make cows stop producing milk? This is the same thing." },
    { text: "If we pause, China won't. And then we'll have AI developed by a country with no free press or civil liberties concerns. How is that better?" },
    { text: "One video says AI will cure cancer, the next says it will kill us all. Make it make sense." },
  ],
  phrasesA: [
    "we need to slow down",
    "alignment is unsolved",
    "existential threat",
    "regulate now",
    "safety first",
  ],
  phrasesB: [
    "can't stop progress",
    "fear mongering",
    "China will win",
    "overblown concerns",
    "innovation matters",
  ],
};

export const userInvestigations = [
  {
    id: "demo-ai-regulation",
    title: "AI Regulation: Innovation vs Safety",
    topic: "AI regulation policies 2025",
    createdAt: "2025-12-30T10:00:00Z",
    status: "completed" as const,
    videosSelected: 2,
  },
  {
    id: "inv-2",
    title: "Climate Change Solutions",
    topic: "nuclear energy climate solution",
    createdAt: "2025-12-28T14:30:00Z",
    status: "completed" as const,
    videosSelected: 2,
  },
  {
    id: "inv-3",
    title: "Cryptocurrency Future",
    topic: "bitcoin regulation 2025",
    createdAt: "2025-12-25T09:00:00Z",
    status: "completed" as const,
    videosSelected: 2,
  },
];

export const deepDiveData = {
  "contradiction-1": {
    id: "excerpt-1",
    title: "Speed of AI Development",
    fullAnalysis: {
      summary: "This is a central topic in the AI policy debate, with excerpts from multiple speakers presenting differing viewpoints.",
      historicalContext: "The debate intensified following the public release of GPT-4 in early 2023 and subsequent open letters calling for AI development pauses.",
      stakeholderPositions: [
        { name: "AI Safety Researchers", position: "Support for measured approach" },
        { name: "Major Tech Companies", position: "Varied positions on pace" },
        { name: "Governments", position: "Increasing regulatory interest" },
        { name: "Open Source Community", position: "Diverse views on access vs safety" },
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
      topDebatePoints: [
        "Whether a pause is even enforceable globally",
        "Trade-offs between short-term and long-term risks",
        "Who gets to decide what 'safe enough' means",
      ],
    },
  },
};
