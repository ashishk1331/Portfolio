import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseISO, compareDesc } from "date-fns";

export type BlogMeta = {
  title: string;
  slug: string;
  pubDate: string;
  description: string;
  author: string;
  hasAudio: boolean;
};

const BLOGS_DIR = path.join(process.cwd(), "blogs");

export function getAllBlogs(): BlogMeta[] {
  const files = fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith(".md"));

  const blogs = files.map((filename) => {
    const filePath = path.join(BLOGS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      title: String(data.title),
      slug: data.slug ?? filename.replace(/\.md$/, ""),
      pubDate: String(data.pubDate),
      description: String(data.description),
      author: String(data.author),
      hasAudio: Boolean(data.hasAudio),
      draft: Boolean(data.draft),
    } as BlogMeta;
  });

  return blogs.sort((a, b) =>
    compareDesc(parseISO(a.pubDate), parseISO(b.pubDate)),
  );
}
