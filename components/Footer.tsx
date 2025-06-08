import { captilize } from "../utils/text";

const LINKS = {
	browse: [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Blog",
			href: "/blog",
		},
		// {
		// 	title: "Work",
		// 	href: "/work",
		// },
		// {
		// 	title: "Projects",
		// 	href: "/projects",
		// },
	],
	contact: [
		{
			title: "Email",
			href: "mailto: flangdev3000@gmail.com",
		},
		{
			title: "Github",
			href: "https://github.com/ashishk1331",
		},
		{
			title: "Kaggle",
			href: "https://www.kaggle.com/ashishk1331",
		},
		{
			title: "Leetcode",
			href: "https://leetcode.com/flangdev3000/",
		},
	],
};

export default function Footer() {
	return (
		<footer className="mb-8 mt-auto grid grid-cols-2 gap-8 overflow-hidden py-16 w-full border-t">
			{Object.keys(LINKS).map((key) => (
				<ul key={key} className="space-y-4">
					<span className="text-xs">{captilize(key)}</span>
					{LINKS[key].map(({ title, href }) => (
						<li key={href} className="group">
							<a href={href}>{title}</a>
						</li>
					))}
				</ul>
			))}
		</footer>
	);
}
