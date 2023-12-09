import AppList from "./AppList";
import { main, under, map, coding } from "./data.js";
import Image from "next/image";
import heroImage from "/public/hero_image.jpeg";
import secondImage from "/public/second_image.jpeg";
import lastImage from "/public/last_image.jpeg";
import Icon from "@/components/icon_set";

function ReadMore() {
	return (
		<a
			href="/my-journey"
			className="w-fit flex items-center gap-3 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-md no-underline"
		>
			<span className="text-white font-normal">About me.</span>
			<Icon name="ArrowUp" />
		</a>
	);
}

function Resume() {
	return (
		<a
			href="/resume"
			className="w-fit flex items-center gap-3 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-md no-underline"
		>
			<span className="text-white font-normal">My resume.</span>
			<Icon name="ArrowUp" />
		</a>
	);
}

function Projects() {
	return (
		<a
			href="/projects"
			className="w-fit flex items-center gap-3 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-md no-underline float-right"
		>
			<span className="text-white font-normal">View all projects</span>
			<Icon name="ArrowUp" />
		</a>
	);
}

export default function (props) {
	return (
		<>
			<div className="grid md:grid-cols-12 grid-cols-1 gap-8 justify-around items-center md:my-24 my-12">
				<Image
					src={heroImage}
					alt="Banner Image"
					className="rounded-md col-span-6 object-cover h-full"
				/>

				<div className="col-span-6">
					<h2 className="mt-0">
						<mark>#</mark>
						AshishK has settled.
					</h2>
					<p>
						Maker of{" "}
						<a
							href="https://tetra-docs.vercel.app/"
							className="inline-block"
						>
							Tetrapack
						</a>
						.
					</p>
					<p>
						Hello everyone! I'm Ashish Khare, an indie web developer
						and computer engineer from India. I love exploring new
						technologies while creating whatever I feel is missing
						from the puzzle.
					</p>
					<p>
						I usually tweet about what I'm currently hacking. I
						disapprove of the recent transformation of Twitter into
						X, although the underlying social platform is still
						alive and thriving. Hence, all works for me at the end
						of the day.
					</p>
					<p>
						Contrary to the previous iteration of my portfolio, I
						added a dark theme to it. Blessings for your eyes!
					</p>

					<div className="flex flex-wrap gap-4 items-center space-between">
						<ReadMore />
						<Resume />
					</div>
				</div>
			</div>

			<div className="grid lg:grid-cols-2 gap-8 justify-around items-center md:my-24 my-12">
				<div>
					<h2>
						<mark>#</mark>
						Experimental Engineer
					</h2>

					<p>
						Currently, I'm studying about compilers and parsers.
						Also, I picked up Rust to write any of them. It will be
						my 4th programming language, after Java, Python and
						Javascript. So far, it's been astounding and the
						constructs it supports bring up a smile on my face. I'm
						trying to write a markdown parser in Rust to help
						frameworks like Astro with markdown and faster build
						times.
					</p>
					<p>
						I've also studied React as a framework, including hooks
						implementations, UI patterns and JSX transformations. I
						want to share that beneath every abstraction React is
						all functions. So, think of it as messed up JS and
						nothing more!
					</p>
					<p>
						For the web apps, I use NextJS, Tailwind CSS and
						Supabase. I am a "Fully Frontend Developer". I also know
						Zustand, Formik, Framer, RTL, Goober and many more
						libraries.
					</p>
				</div>

				<div className="w-full flex flex-col items-left">
					<AppList data={main.slice(0, 4)} />
					<Projects />
				</div>
			</div>

			<div className="grid md:grid-cols-2 gap-8 justify-around items-center md:my-24 my-12">
				<div className="w-full flex flex-col items-left order-last md:order-first">
					<AppList data={map} />
				</div>

				<div>
					<h2>
						<mark>#</mark>I adore VDOM.
					</h2>

					<p>
						I adore the concept of VDOM and, hence, React. So, I
						went on a journey of studying more about how React works
						under the hood and how magic happens. It is the widely
						adopted use case of Trees, the data structure. I'm
						impressed.
					</p>
				</div>
			</div>

			<div className="grid lg:grid-cols-2 gap-8 justify-around items-center md:my-24 my-12">
				<div>
					<h2>
						<mark>#</mark>I live on trees
					</h2>

					<p>
						Indeed, leaving weed aside, I live on trees. Whether
						AVLs or RBs, I love them all. Generally, I solve
						questions on leetcode and have interest for problems
						hosted in events like advent of code.
					</p>

					<p>
						Although, I learnt Rust but it seems a bit intimidating
						so for most of the times I start sketching with Python.
						I've spent around 2 years writing Python so it is my
						second language after Hindi. However, I've pledged to
						write as much as possible Rust. Best way to do something
						is to start doing it, isn't it?
					</p>

					<p>
						Advent of code is my favourite competition for coding
						problems, and this year it got even more tough. I
						recommend coders to try it out!
					</p>
				</div>

				<div className="w-full flex flex-col items-left">
					<AppList data={coding} />
				</div>
			</div>
		</>
	);
}
