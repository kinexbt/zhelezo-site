import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  tabval: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  companyLogoImg: any;
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "solana-script",
    companyName: "SolanaSCRIPTS",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana", "Bot"],
    shortDescription:
      "An open-source volume bot written in Node.JS for Raydium. Create fast and cheap volume for your token using JITO.",
    websiteLink: "https://solana-scripts.com/",
    companyLogoImg: "/experience/builtdesign/SolanaScript.png",
  },
  {
    id: "pump_fun",
    companyName: "pump.fun",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana", "Pumpfun"],
    shortDescription:
      "Solana Pump.fun Smart Contract: solana pumpfun smart contract, fork pumpfun frontend, backend, smart contract, pumpfun swap, pumpfun smart contract, fork pumpfun smart contract",
    websiteLink: "https://pump.fun/board",
    companyLogoImg: "/experience/builtdesign/pump_fun.png",
  },
  {
    id: "kingkong",
    companyName: "app.ape",
    tabval: "Solana",
    type: "Solana",
    category: ["Ethereum", "Solana", "Pumpfun"],
    shortDescription:
      "This is pump.fun project on Solana/Ethereum network. Launch a coin that is instantly tradable without having to seed liquidity.",
    websiteLink: "https://app.ape.lol/",
    companyLogoImg: "/experience/builtdesign/Kingkong.png",
  },
  {
    id: "wheel_mc",
    companyName: "wheel_mc",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "This is the wheel game by using $TOKE tokens on Solana. The spin result will be randomized fairly - Lost, 1.2X, 1.5X, 2X, Jackpot. Users can get reward as $TOKE tokens.",
    websiteLink: "https://wheel.mctoken.xyz/",
    companyLogoImg: "/experience/builtdesign/wheel.mctoken.png",
  },
  {
    id: "mausoleum",
    companyName: "Mausoleum",
    tabval: "NFT",
    type: "NFT",
    category: ["NFT"],
    shortDescription:
      "This is the auction platform that users can bid with several spl-tokens and the highest bidder(winner) will be receive the NFT.",
    websiteLink: "https://auction-doge.vercel.app/auction",
    companyLogoImg: "/experience/builtdesign/mausoleum.png",
  },
  {
    id: "metakongz",
    companyName: "metakongz",
    tabval: "NFT",
    type: "NFT",
    category: ["NFT"],
    shortDescription:
      "Unlock passive rewards with NFT staking—seamlessly stake NFTs to earn tokens, boost utility, and enhance engagement in Web3 ecosystems.",
    websiteLink: "https://metakongz-raffle-auction.vercel.app/raffle",
    companyLogoImg: "/experience/builtdesign/metakongz.png",
  },
  {
    id: "animal_pianet",
    companyName: "raffle",
    tabval: "NFT",
    type: "NFT",
    category: ["Solana", "NFT"],
    shortDescription:
      "This is the raffle project that winners can receive the raffle NFT or winners can buy NFTs by half price by buying tickets. You can buy tickets by using $PREY and $SOL.",
    websiteLink: "https://apex-raffle.vercel.app/raffle",
    companyLogoImg: "/experience/builtdesign/animal_pianet.png",
  },
  {
    id: "luvami",
    companyName: "luvami",
    tabval: "NFT",
    type: "NFT",
    category: ["NFT"],
    shortDescription:
      "This is the Dice game. The random number will be created in blockchain and compare the system's Dice and user's Dice.",
    websiteLink: "hhttps://dice-game-frontend.vercel.app/",
    companyLogoImg: "/experience/builtdesign/luvami.png",
  },
  {
    id: "tac_staking",
    companyName: "apedao",
    tabval: "NFT",
    type: "NFT",
    category: ["NFT"],
    shortDescription:
      "This is the traditional NFT staking project. Users stake their TAC NFTs and receive $BGA token.",
    websiteLink: "hhttps://dice-game-frontend.vercel.app/",
    companyLogoImg: "/experience/builtdesign/tac_staking.png",
  },
  {
    id: "honey",
    companyName: "honey",
    tabval: "NFT",
    type: "NFT",
    category: ["NFT"],
    shortDescription:
      "This is one of the big project, I have built NFT lending/borrowing system on Avalanche/Solana. You can lend and borrow NFT from this site and the price comes from the NFT oracle.",
    websiteLink: "hhttps://dice-game-frontend.vercel.app/",
    companyLogoImg: "/experience/builtdesign/honey.png",
  },
  {
    id: "fox",
    companyName: "fox",
    tabval: "NFT",
    type: "NFT",
    category: ["NFT"],
    shortDescription:
      "This is one of the big project, I have built NFT lending/borrowing system on Avalanche/Solana. You can lend and borrow NFT from this site and the price comes from the NFT oracle.",
    websiteLink: "https://foxfinance.io/Marketplace",
    companyLogoImg: "/experience/builtdesign/foxfinance.png",
  },
  {
    id: "uniswap",
    companyName: "uniswap",
    tabval: "Ethereum",
    type: "Ethereum",
    category: ["Ethereum"],
    shortDescription:
      "This repository contains the core smart contracts for the Uniswap V3 Protocol. For higher level contracts, see the uniswap-v3-periphery repository.",
    websiteLink: "https://app.uniswap.org/",
    companyLogoImg: "/experience/builtdesign/uniswap.png",
  },
  {
    id: "polymath",
    companyName: "polymath",
    tabval: "Ethereum",
    type: "Ethereum",
    category: ["Ethereum"],
    shortDescription:
      "The Polymath Core smart contracts provide a system for launching regulatory-compliant securities tokens on a decentralized blockchain.",
    websiteLink: "https://polymath.network/",
    companyLogoImg: "/experience/builtdesign/polymath.png",
  },
  {
    id: "galxe",
    companyName: "galxe",
    tabval: "Ethereum",
    type: "Ethereum",
    category: ["Ethereum"],
    shortDescription:
      "There are multiple opportunities to contribute at any level. It doesn't matter if you are just getting started with Solidity or are the most weathered expert, we can use your help.",
    websiteLink: "https://www.galxe.com/",
    companyLogoImg: "/experience/builtdesign/galxe.png",
  },
  {
    id: "li.fi",
    companyName: "li.fi",
    tabval: "Ethereum",
    type: "Ethereum",
    category: ["Ethereum"],
    shortDescription:
      "One API to swap, bridge, and zap across all major blockchains and protocols. Enable trading across all DEX aggregators, bridges, and intent-systems and save hundreds of developer hours.",
    websiteLink: "https://li.fi/",
    companyLogoImg: "/experience/builtdesign/lifi.png",
  },
  {
    id: "AIFlow",
    companyName: "AIFlow",
    tabval: "AI Agent",
    type: "AI Agent",
    category: ["AI Agent"],
    shortDescription:
      "Deploy scalable, secure AI agents with memory, modularity, multi-modal tasks, and seamless blockchain integration.",
    websiteLink: "https://aiflow.guru/",
    companyLogoImg: "/experience/builtdesign/AIFlow.png",
  },
  {
    id: "bink_AI",
    companyName: "bink AI",
    tabval: "BSC",
    type: "BSC",
    category: ["BSC", "AI Agent"],
    shortDescription:
      "The First DeFAI Transactional Agent on BNB Chain. Tracks market trends, analyzes tickers. Execute swaps, bridge, launch memes, and optimize yield effortlessly",
    websiteLink: "https://bink.ai/",
    companyLogoImg: "/experience/builtdesign/bink_AI.png",
  },
  {
    id: "swarm",
    companyName: "swarm",
    tabval: "AI Agent",
    type: "AI Agent",
    category: ["AI Agent"],
    shortDescription:
      "By combining Web3 technology with advanced AI capabilities through the Swarms framework, it provides institutional-grade insights into significant blockchain movements.",
    websiteLink: "https://swarms.world/",
    companyLogoImg: "/experience/builtdesign/swarm.png",
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
