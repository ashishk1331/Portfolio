"use client";

import Footer from "../components/Footer";
import FlexBox from "../components/FlexBox";
import Hero from "../components/Hero";
import Avatar from "@/components/Avatar";

export type ListItem = {
	itemType: "text" | "node" | "apk" | "image";
	content?: React.ReactNode;
	href?: string;
	src?: string;
	alt?: string;
};

const introduce: ListItem[] = [
	{ itemType: "text", content: "hi" },
	{ itemType: "text", content: "im ashish" },
	{ itemType: "text", content: "let me introduce myself" },
	{
		itemType: "text",
		content:
			"i love making frontend systems with typescript and a pinch of golang. its a shame companies are backing off from go. it is a great langauge.",
	},
	{
		itemType: "text",
		content:
			"and i make machine learning projects as well, and love working with llms and langchain",
	},
	{
		itemType: "node",
		content: (
			<span>
				and participate in{" "}
				<a href="https://www.kaggle.com/ashishk1331">kaggle</a>{" "}
				competitions 😄
			</span>
		),
	},
	{ itemType: "text", content: "systems! systems! systems!" },
	{ itemType: "text", content: "also wanted to point out that" },
	{
		itemType: "image",
		src: "/ai_quote.webp",
		alt: "Quote by Joana",
	},
];

const blogs: ListItem[] = [
	{
		itemType: "text",
		content:
			"ive worked with python 🐍, nextjs, figma and a ton of frontend",
	},
	{
		itemType: "text",
		content:
			"these days i spent my evenings learning about machine learning competitions and why my model doesn't generalize well",
	},
	{ itemType: "text", content: "i can also build apps for mobile" },
	{ itemType: "text", content: "here is a no bs todo app for you" },
	{
		itemType: "apk",
		content: "feather",
		href: "https://feather-website.vercel.app/",
	},
	{ itemType: "text", content: "i also write sometimes" },
	{
		itemType: "node",
		content: (
			<>
				you can read my <a href="/blog">latest blogs here</a>
			</>
		),
	},
];

const social: ListItem[] = [
	{ itemType: "text", content: "im available to talk at" },
	{
		itemType: "node",
		content: (
			<span>
				<a href="https://github.com/ashishk1331">github</a> 😺
			</span>
		),
	},
	{
		itemType: "node",
		content: (
			<span>
				or{" "}
				<a href="https://www.linkedin.com/in/ashishk1331/">linkedin</a>
			</span>
		),
	},
	{
		itemType: "node",
		content: (
			<span>
				or if youre old fashioned, shoot a mail at{" "}
				<a href="mailto:flangdev3000@gmail.com">
					flangdev3000@gmail.com
				</a>
			</span>
		),
	},
];

export default function Home() {
	return (
		<FlexBox
			direction="column"
			className="w-full items-start not-prose text-black transition"
		>
			<Avatar />
			<Hero contents={[introduce, blogs, social]} />
			<Footer />
		</FlexBox>
	);
}
