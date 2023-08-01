import Icon from "@/components/icon_set";
import Link from "next/link";

export default function (props) {
	return (
		<header className="relative h-flex gap-2 py-4 px-2">
			<Icon name="Home" />
			<Link href="/">
				<p>Home</p>
			</Link>
			<p>/</p>
			<p>Blog</p>
		</header>
	);
}
