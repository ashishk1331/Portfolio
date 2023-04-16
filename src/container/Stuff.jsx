import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import StickerPhoto from "../assets/sticker-square-sf.png";

import { ShoppingBag, TShirt, Sticker } from "@phosphor-icons/react";

export default function Stuff(props) {
	let data = [
		{
			title: "Kanpur Wala",
			description:
				"A symbol of being a resident of Kanpur City, situated in Uttar Pradesh, India.",
			"github-url":
				"https://www.redbubble.com/i/t-shirt/Knapur-Wala-by-hugekontrast/137518466.QUQES",
			"app-url":
				"https://www.redbubble.com/i/t-shirt/Knapur-Wala-by-hugekontrast/137518466.QUQES",
			"banner-url":
				"https://github.com/hugekontrast/Portfolio/blob/main/images/mockup/shirt-print.jpg?raw=true",
			tags: ["tshirt", "kanpur"],
		},
		{
			title: "San Francisco Sticker",
			description: "A simple sticker to show your love for SF.",
			"github-url":
				"https://www.redbubble.com/i/sticker/San-Francisco-sticker-by-hugekontrast/144280192.EJUG5",
			"app-url":
				"https://www.redbubble.com/i/sticker/San-Francisco-sticker-by-hugekontrast/144280192.EJUG5",
			"banner-url": StickerPhoto,
			tags: ["sticker", "san francisco"],
		},
	];

	return (
		<div className="mx-auto v-flex bg-green rounded-xl overflow-hidden md:m-8 my-12 mt-0 p-4 py-8 md:p-24 pt-0 md:pt-8">
			<SectionTitle logo={<ShoppingBag weight="fill" />} title="Stuff" />
			<ul className="grid md:grid-cols-2 gap-4">
				<Card
					{...data[0]}
					width="full"
					logo={<TShirt weight="fill" />}
				/>
				<Card
					{...data[1]}
					width="full"
					logo={<Sticker weight="fill" />}
				/>
			</ul>
		</div>
	);
}
