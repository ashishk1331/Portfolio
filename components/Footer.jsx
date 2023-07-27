import Icon from "@/components/icon_set";

export default function (props) {
	return (
		<footer className="v-flex gap-1 p-4 mt-28 mb-8 text-center">
			<Icon name="ArrowUp" className="w-12 h-12 fill-fore/50" />
			Thank you for visiting!
			<br />
			<div>
				Crafted by{" "}
				<a href="https://twitter.com/ashishk1331">ashishk1331</a>.
			</div>
			<div>
				Hosted on <a href="https://vercel.com/">Vercel</a>.
			</div>
			<div>
				Icons from the{" "}
				<a href="https://phosphoricons.com/">Phosphor Icons</a>.
			</div>
			<div>
				Source code available on{" "}
				<a href="https://github.com/ashishk1331/Portfolio">Github</a>.
			</div>
		</footer>
	);
}
