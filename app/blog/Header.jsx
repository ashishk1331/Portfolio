import GoBack from "@/components/GoBack";
import Icon from "@/components/icon_set";

export default function (props) {
	return (
		<>
			<header className="relative h-flex gap-4 py-4 px-2 mt-4">
				<span>Home</span>
				<span>/</span>
				<span className="mr-auto">Blog</span>

				<a href="https://twitter.com/AshishK1331">
					<Icon name="Twitter" />
				</a>
				<a href="https://github.com/ashishk1331">
					<Icon name="Github" />
				</a>
				<a href="https://www.linkedin.com/in/ashishk1331/">
					<Icon name="LinkedIn" />
				</a>
			</header>

			<GoBack href="/" />

			<hr />
		</>
	);
}
