type NavItem = {
  title: string;
  route: string;
  children?: Array<any>;
};

export const NAVS: NavItem[] = [
  {
    title: "About",
    route: "",
    children: [
      {
        title: "Documentation",
        route: "https://docs.palmswap.org/",
        description: "Deep dive into the protocol",
      },
      {
        title: "Blog",
        route: "https://medium.com/@Palmswap",
        description: "Checkout latest News",
      },
      {
        title: "FAQ",
        route: "/faq",
        description: "Helpcenter for general Questions",
      },
      {
        title: "Brand Guidelines",
        route: "#",
        description: "Download logo & branding",
      },
    ],
  },
  {
    title: "Developers",
    route: "",
    children: [
      {
        title: "Github",
        route: "#",
        description: "Codes, dev tools & more",
      },
      {
        title: "Smart Contracts",
        route: "#",
        description: "Check our Smartcontracts",
      },
      {
        title: "Bug Bounty",
        route: "#",
        description: "Hunt Bugs and get rewarded",
      },
    ],
  },
  {
    title: "Token",
    route: "",
    children: [
      {
        title: "Tokenomics",
        route: "#",
        description: "Token use cases & economics",
      },
      {
        title: "Token Specs",
        route: "#",
        description: "Token data and numbers",
      },
    ],
  },
  {
    title: "Community",
    route: "",
    children: [
      {
        title: "Twitter",
        route: "https://twitter.com/Palmswaporg",
        description: "Interact and stay in touch with us",
        icon: "assets/twitter.svg",
      },
      {
        title: "Discord",
        route: "https://discord.com/invite/B2EyhkQSZR",
        description: "Community paradise",
        icon: "assets/discord.svg",
      },
      {
        title: "Medium",
        route: "https://medium.com/@Palmswap",
        description: "The place to gain knowledge",
        icon: "assets/medium.svg",
      },
      {
        title: "Telegram Chat",
        route: "https://t.me/Palmswapchat",
        description: "Meet with other perpetual traders",
        icon: "assets/telegram.svg",
      },
      {
        title: "Telegram Ann",
        route: "https://t.me/PalmswapAnn",
        description: "Don't miss the latest updates",
        icon: "assets/telegram.svg",
      },
    ],
  },
  {
    title: "Careers",
    route: "",
    children: [
      {
        title: "Job Board",
        route: "https://web3.career/web3-companies/palmswap",
        description: "View our open roles",
      },
      {
        title: "Write Us",
        route: "mailto:office@palmswap.org",
        description: "Direct contact to the Team",
      },
    ],
  },
];
