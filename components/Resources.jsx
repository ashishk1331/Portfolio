"use client";
import AppList from "./AppList";

import black from "../images/logos/black_list_logo.svg";

export default function (props) {
	const map = [
		{
			name: "black list",
			image: black,
			url: "https://black-list-delta.vercel.app/",
			github: "https://github.com/ashishk1331/black-list",
			description:
				"All the conference talks I've gone through in order to learn the inner workings of JS frameworks like ReactJS.",
		},
	];

	return (
		<section id="resources" className="p-2 mt-12">
			<h1 className="text-4xl">
				I adore <p className="inline text-fore">VDOM</p>
			</h1>

			<p>
				I love studying patterns and transpilers. Also, I dearly love
				the concept of VDOM because it is the most widely adopted
				by-product of the data structure, the Trees. :inverted-tree:
			</p>

			<p>Resources I'm forging :helping-hand:</p>
			<AppList data={map} />
		</section>
	);
}
