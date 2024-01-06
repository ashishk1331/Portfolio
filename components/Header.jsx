import Link from "next/link";
import Icon from "./icon_set";
import { twMerge } from "tailwind-merge";
import PeerList from "/public/peerlist.svg";

export default function (props) {
	const N = props.breadcrumbs.length - 1;
	return (
		<>
			<header className="h-flex gap-x-4 px-2 mt-4">
				{props.breadcrumbs.map((label, index) => (
					<>
						<span
							key={index}
							className={twMerge(
								index === N && N > 0 && "mr-auto",
							)}
						>
							{label}
						</span>
						{index < N && <span key={index + "_slash"}>/</span>}
					</>
				))}
				{N === 0 && (
					<Link href="/blog" className="mr-auto">
						<span>Blog</span>
					</Link>
				)}

				<a href="https://twitter.com/AshishK1331">
					<Icon name="Twitter" />
				</a>
				<a href="https://github.com/ashishk1331">
					<Icon name="Github" />
				</a>
				<a href="https://www.linkedin.com/in/ashishk1331/">
					<Icon name="LinkedIn" />
				</a>
				<a href="https://peerlist.io/ashishk1331">
					<img
						src={PeerList.src}
						alt="peerlist logo"
						className="w-8 h-8"
					/>
				</a>
			</header>

			{props.children}

			<hr />
		</>
	);
}
