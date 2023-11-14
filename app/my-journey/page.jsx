import Link from "next/link";
import Image from "next/image";

import stickerPanel from "@/public/sticker-panel.png";

import Icon from "@/components/icon_set";
import GoBack from "@/components/GoBack";
import Footer from "@/components/Footer";

export default function (props) {
	return (
		<>
			<header className="h-flex gap-4 my-4">
				<span>Home</span>
				<span>/</span>
				<span className="mr-auto">My Journey</span>

				<a href="https://twitter.com/AshishK1331">
					<Icon name="Twitter" />
				</a>
				<a href="https://github.com/ashishk1331">
					<Icon name="Github" />
				</a>
				<a href="https://www.linkedin.com/in/ashishk1331/">
					<Icon name="LinkedIn" />
				</a>
			</header>

			<GoBack href="/" />

			<hr />

			<h1 className="mt-16">My journey so far!</h1>
			<p className="lead">
				Here, I'll share with you all of my achievements and ambitions.
				Yes, it's been a long time since I started. Also, I would have
				been an electronics or embedded engineer if not for computer
				science.
			</p>

			<Image src={stickerPanel} alt="All the stickers pasted together." className="mx-auto" />

			<h2>What I'm doing now?</h2>
			<p>
				I'm grinding through Rust to craft a super-fast and memory-safe
				Markdown Compiler. I aim to help projects like AstroJS to adopt
				a compiler for faster build times. Also I wanted to start with
				any system programming language other than C++.
			</p>
			<p>
				I even set up a sandbox for others to try out{" "}
				<a href="https://frappe-seven.vercel.app/">
					<i>Frappe.</i>
				</a>{" "}
				And yes, I named the project Frappe. Coffe lover found.
			</p>
			<p>
				After a year of Python and Javascript, Rust feels complicated
				and painful to write. However, I enjoy some features, like
				expressions vs. statements, the concept of ownership and
				borrowing(pss. it is easier than you think) and the fact that
				there are more than enough ways to handle and propagate errors.
				Sometimes, I even smile while writing Rust. I know that I
				contradicted myself there, but it happens.
			</p>

			<i>I'll write more later. ;)</i>

			<h2>I love react!</h2>

			<p>
				Two reasons to support my verdict: firstly, the concept of VDOM
				and JSX. Secondly, the ease of crafting reactive UIs after
				functional components skyrocketed my interest in react. I have
				no regrets about my choice. I even created a library called{" "}
				<a href="https://tetra-docs.vercel.app/">Tetra Pack</a> using
				React. Tetra pack converts notion pages to pure HTML tags with
				granular components and style control.
			</p>

			<p>
				Also, the community is pushing the limits to optimize existing
				tools to get the best performance and make coding in React more
				legible. Talk about Zustand, the atomic subscription model
				controls unnecessay re-renders and it also explains the "slice
				of cake" analogy clearly.
			</p>

			<h2>Next step was Next</h2>

			<p>
				Yes, I succumbed to the hype of NextJS. However, I enjoyed it.
				The folder or file based routing, layouts, routers and even
				vercel-og, all made it the only choice for a suitable meta
				framework for react.
			</p>

			<p>
				Only if they switch to a more faster bundler like ViteJS, all
				the lag issues can be solved. <b>Tip:</b> Don't confuse your slow page
				loads with slower compiler when you got decent number of network
				requets on the page. Maybe NextJS should throw a pop up while it
				builds the page in development mode.
			</p>

			<h2>OG says Satori</h2>

			<p>
				Another great library, Satori is used for generating pure SVGs
				from React components. You can create SVGs programmatically.
				Then, pair it with your generative art knowledge and you get a
				great poster collection ready to be sold on Etsy.{" "}
				<i>Shhh! It's a secret between us.</i>
			</p>

			<Footer />
		</>
	);
}
