"use client";

import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import Spacer from "../components/Spacer";
import FlexBox from "../components/FlexBox";

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

const blogs = ["i also write sometimes", "you can my latest blogs like"];

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
			{[introduce, blogs, social].map((contents, index) => (
				<Fragment key={index}>
					{contents.map((text, index, array) => (
						<Chat
							key={index}
							index={index}
							extra={index === array.length - 1}
						>
							{text}
						</Chat>
					))}
					<Spacer />
				</Fragment>
			))}
			<Footer />
		</FlexBox>
	);
}
