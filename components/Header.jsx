import Icon from "@/components/icon_set";
import Link from "next/link"
import IconTray from "@/components/IconTray"

export default function (props) {

	return (
		<>
			<header className="h-flex gap-2">
				<Icon name="Home" />
				<p className="mr-auto">Home</p>
				<Link href="/blog">
					<p>Blog</p>
				</Link>
			</header>

			<IconTray />
		</>
	);
}