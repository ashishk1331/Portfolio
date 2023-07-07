"use client";
import { Circle } from "@phosphor-icons/react";
import Link from "next/link";

export default function (props) {
	return (
		<header className="relative h-flex flex-wrap py-4 px-2 mb-8">
			<Circle weight="fill" className="fill-fore animate-pulse" />
			<Link href="/">
				<h1>Home</h1>
			</Link>
			<h1>/</h1>
			<Link href="/blog">
				<h1>Blog</h1>
			</Link>
			<h1>/</h1>
			<h1>{props.slug}</h1>
		</header>
	);
}
