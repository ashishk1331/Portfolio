import { AndroidLogoIcon } from "@phosphor-icons/react";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { animationRules } from "@/constants/animate";

type APKProps = {
	link: string;
	index: number;
} & PropsWithChildren;

export default function APK({ link, index = 0, children }: APKProps) {
	return (
		<motion.a
			{...animationRules}
			transition={{ delay: 0.35 * index }}
			href={link}
			className="w-32 h-32 aspect-square rounded-xl bg-primary/50 flex flex-col items-center justify-center border border-primary"
		>
			<AndroidLogoIcon size={12} />
			{children}.apk
		</motion.a>
	);
}
