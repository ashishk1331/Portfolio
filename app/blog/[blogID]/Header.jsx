function transformSlug(slug) {
	return slug.split("").map((text) => <span className="-mx-1">{text}</span>);
}

export default function (props) {
	return (
		<header className="relative h-flex gap-2 flex-wrap py-4 px-2 mt-4">
			<span>Home</span>
			<span>/</span>
			<span>Blog</span>
			<span>/</span>
			{transformSlug(props.slug)}
		</header>
	);
}
