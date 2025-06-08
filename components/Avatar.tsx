"use client";

import Image from "next/image";
import FlexBox from "./FlexBox";

export default function Avatar() {
	return (
		<FlexBox>
			<div className="relative">
				<Image
					src="/hero_image.png"
					width={128}
					height={128}
					alt="Selfie for ashish."
					className="w-8 h-8 aspect-square rounded-full object-cover shadow-xl"
				/>
				<div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-400" />
			</div>
			<p className="text-neutral-500 text-sm">Ashish Khare</p>
		</FlexBox>
	);
}
