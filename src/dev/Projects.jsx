"use client";
import feather from "../../images/logos/feather_logo.svg";
import commit from "../../images/logos/commit_logo.svg";
import saturn from "../../images/logos/saturn_logo.svg";
import weather from "../../images/logos/weather_logo.svg";
import pinloader from "../../images/logos/pin_loader_logo.svg";
import urban from "../../images/logos/urban_logo.svg";
import shakespeare from "../../images/logos/shakespeare_logo.svg";
import watched from "../../images/logos/watched_logo.svg";
import hotScore from "../../images/logos/hot_score_logo.svg";

export default function (props) {
	const map = [
		{
			image: urban,
			url: "https://urban-seven.vercel.app/",
		},
		{
			image: feather,
			url: "https://feather-roan.vercel.app/",
		},
		{
			image: saturn,
			url: "https://saturn-sand.vercel.app/",
		},
		{
			image: pinloader,
			url: "https://pin-loader.vercel.app/",
		},
		{
			image: shakespeare,
			url: "https://shakespeare-ipsum.vercel.app/",
		},
		{
			image: watched,
			url: "https://watched-five.vercel.app/",
		}
	];

	const mapTwo = [
		{
			image: hotScore,
			url: "https://hot-score.vercel.app/",
		},
		{
			image: commit,
			url: "https://commit-neon.vercel.app/",
		}
	]

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

			<div className="w-full my-4 flex flex-wrap items-center gap-4">
				{map.map(({ image, url }, index) => (
					<a href={url} key={index + "pro"}>
						<img
							src={image}
							alt="feather"
							className="w-16 h-16 aspect-square rounded-xl shadow-xl cursor-pointer mt-4"
						/>
					</a>
				))}
			</div>

			<p>Under construction area :hammer:</p>

			<div className="w-full my-4 flex flex-wrap items-center gap-4">
				{mapTwo.map(({ image, url }, index) => (
					<a href={url} key={index + "pro"}>
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
