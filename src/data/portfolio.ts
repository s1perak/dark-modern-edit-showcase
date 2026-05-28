import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";

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
};

/**
 * EDIT THIS FILE to replace videos, thumbnails, titles and descriptions.
 * For YouTube use an embed URL like: https://www.youtube.com/embed/VIDEO_ID
 * For Vimeo: https://player.vimeo.com/video/VIDEO_ID
 * For MP4: direct .mp4 link.
 */
export const projects: Project[] = [
  {
    id: "p1",
    title: "Showreel",
    category: "Showreel",
    thumbnail: thumb1,
    videoUrl: "https://player.vimeo.com/video/1188229541?background=1&autoplay=1&muted=1&loop=0",
    videoType: "vimeo",
    description: "Robert's latest showreel — cinematic edits across film, music and brand work.",
  },
  {
    id: "p2",
    title: "Midnight City",
    category: "Music Video",
    thumbnail: thumb2,
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    videoType: "youtube",
    description: "Rain-soaked streets cut to a pulsing synthwave score.",
  },
  {
    id: "p3",
    title: "Obsidian",
    category: "Commercial",
    thumbnail: thumb3,
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    videoType: "youtube",
    description: "Luxury product spot with macro detail and ambient grading.",
  },
  {
    id: "p4",
    title: "Above The Clouds",
    category: "Travel Reel",
    thumbnail: thumb4,
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    videoType: "youtube",
    description: "Aerial cinematography graded for warmth and depth.",
  },
  {
    id: "p5",
    title: "Silhouette",
    category: "Fashion",
    thumbnail: thumb5,
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    videoType: "youtube",
    description: "Editorial fashion film with rhythmic, hypnotic cuts.",
  },
  {
    id: "p6",
    title: "Live At The Vault",
    category: "Concert",
    thumbnail: thumb6,
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    videoType: "youtube",
    description: "Multicam concert edit synced to a live performance.",
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