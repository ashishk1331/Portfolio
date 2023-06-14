"use client";
import { FinnTheHuman } from "@phosphor-icons/react";

export default function (props) {
	return (
		<footer className="flex flex-col items-center gap-1 p-4 mt-24 mb-8">
			<FinnTheHuman weight="fill" className="w-12 h-12 fill-fore/50" />
			<h3>Thank you for visiting!</h3>
			<h3>
				Crafted by{" "}
				<a
					href="https://twitter.com/ashishk1331"
					className="border-b-2 border-fore/25"
				>
					ashishk1331
				</a>
				.
			</h3>
			<h3>
				Hosted on{" "}
				<a
					href="https://vercel.com/"
					className="border-b-2 border-fore/25"
				>
					Vercel
				</a>
				.
			</h3>
			<h3>
				Icons from the{" "}
				<a
					href="https://phosphoricons.com/"
					className="border-b-2 border-fore/25"
				>
					Phosphor Icons
				</a>
				.
			</h3>
			<h3>
				Source code available on{" "}
				<a
					href="https://github.com/ashishk1331/Portfolio"
					className="border-b-2 border-fore/25"
				>
					Github
				</a>
				.
			</h3>
		</footer>
	);
}
