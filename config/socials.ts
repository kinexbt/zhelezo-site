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
    link: "https://github.com/piterjb",
  },
  {
    name: "LinkedIn",
    username: "Piter Jorbanov",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/johnji-kratos/",
  },
  {
    name: "X",
    username: "@piterjorbanov",
    icon: Icons.twitter,
    link: "https://x.com/akratos_god",
  },
  {
    name: "Gmail",
    username: "piter.jorbanov",
    icon: Icons.gmail,
    link: "mailto:piter.jb0817@gmail.com?subject=Hello&body=Your message here",
  },
];
