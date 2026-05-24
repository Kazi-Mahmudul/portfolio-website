export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  display?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Kazi-Mahmudul",
    icon: "github",
    display: true
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kazi-mahmudul-hasan",
    icon: "linkedin",
    display: true
  },
  {
    name: "Email",
    url: "mailto:km.hasan.tech@gmail.com",
    icon: "mail",
    display: true
  },
  {
    name: "Resume",
    url: "/resume",
    icon: "file-text",
    display: true
  },
  {
    name: "Phone",
    url: "tel:+8801726190024",
    icon: "phone",
    display: false
  }
];
