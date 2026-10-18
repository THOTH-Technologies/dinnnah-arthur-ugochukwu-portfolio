import { IMG } from "./assets";

export type WorkItem = {
  src: string;
  alt: string;
  title: string;
  tag: string;
  /** width / height of the artwork. Used to reserve space before the image loads. */
  ratio: number;
};

export const CONTACT = {
  email: "arthurdinnah@gmail.com",
  phone: "+234 9012661914",
  phoneHref: "tel:+2349012661914",
  whatsapp: "+234 9087006859",
  whatsappHref: "https://wa.me/2349087006859",
};

const item = (src: string, tag: string, ratio: number): WorkItem => ({ src, alt: "", title: "", tag, ratio });

export const BRANDING: WorkItem[] = [
  item(IMG.brand1, "Branding", 1.395),
  item(IMG.brand2, "Branding", 1.486),
  item(IMG.brand3, "Branding", 1.137),
  item(IMG.pro1, "Branding", 1.313),
  item(IMG.pro2, "Branding", 1),
  item(IMG.pro3, "Branding", 1),
  item(IMG.pro4, "Branding", 0.7),
];

export const SOCIAL: WorkItem[] = [
  item(IMG.sm1, "Social Media", 0.8),
  item(IMG.sm2, "Social Media", 0.77),
  item(IMG.sm3, "Social Media", 0.707),
  item(IMG.sm4, "Social Media", 0.936),
  item(IMG.sm5, "Social Media", 0.695),
  item(IMG.sm6, "Social Media", 1.386),
  item(IMG.sm7, "Social Media", 0.97),
];

export const PRINT: WorkItem[] = [
  item(IMG.print1, "Print", 0.704),
  item(IMG.print2, "Print", 0.707),
  item(IMG.flyers1, "Print", 0.705),
  item(IMG.flyer2, "Print", 0.705),
  item(IMG.flyer3, "Print", 0.705),
  item(IMG.flyer4, "Print", 0.76),
  item(IMG.printMaterials1, "Print", 0.705),
  item(IMG.printMaterials2, "Print", 0.64),
  item(IMG.printMaterials3, "Print", 1.246),
  item(IMG.culturalHangout, "Print", 0.77),
];

export const SKILLS = [
  "Graphic Design",
  "Adobe Creative Suite (Photoshop, Illustrator)",
  "Typography",
  "Branding & Identity",
  "Print Design",
  "Illustration",
  "UI/UX Design (Figma)",
  "Photo Editing",
  "Color Theory",
  "Time Management",
];

export type Job = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

/** Most recent first. */
export const JOBS: Job[] = [
  {
    role: "Freelance Graphic Designer",
    org: "Cultural Hangout Festival Abuja",
    period: "2025",
    points: [
      "Designed event flyers for awareness and grew social media presence by 80%.",
      "Designed and produced banners, brochures and T-shirts, and supported event coordination.",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    org: "Motions Studios",
    period: "2025",
    points: [
      "Designed and printed towels and other materials for the studios.",
      "Designed and printed marketing materials for the studio's social media space.",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    org: "Dodan Foods",
    period: "2025",
    points: [
      "Designed consumer products and their packaging.",
      "Increased the company's visibility through social media ads by 85%.",
      "Designed marketing materials for product campaigns, both on social media and on site.",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    org: "FGN Power Company",
    period: "2024 – 2025",
    points: [
      "Assisted in developing visual concepts and layouts for client projects.",
      "Executed design tasks, including creating logos and social media graphics.",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    org: "Federal Ministry of Health",
    period: "2024",
    points: [
      "Collaborated with the Federal Ministry of Health to design brochures and flyers for health programmes in various states in Nigeria.",
      "Delivered highly engaging, direct designs that help local communities understand the importance of health.",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    org: "Namsi Yoghurt",
    period: "2023",
    points: [
      "Designed the logo and flyers for marketing and social media ads.",
      "Designed and printed stickers for yoghurt bottles and product marketing.",
    ],
  },
  {
    role: "Graphic Designer",
    org: "Rural Electrification Agency",
    period: "2020 – 2021",
    points: [
      "Collaborated with clients to understand design requirements and deliver creative solutions.",
      "Produced engaging, visually appealing designs for various projects, including branding, print materials and digital assets.",
    ],
  },
];

export const STATS = [
  { value: "5", label: "Years of experience" },
  { value: "7", label: "Organisations & brands served" },
  { value: "80%", label: "Social growth — Cultural Hangout" },
  { value: "85%", label: "Visibility growth — Dodan Foods" },
];