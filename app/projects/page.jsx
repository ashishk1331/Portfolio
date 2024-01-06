import Icon from "@/components/icon_set";
import Header from "@/components/Header";
import GoBack from "@/components/GoBack";
import Footer from "@/components/Footer";
import PeerList from "/public/peerlist.svg";

import { main } from "@/components/data.js";

export default function (props) {
	return (
		<>
			<Header breadcrumbs={["Home", "Projects"]}>
				<GoBack href="/" />
			</Header>

			<h1 className="mt-16">Projects</h1>
			<p className="lead">
				All hosted projects that I've made. Primarily, I've been fooling
				around with web development only. However, I'm plannning to
				switch gears and craft more exciting pieces of software.
			</p>

			<ul className="w-full mx-0 px-0 list-style-none flex flex-wrap items-center justify-around gap-3 my-24">
				{main.map((item, index) => (
					<Item {...item} key={index + "under"} />
				))}
			</ul>

			<Footer />
		</>
	);
}

function Item({ url, image, name, github, description }) {
	return (
		<li className="flex flex-col items-left px-5 bg-zinc-900 border-2 border-zinc-800 rounded-md shadow-xl shadow-zinc-950 w-full md:w-[300px] aspect-[4/3]">
			<div className="h-flex gap-3">
				<a href={url} className="no-underline h-flex gap-3 mr-auto">
					<img
						src={image.src}
						width={36}
						height={36}
						alt={name}
						className="rounded p-0 m-0"
					/>
					<p className="lead text-white font-normal capitalize">
						{name}
					</p>
				</a>
				{github ? (
					<a href={github}>
						<Icon name="Github" />
					</a>
				) : (
					<Icon name="Lock" />
				)}
			</div>
			<p className="w-full font-thin">{description}</p>
		</li>
	);
}
