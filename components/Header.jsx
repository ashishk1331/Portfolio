import Link from "next/link";

export default function (props) {
	return (
		<>
			<header className="h-flex gap-4 mt-4">
				<span>Home</span>
				<Link href="/blog">
					<span>Blog</span>
				</Link>
			</header>

			<hr />
		</>
	);
}
