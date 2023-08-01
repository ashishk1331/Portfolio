import Icon from "@/components/icon_set";
import Image from "next/image";

function Item({ url, image, name, github, description }) {
	return (
		<li className=" flex flex-col items-left [&:not(:last-child)]:mb-8">
			<a href={url} className="h-flex gap-4">
				<Image src={image} width={32} height={32} alt={name} className="rounded p-0 m-0" />
				<p className="lead text-black font-bold">{name}</p>
			</a>
			<p className="lead">{description}</p>
		</li>
	);
}

export default function (props) {
	return (
		<ul className="w-full my-4">
			{props.data.map((item, index) => (
				<Item {...item} key={index + "under"} />
			))}
		</ul>
	);
}
