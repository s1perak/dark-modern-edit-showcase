import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";
import thumbShowreel from "@/assets/thumb-showreel.jpg";

export type Project = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  /** MP4 URL or YouTube/Vimeo embed URL */
  videoUrl: string;
  /** "mp4" | "youtube" | "vimeo" */
  videoType: "mp4" | "youtube" | "vimeo";
  description: string;
  featured?: boolean;
};

/**
 * EDIT THIS FILE to replace videos, thumbnails, titles and descriptions.
 * For YouTube use an embed URL like: https://www.youtube.com/embed/VIDEO_ID
 * For Vimeo: https://player.vimeo.com/video/VIDEO_ID
 * For MP4: direct .mp4 link.
 */
export const projects: Project[] = [
  {
    id: "showreel",
    title: "Cards",
    category: "Featured",
    thumbnail: thumbShowreel,
    videoUrl: "https://player.vimeo.com/video/1200468231?h=3357fe356e&badge=0&title=0&byline=0&portrait=0&dnt=1",
    videoType: "vimeo",
    description: "Two trading UI cards float into frame, backed by sound design that gives every movement its weight.",
    featured: true,
  },
  {
    id: "p1",
    title: "Dennis Schwer",
    category: "YouTube",
    thumbnail: thumb1,
    videoUrl: "https://player.vimeo.com/video/1188229541?background=1&autoplay=1&muted=1&loop=0",
    videoType: "vimeo",
    description: "Experimental motion graphics with a focus on timing, typography, and fluid animation.",
  },
  {
    id: "p2",
    title: "Kraken",
    category: "Explainer Video",
    thumbnail: thumb2,
    videoUrl: "https://player.vimeo.com/video/1188228264?h=b9b05fad68",
    videoType: "vimeo",
    description: "Early test project exploring motion graphics in an explainer-style format.",
  },
  {
    id: "p3",
    title: "Three Steps",
    category: "YouTube",
    thumbnail: thumb3,
    videoUrl: "https://player.vimeo.com/video/1188228261?h=2752f52b0b",
    videoType: "vimeo",
    description: "Motion design sequence illustrating a 3-step workflow using animated cards.",
  },
  {
    id: "p4",
    title: "Strategy",
    category: "YouTube",
    thumbnail: thumb4,
    videoUrl: "https://player.vimeo.com/video/1188229517?h=abcaececf9",
    videoType: "vimeo",
    description: "Motion graphics video using chess pieces to represent strategy and tactical thinking.",
  },
  {
    id: "p5",
    title: "Youtube Link",
    category: "YouTube",
    thumbnail: thumb5,
    videoUrl: "https://player.vimeo.com/video/1188229403?h=1032268499",
    videoType: "vimeo",
    description: "Motion graphics video styled in a YouTube format with a “link in description” call-to-action.",
  },
  {
    id: "p6",
    title: "Counter",
    category: "YouTube",
    thumbnail: thumb6,
    videoUrl: "https://player.vimeo.com/video/1188228227?h=4552d2007d",
    videoType: "vimeo",
    description: "Motion graphics animation featuring a counter with camera movement and sound design.",
  },
];

export const showreelUrl =
  "https://cdn.coverr.co/videos/coverr-cinematic-aerial-shot-of-a-city-at-night-1572/1080p.mp4";

export type Testimonial = {
  name: string;
  company: string;
  avatar: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    company: "Lumen Studios",
    avatar: "https://i.pravatar.cc/120?img=47",
    quote:
      "Robert's edit transformed our footage into something genuinely cinematic. The pacing and color work were on another level.",
  },
  {
    name: "Marcus Reid",
    company: "North Coast Films",
    avatar: "https://i.pravatar.cc/120?img=12",
    quote:
      "Effortless to work with, ruthless with the cut. Every frame feels intentional. We hired him on the spot for project two.",
  },
  {
    name: "Ava Martinez",
    company: "Halo Music",
    avatar: "https://i.pravatar.cc/120?img=32",
    quote:
      "Our music video hit 2M views in a week. Robert understood the song before we even briefed him properly.",
  },
];

export const clientLogos = [
  "NOVA",
  "AURORA",
  "HALO",
  "OBSIDIAN",
  "PRISM",
  "VANTA",
];