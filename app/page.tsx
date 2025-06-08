"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import FlexBox from "../components/FlexBox";
import Hero from "../components/Hero";

const introduce = [
	"hi",
	"im ashish",
	"let me introduce myself",
	"i love making frontend systems with typescript with pinch of golang. its a shame companies are backing off from go. it is a great langauge.",
	"and i make machine learning projects and love working with llms and langchain",
	<span>
		and participate in{" "}
		<a href="https://www.kaggle.com/ashishk1331">kaggle</a> competitions 😄
	</span>,
	"systems! systems! systems!",
];

const blogs = [
	"i also write sometimes",
	<>
		you can catch my <a href="/blog">latest blogs here</a>
	</>,
];

const social = [
	"im available to talk at",
	<span>
		<a href="https://github.com/ashishk1331">github</a> 😺
	</span>,
	<span>
		or <a href="https://www.linkedin.com/in/ashishk1331/">linkedin</a>
	</span>,
	<span>
		or if youre old fashioned, shoot a mail at{" "}
		<a href="mailto:flangdev3000@gmail.com">flangdev3000@gmail.com</a>
	</span>,
];

export default function Home() {
	return (
		<FlexBox
			direction="column"
			className="w-full items-start not-prose text-black transition"
		>
			<FlexBox>
				<Image
					src="/hero_image.png"
					width={128}
					height={128}
					alt="Selfie for ashish."
					className="w-8 h-8 aspect-square rounded-full object-cover"
				/>
				<p className="text-neutral-500">Ashish</p>
			</FlexBox>
			<Hero contents={[introduce, blogs, social]} />
			<Footer />
		</FlexBox>
	);
}
