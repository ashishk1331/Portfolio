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
		<>
			<h1>
				I adore <mark className="text-primary bg-transparent">VDOM</mark>
			</h1>

			<p>
				I love studying patterns and transpilers. Also, I dearly love
				the concept of VDOM because it is the most widely adopted
				by-product of the data structure, the Trees. :inverted-tree:
			</p>

			<p>Resources I'm forging :helping-hand:</p>
			<AppList data={map} />
		</>
	);
}
