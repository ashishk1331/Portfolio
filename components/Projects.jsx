import AppList from './AppList'

import feather from "@/images/logos/feather_logo.svg";
import labels from "@/images/logos/labels_logo.svg";
import emojitar from "@/images/logos/emojitar_logo.svg";
import tetrapack from "@/images/logos/tetrapack_logo.svg";
import commit from "@/images/logos/commit_logo.svg";
import urban from "@/images/logos/urban_logo.svg";
import watched from "@/images/logos/watched_logo.svg";
import hotScore from "@/images/logos/hot_score_logo.svg";

export default function (props) {
	const main = [
		{
			name: "tetrapack",
			image: tetrapack,
			url: "https://tetra-docs.vercel.app/",
			github: "https://github.com/ashishk1331/tetrapack",
			description: "A fast and semantic Notion API data renderer for react projects."
		},
		{
			name: "urban player",
			image: urban,
			url: "https://urban-seven.vercel.app/",
			github: "https://github.com/ashishk1331/urban",
			description: "Listen to your favorites Youtube videos, instead of watching them."
		},
		{
			name: "feather",
			image: feather,
			url: "https://feather-roan.vercel.app/",
			github: "https://github.com/ashishk1331/Feather",
			description: "The no BS daily todo app made with a minimal touch."
		},
		{
			name: "emojitars",
			image: emojitar,
			url: "https://emojitars.super.site/",
			github: "https://github.com/ashishk1331/emojitar",
			description: "An avatar libraray for your next react project."
		},
		{
			name: "labels",
			image: labels,
			url: "https://labels-omega.vercel.app/",
			github: "https://github.com/ashishk1331/labels",
			description: "A fresh take on SVG badges."
		},
		{
			name: "watched",
			image: watched,
			url: "https://watched-five.vercel.app/",
			github: "https://github.com/ashishk1331/watched",
			description: "Create personal list of all the movies you've watched so far."
		},
	];

	const under = [
		{
			name: "hot score",
			image: hotScore,
			url: "https://hot-score.vercel.app/",
			github: "https://github.com/ashishk1331/Hot-Score",
			description: "Increase your follower count by setting goals at Twitter."
		},
		{
			name: "commit",
			image: commit,
			url: "https://commit-neon.vercel.app/",
			github: "https://github.com/ashishk1331/Commit",
			description: "Commit is an web application to build lasting habits."
		},
	];

	return (
		<>
			<h1>
				<mark className="text-primary bg-transparent">tailwind</mark> is all I need.
			</h1>

			<p>
				I love the concept of tailwind, more specifically the J-I-T(Just
				in time) compiler. Well, everything works like magic because
				most the computation is actually handled on the build time. This
				era is of transpilers!
			</p>
			<p>
				Also, the very idea of writing all html, css and js in one file
				is magnificant. Yes, I'm talking about js frameworks. I :heart:
				React.
			</p>
			<p>Things I've build :left-arrow:</p>
			<AppList data={main}/>

			<p>Under construction area :hammer:</p>
			<AppList data={under}/>

		</>
	);
}