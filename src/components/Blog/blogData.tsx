import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "OpenAI Integration with Go Highlevel",
    paragraph:
      "Leverage OpenAI's tech with Go Highlevel's CRM to boost productivity, enhance customer experience, and stay ahead.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Cymone Ngoma",
      image: "/images/blog/author-01.png",
      designation: "Marketing Strategist",
    },
    tags: ["AI"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Zapier Integration Guide for Lead Conversion",
    paragraph:
      "This guide shows how Zapier boosts lead conversion by automating tasks, streamlining workflows, and increasing productivity.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Eric Koome",
      image: "/images/blog/author-02.png",
      designation: "Software Developer",
    },
    tags: ["zapier"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Top Benefits of GoHighLevel CRM",
    paragraph:
      "Discover how GoHighLevel CRM an all-in-one platform streamlines operations, boosts sales, and helps grow your small business.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Cymone Ngoma",
      image: "/images/blog/author-03.png",
      designation: "Marketing Strategist",
    },
    tags: ["Highlevel"],
    publishDate: "2025",
  },
];
export default blogData;
