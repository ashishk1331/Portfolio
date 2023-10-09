import Image from "next/image";

function Item({ url, image, name, github, description }) {
	return (
		<li className="flex flex-col items-left px-5 bg-zinc-900 border-2 border-zinc-800 rounded-md md:[&:not(:first-child)]:-ml-24 shadow-xl shadow-zinc-950 md:hover:-translate-y-6 transition-all md:w-[300px]">
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
	/* grid grid-cols-1 sm:grid-cols-2 gap-3 */

	return (
		<ul className="w-full mx-0 my-4 px-0 list-style-none grid grid-cols-1 md:flex gap-3 md:gap-0">
			{props.data.map((item, index) => (
				<Item {...item} key={index + "under"} />
			))}
		</ul>
	);
}
