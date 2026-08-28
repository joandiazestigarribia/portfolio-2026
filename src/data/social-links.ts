import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { XIcon } from "@/components/icons/x-icon";
import { profile } from "@/data/profile";

export const socialLinks = [
  { label: "GitHub", href: profile.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.social.linkedin, Icon: LinkedinIcon },
  { label: "X", href: profile.social.x, Icon: XIcon },
];
