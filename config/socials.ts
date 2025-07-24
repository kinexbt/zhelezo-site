import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@kinexbt",
    icon: Icons.gitHub,
    link: "https://github.com/kinexbt",
  },
  // {
  //   name: "LinkedIn",
  //   username: "Petter Nilsson",
  //   icon: Icons.linkedin,
  //   link: "https://linkedin.com/in/johnjidev",
  // },
  {
    name: "X",
    username: "@kinexbt",
    icon: Icons.twitter,
    link: "https://x.com/kinexbt",
  },
  {
    name: "Gmail",
    username: "petter.nilsson",
    icon: Icons.gmail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=piter.jb0817@gmail.com",
  },
];
