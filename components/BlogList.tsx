"use client";

import { format } from "date-fns";

import { BlogMeta } from "../utils/blog";
import Chat from "./Chat";

type BlogListProps = {
	blogsMeta: BlogMeta[];
};

export default function BlogList({ blogsMeta }: BlogListProps) {
	return (
		<ul className="flex flex-col items-start gap-4">
			{blogsMeta.map((post, index) => (
				<li key={index} className="flex flex-col items-start gap-2">
					<Chat
						index={index + 2}
						extraDate={format(post.pubDate, "yyyy MM")}
					>
						<a href={"/blog/" + post.slug}>{post.title}</a>
					</Chat>
				</li>
			))}
		</ul>
	);
}
