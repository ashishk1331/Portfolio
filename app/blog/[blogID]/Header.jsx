import Link from "next/link";

function transformSlug(slug){
	return slug.split("").map(text => <span className="-mx-1">{text}</span>)
}

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
			{transformSlug(props.slug)}
		</header>
	);
}
