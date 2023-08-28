import AppList from "./AppList";
import { main, under, map } from "./data.js";
import Image from "next/image";
import painImage from "@/public/banner.jpeg";

export default function (props) {
	return (
		<>
			<Image
				src={painImage}
				alt="Banner Image"
				placeholder="blur"
				className="rounded-md"
			/>

			<h2>
				<mark>#</mark>
				AshishK has settled.
			</h2>
			<p>Maker of Tetrapack.</p>
			<p>
				Hello everyone! I'm Ashish Khare, an indie web developer and
				computer engineer from India. I love exploring new technologies
				while creating whatever I feel is missing from the puzzle. I'm a
				self-made person in tech who has great friends to help.
			</p>
			<p>
				I usually tweet about what I'm currently hacking. I disapprove
				of the recent transformation of Twitter into X, although the
				underlying social platform is still alive and thriving. Hence,
				all works for me at the end of the day.
			</p>
			<p>
				Contrary to the previous iteration of my portfolio, I added a
				dark theme to it. Blessings for your eyes!
			</p>

			<hr />

			<h2>
				<mark>#</mark>
				Experimental Engineer
			</h2>

			<p>
				Currently, I'm studying about compilers and parsers. Also, I
				picked up Rust to write any of them. It will be my 4th
				programming language, after Java, Python and Javascript. So far,
				it's been astounding and the constructs it supports bring up a
				smile on my face. I'm trying to write a markdown parser in Rust
				to help frameworks like Astro with markdown and faster build
				times.
			</p>
			<p>
				I've also studied React as a framework, including hooks
				implementations, UI patterns and JSX transformations. I want to
				share that beneath every abstraction React is all functions. So,
				think of it as messed up JS and nothing more!
			</p>
			<p>
				For the web apps, I use NextJS, Tailwind CSS and Supabase. I am
				a "Fully Frontend Developer". I also know Zustand, Formik,
				Framer, RTL, Goober and many more libraries.
			</p>
			<p>Things I've build</p>
			<AppList data={main} />

			<p>
				Things that I plan to build in near future. And that future
				never comes.
			</p>
			<AppList data={under} />

			<hr />

			<h2>
				<mark>#</mark>I adore VDOM.
			</h2>

			<p>
				I adore the concept of VDOM and, hence, React. So, I went on a
				journey of studying more about how React works under the hood
				and how magic happens. It is the widely adopted use case of
				Trees, the data structure. I'm impressed.
			</p>

			<p>Here is the list of all the YouTube videos I've watched.</p>
			<AppList data={map} />

			<hr />
		</>
	);
}
