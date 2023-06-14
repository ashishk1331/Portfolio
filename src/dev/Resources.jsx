"use client";
import black from "../../images/logos/black_list_logo.svg";
import pro from "../../images/logos/pro_checklist_logo.svg";

export default function (props) {
	const map = [
		{
			image: black,
			url: "https://black-list-delta.vercel.app/",
		},
		{
			image: pro,
			url: "https://pro-checklist.vercel.app/",
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
			<div className="w-full my-4 flex flex-wrap items-center gap-4">
				{map.map(({ image, url }, index) => (
					<a href={url} key={index + "res"}>
						<img
							src={image}
							alt="feather"
							className="w-16 h-16 aspect-square rounded-xl shadow-xl cursor-pointer mt-4"
						/>
					</a>
				))}
			</div>
		</section>
	);
}
