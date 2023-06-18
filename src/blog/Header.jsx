import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Circle } from "@phosphor-icons/react";
import slugify from "slugify";

export default function (props) {
	return (
		<header className="relative h-flex py-4 px-2">
			<Circle weight="fill" className="fill-fore animate-pulse" />
			<Link to="/">
				<h1>Home</h1>
			</Link>
			<Link to="/blog">
				<h1>/ Blog</h1>
			</Link>
			{props.blogData && (
				<h1>
					/{" "}
					{slugify(props.blogData.title, {
						lower: true,
					})}
				</h1>
			)}
		</header>
	);
}
