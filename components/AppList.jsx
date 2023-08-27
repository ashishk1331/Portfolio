import Image from "next/image";

function Item({ url, image, name, github, description }) {
	return (
		<li className="flex flex-col items-left px-3 bg-zinc-900 border-2 border-zinc-800 rounded-md">
			<a href={url} className="no-underline">
				<div className="h-flex gap-3">
					<Image
						src={image}
						width={36}
						height={36}
						alt={name}
						className="rounded p-0 m-0"
					/>
					<p className="lead text-white font-normal capitalize">
						{name}
					</p>
				</div>
				<p className="w-full font-thin">{description}</p>
			</a>
		</li>
	);
}

export default function (props) {
	return (
		<ul className="w-full mx-0 my-4 px-0 list-style-none grid grid-cols-1 sm:grid-cols-2 gap-3">
			{props.data.map((item, index) => (
				<Item {...item} key={index + "under"} />
			))}
		</ul>
	);
}
