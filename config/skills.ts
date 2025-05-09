import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Solidity",
    description:
      "Develop and deploy secure smart contracts with Solidity, efficient gas optimization, and seamless blockchain integrations.",
    rating: 5,
    icon: Icons.solidity,
  },
  {
    name: "Rust",
    description:
      "Develop fast, reliable, and memory-safe applications with Rust, ensuring high performance and seamless blockchain integration",
    rating: 5,
    icon: Icons.rust,
  },
  {
    name: "OpenAI",
    description:
      "Since Web3 and AI often require interdisciplinary teams, effective collaboration with both blockchain and AI experts is essential",
    rating: 5,
    icon: Icons.openai,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Remix",
    description:
      "Write, test, and deploy Solidity smart contracts effortlessly, leveraging its powerful IDE, debugging tools, and real-time execution environment.",
    rating: 5,
    icon: Icons.remix,
  },
  {
    name: "Docker",
    description:
      "Streamline development and deployment with Docker, enabling containerized applications, scalability, and efficient DevOps workflows.",
    rating: 4,
    icon: Icons.docker,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 4,
    icon: Icons.express,
  },
  {
    name: "PostgreSQL",
    description:
      "Design and optimize scalable databases with PostgreSQL, ensuring high performance, robust queries, and secure data management.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
