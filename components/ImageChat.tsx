import Image, { type ImageProps } from "next/image";
import { animationRules } from "@/constants/animate";
import { motion } from "framer-motion";

type ImageChatProps = {
	index: number;
} & ImageProps;

export default function ImageChat({ src, alt, index = 0 }: ImageChatProps) {
	return (
		<motion.div
			{...animationRules}
			transition={{ delay: 0.35 * index }}
			className="border rounded-xl bg-neutral-100 overflow-hidden"
		>
			<Image
				src={src}
				width={512}
				height={512}
				alt={alt ?? "Image"}
				className="w-96 aspect-auto object-cover"
			/>
		</motion.div>
	);
}
