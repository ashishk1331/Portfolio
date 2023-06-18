"use client";
import AppList from './AppList'

import feather from "@/images/logos/feather_logo.svg";
import commit from "@/images/logos/commit_logo.svg";
import saturn from "@/images/logos/saturn_logo.svg";
import weather from "@/images/logos/weather_logo.svg";
import pinloader from "@/images/logos/pin_loader_logo.svg";
import urban from "@/images/logos/urban_logo.svg";
import shakespeare from "@/images/logos/shakespeare_logo.svg";
import watched from "@/images/logos/watched_logo.svg";
import hotScore from "@/images/logos/hot_score_logo.svg";
import spark from "@/images/logos/Spark_logo.svg";
import flare from "@/images/logos/flare_logo.svg";

export default function (props) {
	const main = [
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
			name: "saturn",
			image: saturn,
			url: "https://saturn-sand.vercel.app/",
			github: "https://github.com/ashishk1331/Saturn",
			description: "A font pairing game that can help you discover and pair weird fonts together."
		},
		{
			name: "pinloader",
			image: pinloader,
			url: "https://pin-loader.vercel.app/",
			github: "https://github.com/ashishk1331/PinLoader",
			description: "A service to download pinterest posts."
		},
		{
			name: "shakespeare",
			image: shakespeare,
			url: "https://shakespeare-ipsum.vercel.app/",
			github: "https://github.com/ashishk1331/shakespeare-ipsum",
			description: "A lorem ipsum generator for the shakespeare lovers."
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

	const mini = [
		{
			name: "spark",
			image: spark,
			url: "https://ashishk1331.github.io/spark/",
			github: "https://github.com/ashishk1331/spark",
			description: "A random word generator for your daily dose inspiration."
		},
		{
			name: "flare",
			image: flare,
			url: "https://ashishk1331.github.io/Flare/",
			github: "https://github.com/ashishk1331/Flare",
			description: "A lighting solution for photography."
		},
	];

	return (
		<section id="projects" className="p-2 mt-12">
			<h1 className="text-4xl">
				<p className="inline text-fore">tailwind</p> is all I need.
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
			

			<p>The :relaxing-man: weekend projects</p>
			<AppList data={mini}/>

		</section>
	);
}