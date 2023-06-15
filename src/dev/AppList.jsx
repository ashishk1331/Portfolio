"use client";
import { GithubLogo } from "@phosphor-icons/react";

function Item(props) {
	return (
		<li className="w-full p-4 my-2 border-2 border-fore/50 rounded-xl flex flex-col items-left gap-2">
			<div className="h-flex">
				<a href={props.url} className="h-flex mr-auto">
					<img
						src={props.image}
						alt="feather"
						className="w-16 h-16 aspect-square rounded-xl shadow-xl cursor-pointer"
					/>
					<h2 className="font-bold text-xl uppercase">
						{props.name}
					</h2>
				</a>

				<a
					href={props.github}
					className="p-4 border-2 border-fore/50 rounded-full"
				>
					<GithubLogo />
				</a>
			</div>

			<p>{props.description}</p>
		</li>
	);
}

export default function (props) {
	return (
		<ul className="w-full my-4 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
			{props.data.map((item, index) => (
				<Item {...item} key={index + "under"} />
			))}
		</ul>
	);
}
