export interface Member {
  id: string;
  name: string;
  role: string;
  skills: string[];
  isCoreTeam: boolean;
  twitter?: string;
  bio: string;
}

export const members: Member[] = [
  // Core Team (5 members)
  {
    id: "core-1",
    name: "Luiza Silva",
    role: "Country Lead",
    skills: ["Community", "Marketing"],
    isCoreTeam: true,
    twitter: "https://twitter.com/luiza_sol",
    bio: "Leading Superteam Brazil. Passionate about bringing Web3 to LATAM. Ex-fintech."
  },
  {
    id: "core-2",
    name: "Pedro Santos",
    role: "Head of DevRel",
    skills: ["Dev", "Education"],
    isCoreTeam: true,
    twitter: "https://twitter.com/pedro_dev",
    bio: "Rust developer and educator. Helping builders ship on Solana."
  },
  {
    id: "core-3",
    name: "Mariana Costa",
    role: "Operations Lead",
    skills: ["Community", "Marketing"],
    isCoreTeam: true,
    twitter: "https://twitter.com/mari_ops",
    bio: "Keeping the machine running. Organizing events and bounties."
  },
  {
    id: "core-4",
    name: "Lucas Oliveira",
    role: "Creative Director",
    skills: ["Design", "Content"],
    isCoreTeam: true,
    twitter: "https://twitter.com/lucas_art",
    bio: "Visual storyteller. Designing the future of Web3 brands."
  },
  {
    id: "core-5",
    name: "Fernanda Lima",
    role: "Grants Manager",
    skills: ["Community", "AI"],
    isCoreTeam: true,
    twitter: "https://twitter.com/nanda_grants",
    bio: "Connecting builders with capital. Focused on high-impact projects."
  },
  
  // Members (13 members)
  {
    id: "mem-1",
    name: "Rafael Souza",
    role: "Full Stack Developer",
    skills: ["Dev", "AI"],
    isCoreTeam: false,
    twitter: "https://twitter.com/rafa_code",
    bio: "Building DeFi protocols. Love Hackathons."
  },
  {
    id: "mem-2",
    name: "Beatriz Rocha",
    role: "UI/UX Designer",
    skills: ["Design"],
    isCoreTeam: false,
    twitter: "https://twitter.com/bea_ui",
    bio: "Creating intuitive interfaces for crypto apps."
  },
  {
    id: "mem-3",
    name: "Thiago Alves",
    role: "Content Creator",
    skills: ["Content", "Marketing"],
    isCoreTeam: false,
    twitter: "https://twitter.com/thiago_content",
    bio: "Explaining crypto in simple terms. YouTube & TikTok."
  },
  {
    id: "mem-4",
    name: "Camila Ferreira",
    role: "Community Manager",
    skills: ["Community"],
    isCoreTeam: false,
    twitter: "https://twitter.com/cams_cm",
    bio: "Building engaged communities for NFT projects."
  },
  {
    id: "mem-5",
    name: "Gabriel Martins",
    role: "Rust Engineer",
    skills: ["Dev"],
    isCoreTeam: false,
    twitter: "https://twitter.com/gab_rust",
    bio: "Low-level optimization enthusiast. Solana program developer."
  },
  {
    id: "mem-6",
    name: "Larissa Dias",
    role: "Marketing Specialist",
    skills: ["Marketing", "Content"],
    isCoreTeam: false,
    twitter: "https://twitter.com/lari_mkt",
    bio: "Growth hacking for Web3 startups."
  },
  {
    id: "mem-7",
    name: "Bruno Carvalho",
    role: "Smart Contract Auditor",
    skills: ["Dev", "AI"],
    isCoreTeam: false,
    twitter: "https://twitter.com/bruno_sec",
    bio: "Ensuring security in Solana programs."
  },
  {
    id: "mem-8",
    name: "Juliana Mendes",
    role: "3D Artist",
    skills: ["Design", "Content"],
    isCoreTeam: false,
    twitter: "https://twitter.com/ju_3d",
    bio: "Creating metaverse assets and 3D art."
  },
  {
    id: "mem-9",
    name: "Ricardo Nunes",
    role: "Frontend Developer",
    skills: ["Dev", "Design"],
    isCoreTeam: false,
    twitter: "https://twitter.com/rick_front",
    bio: "React & Next.js wizard. Pixel perfect implementation."
  },
  {
    id: "mem-10",
    name: "Sofia Barbosa",
    role: "Event Organizer",
    skills: ["Community"],
    isCoreTeam: false,
    twitter: "https://twitter.com/sofia_events",
    bio: "Bringing people together IRL. Meetups and conferences."
  },
  {
    id: "mem-11",
    name: "André Silva",
    role: "Data Analyst",
    skills: ["AI", "Dev"],
    isCoreTeam: false,
    twitter: "https://twitter.com/andre_data",
    bio: "On-chain analysis and data visualization."
  },
  {
    id: "mem-12",
    name: "Paula Ramos",
    role: "Copywriter",
    skills: ["Content", "Marketing"],
    isCoreTeam: false,
    twitter: "https://twitter.com/paula_copy",
    bio: "Writing compelling narratives for DAOs."
  },
  {
    id: "mem-13",
    name: "Marcelo Costa",
    role: "Product Manager",
    skills: ["Community", "Dev"],
    isCoreTeam: false,
    twitter: "https://twitter.com/marcelo_pm",
    bio: "Bridging the gap between tech and users."
  }
];
