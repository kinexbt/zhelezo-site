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
    username: "@piterjorbanov",
    icon: Icons.gitHub,
    link: "https://github.com/kinexbt",
  },
  // {
  //   name: "LinkedIn",
  //   username: "Piter Jorbanov",
  //   icon: Icons.linkedin,
  //   link: "https://linkedin.com/in/johnjidev",
  // },
  {
    name: "X",
    username: "@piterjorbanov",
    icon: Icons.twitter,
    link: "https://x.com/lightofdark_000",
  },
  {
    name: "Gmail",
    username: "piter.jorbanov",
    icon: Icons.gmail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=piter.jb0817@gmail.com",
  },
];
