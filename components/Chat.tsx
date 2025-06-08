import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { ChecksIcon } from "@phosphor-icons/react";
import { format } from "date-fns";
import { animationRules } from "../constants/animate";

export default function Chat({
	index = 0,
	children,
	extra = false,
	extraDate = null,
}: {
	index?: number;
	extra?: boolean;
	extraDate?: string | null;
} & PropsWithChildren) {
	return (
		<>
			<motion.div
				{...animationRules}
				transition={{ delay: 0.35 * index }}
				className="w-fit max-w-sm p-2 border rounded-xl px-4 bg-neutral-100 text-balance"
			>
				{children}
			</motion.div>
			{extra && (
				<motion.span
					key={index + "a"}
					{...animationRules}
					transition={{ delay: 0.35 * index }}
					className="text-xs text-neutral-500 ml-1 flex items-center gap-1"
				>
					<ChecksIcon className="w-4 h-4 text-green-500" />
					{format(new Date(), "h:m aaa")}
				</motion.span>
			)}
			{extraDate && (
				<motion.span
					key={index + "a"}
					{...animationRules}
					transition={{ delay: 0.35 * index }}
					className="text-xs text-neutral-500 ml-1 flex items-center gap-1"
				>
					<ChecksIcon className="w-4 h-4 text-green-500" />
					{extraDate}
				</motion.span>
			)}
		</>
	);
}
