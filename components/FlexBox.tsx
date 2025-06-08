import { CSSProperties, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { animationRules } from "../constants/animate";
import { twMerge } from "tailwind-merge";

type FlexBoxProps = {
	direction?: CSSProperties["flexDirection"];
	index?: number;
	className?: string;
} & PropsWithChildren;

export default function FlexBox({
	direction = "row",
	className = "",
	index = 0,
	children,
}: FlexBoxProps) {
	return (
		<motion.div
			{...animationRules}
			transition={{ delay: 0.2 * index }}
			className={twMerge(
				"flex items-center gap-2",
				direction === "column" && "flex-col",
				className,
			)}
		>
			{children}
		</motion.div>
	);
}
