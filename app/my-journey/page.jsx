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

			<Image src={stickerPanel} alt="All the stickers pasted together." />

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
				After a year of Python and Javascript, Rust feels a little more
				complicated and painful in writing. However, I enjoy some
				features, like expressions vs. statements, the concept of
				ownership and borrowing(pss. it is easier than you think) and
				the fact that there are more than enough ways to handle and
				propagate errors. Sometimes, I even smile while writing Rust. I
				know that I contradicted myself there, but it happens.
			</p>

			<i>I'll write more later. ;)</i>

			<hr />

			<Footer />
		</>
	);
}
