import { TwitterLogo, ArrowSquareOut, ArrowBendDownRight, Circle } from '@phosphor-icons/react'
import { cn } from '../util/cn'
import { motion } from 'framer-motion'

export default function Tweet(props){

	return (
		<motion.div
			initial={{ opacity: 0, y: "25%" }}
        	whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className={cn("bg-black text-white v-flex w-full max-w-[420px] p-8 px-12 rounded-xl overflow-hidden col-start-1 shadow-xl", props.rows === 2 ? "row-span-1 md:row-span-2" : "row-span-1 md:col-start-2" )}
			>
			<div className="tweet-header text-sm h-flex w-full">
				<TwitterLogo weight="fill" className="w-8 h-8" />
				<h1 className="text-gray">
					<p>@AshishK1331</p>
					<p>{props.date}</p>
				</h1>
				<a href={props.tweetLink} className="ml-auto">
					<ArrowSquareOut/>
				</a>
			</div>
			{
				/*
				props.isReply && <div className="h-flex w-full">
					<ArrowBendDownRight size={32} />
					<p className="text-sm text-gray">
						Reply to 
						{' '}
						<a href="#" className="underline">@ShowwcaseHQ</a>
					</p>
				</div>
				*/
			}
			<p className="w-full min-my-4 my-auto md:text-xl">
				{props.body}
			</p>
			<Circle weight="fill" className="fill-green w-4 h-4 mt-8" />
		</motion.div>
	)
}