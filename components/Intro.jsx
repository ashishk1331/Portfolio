import AppList from "./AppList";
import { main, under, map, coding } from "./data.js";
import Image from "next/image";
import heroImage from "/public/hero_image.jpeg";
import tetrapack from "@/images/logos/tetrapack_logo.svg";
import folder from "../images/logos/folder_routing_logo.svg";
import Icon from "@/components/icon_set";

function Button(props) {
	return (
		<a
			href={"/" + props.url}
			className="w-fit flex items-center gap-3 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-md no-underline float-right"
		>
			<span className="text-white font-normal">{props.title}</span>
			<Icon name="ArrowUp" />
		</a>
	);
}

function Mark(props) {
	const { title, url, logo } = props;
	return (
		<a
			href={url}
			className="p-1 px-1.5 bg-zinc-800 border border-zinc-600 rounded no-underline text-sm m-0"
		>
			<img
				src={logo}
				alt="tetrapack logo"
				className="inline-block w-5 aspect-sqaure mr-1 rounded-full"
			/>
			<span>{title}</span>
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
					className="rounded-md col-span-6 object-cover w-full aspect-[3/5]"
				/>

				<div className="col-span-6">
					<h2 className="mt-0">
						<mark>👋</mark>
						Hello, World!
					</h2>
					<p>
						😉 My name is Ashish Khare and I love to live on the
						dirty side of the web planet, aka the javascript tooling
						world.
					</p>
					<p>
						🎨 I'm a frontend developer and I love to build
						components, libraries and tools for the web.
					</p>
					<p>
						🔥 I'm currently working on{" "}
						<Mark
							url="https://tetra-docs.vercel.app/"
							title="Tetrapack"
							logo={tetrapack.src}
						/>{" "}
						and{" "}
						<Mark
							url="https://folder-routing-website.vercel.app/"
							title="folder-routing"
							logo={folder.src}
						/>
						.
					</p>
					<p>
						🍃 I center my life around topics like VDOM, notion data
						typing, and of course tailwind.
					</p>
					<p>
						🐦 I mostly stay awake at{" "}
						<a href="https://twitter.com/AshishK1331">
							Twitter Inc.
						</a>
					</p>
					<ul>
						<p>My current tech stack includes:</p>
						<li>Javascript, Python</li>
						<li>bs4, flask</li>
						<li>Next.js, Vite.js + Framer Motion</li>
						<li>Zustand</li>
						<li>Tailwind CSS, goober, SCSS</li>
						<li>Supabase, Firebase</li>
						<li>React Testing Library</li>
						<li>ShadCN UI, Radix UI</li>
					</ul>
					<p>
						👟 Well, I know a lot of things and learning more. So,
						follow me to be a part of my journey.
					</p>
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
					<Button url="projects" title="View all projects" />
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
