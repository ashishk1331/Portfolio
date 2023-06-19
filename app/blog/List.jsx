"use client";
import { format } from "date-fns";
import { Circle } from "@phosphor-icons/react";
import Link from "next/link";

export default function (props) {
	return (
		<ul className="flex flex-col items-left gap-4">
			{props.blogs.map((data) => (
				<Item key={data.id} {...data} />
			))}
		</ul>
	);
}

function Item(props) {
	return (
		<li className="mt-8 [&:nth-child(odd)]:border-2 [&:nth-child(odd)]:border-fore/25 rounded-md p-4">
			<Link href={`/blog/${props.id}`}>
				<h1 className="border-b-2 border-fore/50 w-fit cursor-pointer">
					{props.title}
				</h1>
			</Link>
			<p className="text-slate-500">
				written in {format(new Date(props.created_time), "dd MMM yyyy")}
			</p>
			<p>{props.summary}</p>
		</li>
	);
}
