"use client";

import Image from "next/image";
import FlexBox from "./FlexBox";
import Chat from "./Chat";

export default function BlogTitle() {
	return (
		<>
			<FlexBox>
				<Image
					src="/hero_image.png"
					width={128}
					height={128}
					alt="Selfie for ashish."
					className="w-8 h-8 aspect-square rounded-full object-cover"
				/>
				<p className="text-neutral-500">Ashish</p>
			</FlexBox>
			<Chat index={1}>welcome to my blog section</Chat>
			<Chat index={2}>
				i usually dont write. but sometimes stuff is worth sharing!
			</Chat>
		</>
	);
}
