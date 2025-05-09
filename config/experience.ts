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
    companyName: "swarm",
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
    companyName: "dextra",
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
    id: "PioneerLegend",
    companyName: "PioneerLegend",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "This is the first idle game on SOL or any chain backed by three revenue sources, which include IRL crypto mining, Defi, and Taxes, with rev share to all NFT holders.",
    websiteLink: "https://pioneerlegends.com/",
    companyLogoImg: "/experience/builtdesign/PioneerLegend.png",
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
    companyName: "pump.fun",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
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
    category: ["Ethereum", "Solana"],
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
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "This is the auction platform that users can bid with several spl-tokens and the highest bidder(winner) will be receive the NFT.",
    websiteLink: "https://auction-doge.vercel.app/auction",
    companyLogoImg: "/experience/builtdesign/mausoleum.png",
  },
  {
    id: "metakongz", 
    companyName: "metakongz",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "Unlock passive rewards with NFT staking—seamlessly stake NFTs to earn tokens, boost utility, and enhance engagement in Web3 ecosystems.",
    websiteLink: "https://metakongz-raffle-auction.vercel.app/raffle",
    companyLogoImg: "/experience/builtdesign/metakongz.png",
  },
  {
    id: "animal_pianet",
    companyName: "raffle",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "This is the raffle project that winners can receive the raffle NFT or winners can buy NFTs by half price by buying tickets. You can buy tickets by using $PREY and $SOL.",
    websiteLink: "https://apex-raffle.vercel.app/raffle",
    companyLogoImg: "/experience/builtdesign/animal_pianet.png",
  },
  {
    id: "luvami",
    companyName: "luvami",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "This is the Dice game. The random number will be created in blockchain and compare the system's Dice and user's Dice.",
    websiteLink: "hhttps://dice-game-frontend.vercel.app/",
    companyLogoImg: "/experience/builtdesign/luvami.png",
  },
  {
    id: "tac_staking",
    companyName: "apedao",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "This is the traditional NFT staking project. Users stake their TAC NFTs and receive $BGA token.",
    websiteLink: "hhttps://dice-game-frontend.vercel.app/",
    companyLogoImg: "/experience/builtdesign/tac_staking.png",
  },
  {
    id: "honey",
    companyName: "honey",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "This is one of the big project, I have built NFT lending/borrowing system on Avalanche/Solana. You can lend and borrow NFT from this site and the price comes from the NFT oracle.",
    websiteLink: "hhttps://dice-game-frontend.vercel.app/",
    companyLogoImg: "/experience/builtdesign/honey.png",
  },
  {
    id: "fox",
    companyName: "fox",
    tabval: "Solana",
    type: "Solana",
    category: ["Solana"],
    shortDescription:
      "This is one of the big project, I have built NFT lending/borrowing system on Avalanche/Solana. You can lend and borrow NFT from this site and the price comes from the NFT oracle.",
    websiteLink: "https://foxfinance.io/Marketplace",
    companyLogoImg: "/experience/builtdesign/foxfinance.png",
  },
  {
    id: "pigletz",
    companyName: "Pigletz",
    tabval: "BSC",
    type: "BSC",
    category: ["BSC"],
    shortDescription:
      "Each piglet starts mining PiFi tokens from the day you buy it. You can deposit tokens in your piglet the way you deposit coins in a piggy bank.",
    websiteLink: "https://github.com/PigletzNFT/pigletz-contracts",
    companyLogoImg: "/experience/builtdesign/pigletz.png",
  },
  {
    id: "Bloodoop",
    companyName: "BloodLoop",
    tabval: "BSC",
    type: "BSC",
    category: ["BSC"],
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
    websiteLink: "https://github.com/piterjb/Raydium_sniper",
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
    websiteLink: "https://github.com/piterjb/pumpfun_bundler",
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
    websiteLink: "https://github.com/piterjb/raydium_bundler",
    companyLogoImg: "/experience/builtdesign/raydium_bundler.png",
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
