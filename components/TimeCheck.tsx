import { motion } from "framer-motion";
import { animationRules } from "@/constants/animate";
import { format } from "date-fns";
import { ChecksIcon } from "@phosphor-icons/react";

type TimeCheckProps = {
	index: number;
};

export default function TimeCheck({ index }: TimeCheckProps) {
	return (
		<motion.span
			key={index + "a"}
			{...animationRules}
			transition={{ delay: 0.35 * index }}
			className="text-xs text-neutral-500 ml-1 flex items-center gap-1"
		>
			<ChecksIcon className="w-4 h-4 text-green-500" />
			{format(new Date(), "h:m aaa")}
		</motion.span>
	);
}
