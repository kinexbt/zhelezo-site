import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

// interface PagesInfoInterface {
//   title: string;
//   imgArr: string[];
//   description?: string;
// }

// interface DescriptionDetailsInterface {
//   paragraphs: string[];
//   bullets: string[];
// }

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
    id: "mirage_launchpad",
    companyName: "Mirage Launchpad",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "Mirage Launchpad is a decentralized platform that allows users to launch and manage their own token projects on the Solana blockchain.",
    websiteLink: "https://token-launchpad-tzbi.vercel.app/",
    companyLogoImg: "/experience/builtdesign/mirage_launchpad.png",
  },
  {
    id: "mystery_boxes",
    companyName: "Mystery Boxes",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "Mystery Boxes is a decentralized platform that allows users to create and manage their own mystery box NFTs on the Solana blockchain.",
    websiteLink: "https://solanamysterybox.vercel.app/",
    companyLogoImg: "/experience/builtdesign/mystery_boxes.png",
  },
  {
    id: "tokenix",
    companyName: "Tokenix",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "Tokenix is a decentralized platform that allows users to create and manage their own token projects on the Solana blockchain.",
    websiteLink: "https://www.tokenix.finance/",
    companyLogoImg: "/experience/builtdesign/tokenix.png",
  },
  {
    id: "token_launchpad",
    companyName: "Token Launchpad",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "Token Launchpad is a decentralized platform that allows users to launch and manage their own token projects on the Solana blockchain.",
    websiteLink: "https://token-launchpad-tzbi.vercel.app/",
    companyLogoImg: "/experience/builtdesign/token_launchpad.png",
  },
  {
    id: "eventchain",
    companyName: "EventChain",
    tabval: "Solana",
    type: "Solana",

    category: ["Solana"],
    shortDescription:
      "Create memorable events, manage registrations, and reward attendees with unique NFTs. The future of event management is here.",
    websiteLink: "https://eventchain.vercel.app/",
    companyLogoImg: "/experience/builtdesign/eventchain.png",
  },
  {
    id: "Minigame Arena",
    companyName: "Minigame Arena",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "A platform that allows users to create and play mini-games on the Solana blockchain. It provides a simple and easy-to-use interface for creating and playing games.",
    websiteLink: "https://arena.abhiraj0x.me/",
    companyLogoImg: "/experience/builtdesign/minigame_arena.png",
  },
  {
    id: "reavers",
    companyName: "REAVERS",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "Reavers is more than just an idle game at the core. Reavers was engineered with an overarching theme that is as simple as it gets.",
    websiteLink: "https://reavers.xyz/",
    companyLogoImg: "/experience/builtdesign/reavers.png",
  },
  {
    id: "druids",
    companyName: "Druids",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "An innovative solana game, realistic environment for users to evoke their imagination and inspiration to win and overcome all interceptions",
    websiteLink: "https://www.druids.vip/",
    companyLogoImg: "/experience/builtdesign/druids.png",
  },
  {
    id: "solana-script",
    companyName: "SolanaSCRIPTS",
    tabval: "Bot",
    type: "Bot",
    category: ["Solana", "Bot"],
    shortDescription:
      "An open-source volume bot written in Node.JS for Raydium. Create fast and cheap volume for your token using JITO.",
    websiteLink: "https://solana-scripts.com/",
    companyLogoImg: "/experience/builtdesign/SolanaScript.png",
  },
  {
    id: "pump_fun",
    companyName: "Pump.fun",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "Solana Pump.fun Smart Contract: solana pumpfun smart contract, fork pumpfun frontend, backend, smart contract, pumpfun swap, pumpfun smart contract, fork pumpfun smart contract",
    websiteLink: "https://pump.fun/board",
    companyLogoImg: "/experience/builtdesign/pump_fun.png",
  },
  {
    id: "Bloodoop",
    companyName: "BloodLoop",
    tabval: "EVM",
    type: "EVM",
    category: ["EVM"],
    shortDescription:
      "Each piglet starts mining PiFi tokens from the day you buy it. You can deposit tokens in your piglet the way you deposit coins in a piggy bank.",
    websiteLink: "https://www.bloodloop.com/home",
    companyLogoImg: "/experience/builtdesign/bloodloop.png",
  },
  {
    id: "Raydium_Sniper",
    companyName: "Raydium_Sniper",
    tabval: "Bot",
    type: "Bot",
    category: ["Bot"],
    shortDescription:
      " The package includes two main bots: the Raydium Sniper Bot and the Meme Coin Bot. These bots help users efficiently manage their tokens, create markets, and optimize trading strategies.",
    websiteLink: "https://github.com/kinexbt/Raydium_sniper",
    companyLogoImg: "/experience/builtdesign/raydium_bot.png",
  },
  {
    id: "pumpfun_bundler",
    companyName: "Pumpfun Bundler",
    tabval: "Bot",
    type: "Bot",
    category: ["Bot"],
    shortDescription:
      " Pump.fun Bundler and the Meme Coin Launcher. These tools enable users to streamline token launches, bundle transactions effectively, and maximize exposure and execution speed during early trading phases.",
    websiteLink: "https://github.com/kinexbt/pumpfun_bundler",
    companyLogoImg: "/experience/builtdesign/pumpfun_bundler.png",
  },
  {
    id: "raydium_bundler",
    companyName: "Raydium Bundler",
    tabval: "Bot",
    type: "Bot",
    category: ["Bot"],
    shortDescription:
      " The Raydium Bundler streamlines token launch and trading by combining actions into a single, efficient transaction—ideal for executing fast, optimized strategies and managing liquidity with precision.",
    websiteLink: "https://github.com/kinexbt/raydium_bundler",
    companyLogoImg: "/experience/builtdesign/raydium_bundler.png",
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
    companyName: "Bink AI",
    tabval: "AI Agent",
    type: "AI Agent",
    category: ["BSC", "AI Agent"],
    shortDescription:
      "The First DeFAI Transactional Agent on BNB Chain. Tracks market trends, analyzes tickers. Execute swaps, bridge, launch memes, and optimize yield effortlessly",
    websiteLink: "https://bink.ai/",
    companyLogoImg: "/experience/builtdesign/bink_AI.png",
  },
  {
    id: "swarm",
    companyName: "Swarm",
    tabval: "AI Agent",
    type: "AI Agent",
    category: ["AI Agent"],
    shortDescription:
      "By combining Web3 technology with advanced AI capabilities through the Swarms framework, it provides institutional-grade insights into significant blockchain movements.",
    websiteLink: "https://swarms.world/",
    companyLogoImg: "/experience/builtdesign/swarm.png",
  },
  {
    id: "dextra",
    companyName: "Dextra",
    tabval: "AI Agent",
    type: "AI Agent",
    category: ["AI Agent"],
    shortDescription:
      "Solana multi functional AI agent based on Send AI agent-kit, token launch on pump.fun, SPL token swap and send",
    websiteLink: "https://dextra.guru/",
    companyLogoImg: "/experience/builtdesign/dextra.png",
  },
  {
    id: "onyx",
    companyName: "Onyx Protocol",
    tabval: "AI Agent",
    type: "AI Agent",
    category: ["AI Agent"],
    shortDescription:
      "By combining Web3 technology with advanced AI capabilities through the Swarms framework, it provides institutional-grade insights into significant blockchain movements.",
    websiteLink: "https://app.onyx.org/#/stake",
    companyLogoImg: "/experience/builtdesign/onyx.png",
  },
  {
    id: "supply",
    companyName: "Supply Next",
    tabval: "AI Agent",
    type: "AI Agent",
    category: ["AI Agent"],
    shortDescription:
      "By combining Web3 technology with advanced AI capabilities through the Swarms framework, it provides institutional-grade insights into significant blockchain movements.",
    websiteLink: "https://app.supplynext.xyz/",
    companyLogoImg: "/experience/builtdesign/supply.png",
  },
  {
    id: "xrpl_healthcare",
    companyName: "XRPL Healthcare",
    tabval: "XRPL",
    type: "XRPL",
    category: ["XRPL"],
    shortDescription:
      "XRP Healthcare is an AI-driven, M&A-focused healthcare company operating worldwide with a focus on emerging markets.",
    websiteLink: "https://www.xrphealthcare.ai/",
    companyLogoImg: "/experience/builtdesign/xrpl_healthcare.png",
  },
  {
    id: "xrpl_evm_sidechain",
    companyName: "XRPL EVM Sidechain",
    tabval: "XRPL",
    type: "XRPL",
    category: ["XRPL"],
    shortDescription:
      "XRPL EVM Sidechain is a sidechain that allows developers to build and deploy EVM-compatible smart contracts on the XRPL.",
    websiteLink: "https://www.xrplevm.org/",
    companyLogoImg: "/experience/builtdesign/xrpl_evm_sidechain.png",
  },
  {
    id: "apex_2025",
    companyName: "Apex 2025",
    tabval: "XRPL",
    type: "XRPL",
    category: ["XRPL"],
    shortDescription:
      "Apex 2025 is the official global community summit that unites developers, innovators, businesses, and investors for an exciting three-day celebration of blockchain technology",
    websiteLink: "https://www.xrpledgerapex.com/",
    companyLogoImg: "/experience/builtdesign/apex_2025.png",
  },
  {
    id: "trust_wallet",
    companyName: "Trust Wallet",
    tabval: "XRPL",
    type: "XRPL",
    category: ["XRPL"],
    shortDescription:
      "Trust Wallet is a secure, open-source, multi-currency wallet that supports XRP and other cryptocurrencies. It allows users to store, send, and receive XRP and other digital assets.",
    websiteLink: "https://trustwallet.com/xrp-wallet",
    companyLogoImg: "/experience/builtdesign/trust_wallet.png",
  },
  {
    id: "xrp_mining",
    companyName: "XRP Mining",
    tabval: "XRPL",
    type: "XRPL",
    category: ["XRPL"],
    shortDescription:
      "XRP Mining is a platform that allows users to mine XRP and other cryptocurrencies. It provides a simple and easy-to-use interface for mining digital assets.",
    websiteLink: "https://xrpmining.com/xml/index.html#/",
    companyLogoImg: "/experience/builtdesign/xrp_mining.png",
  },
  {
    id: "xrpl_pathfinder",
    companyName: "XRPL Pathfinder",
    tabval: "XRPL",
    type: "XRPL",
    category: ["XRPL"],
    shortDescription:
      "Pathfinder can find the best path to swap token on xrpl-AMM, with maximum speed and efficient price, comprehensive rug check",
    websiteLink: "https://xrpl-pathfinding.netlify.app/",
    companyLogoImg: "/experience/builtdesign/xrpl_pathfinder.png",
  },
  {
    id: "xrpl_account_manager",
    companyName: "XRPL Account Manager",
    tabval: "XRPL",
    type: "XRPL",
    category: ["XRPL"],
    shortDescription:
      "XRPL Account Manager is a simple UI that can manage your XRPL account, including sending and receiving tokens, checking balance, and more",
    websiteLink: "https://xrpl-react.vercel.app/",
    companyLogoImg: "/experience/builtdesign/xrp_account_manager.png",
  },
  {
    id: "xrpl_tradingbot",
    companyName: "XRPL Trading Bot",
    tabval: "XRPL",
    type: "XRPL",
    category: ["XRPL"],
    shortDescription:
      "Multifunctional trading bot that can trade on XRPL AMM, with multiple features such as auto buy/sell, copytrading, AMM sniping, Dollar Cost Average and more",
    websiteLink: "https://t.me/xrpl_goat_bot",
    companyLogoImg: "/experience/builtdesign/xrpl_sniper.png",
  },
  {
    id: "polymath",
    companyName: "Polymath",
    tabval: "EVM",
    type: "EVM",
    category: ["EVM"],
    shortDescription:
      "The Polymath Core smart contracts provide a system for launching regulatory-compliant securities tokens on a decentralized blockchain.",
    websiteLink: "https://polymath.network/",
    companyLogoImg: "/experience/builtdesign/polymath.png",
  },
  {
    id: "galxe",
    companyName: "Galxe",
    tabval: "EVM",
    type: "EVM",
    category: ["EVM"],
    shortDescription:
      "There are multiple opportunities to contribute at any level. It doesn't matter if you are just getting started with Solidity or are the most weathered expert, we can use your help.",
    websiteLink: "https://www.galxe.com/",
    companyLogoImg: "/experience/builtdesign/galxe.png",
  },
  {
    id: "li.fi",
    companyName: "Li.Fi",
    tabval: "EVM",
    type: "EVM",
    category: ["EVM"],
    shortDescription:
      "One API to swap, bridge, and zap across all major blockchains and protocols. Enable trading across all DEX aggregators, bridges, and intent-systems and save hundreds of developer hours.",
    websiteLink: "https://li.fi/",
    companyLogoImg: "/experience/builtdesign/lifi.png",
  },
  
];

export const featuredExperiences = Experiences.slice(0, 3);
