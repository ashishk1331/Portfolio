import Link from "next/link";

export default function (props) {
	return (
		<header className="relative h-flex gap-2 flex-wrap py-4 px-2 mt-4">
			<Link href="/">
				<span>Home</span>
			</Link>
			<span>/</span>
			<Link href="/blog">
				<span>Blog</span>
			</Link>
			<span>/</span>
			<span>{props.slug}</span>
		</header>
	);
}
