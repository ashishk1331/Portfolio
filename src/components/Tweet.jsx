import { TwitterLogo, ArrowSquareOut, ArrowBendDownRight, Circle } from '@phosphor-icons/react'
import { cn } from '../util/cn'
export default function Tweet(props){

	const reply = true

	return (
		<div className={cn("bg-black text-white v-flex w-full max-w-[520px] p-8 px-12 rounded-xl overflow-hidden col-start-1 shadow-xl", props.rows === 2 ? "row-span-1 md:row-span-2" : "row-span-1 md:col-start-2" )}>
			<div className="tweet-header text-sm h-flex w-full">
				<TwitterLogo weight="fill" className="w-8 h-8" />
				<h1 className="text-gray">
					<p>@AshishK1331</p>
					<p>12 May</p>
				</h1>
				<button className="ml-auto">
					<ArrowSquareOut/>
				</button>
			</div>
			{
				reply && <div className="h-flex w-full">
					<ArrowBendDownRight size={32} />
					<p className="text-sm text-gray">
						Reply to 
						{' '}
						<a href="#" className="underline">@ShowwcaseHQ</a>
					</p>
				</div>
			}
			{
				props.body ? 
				<p className="w-full min-my-4 my-auto text-2xl">
					{props.body}
				</p>
				:
				<p className="w-full min-my-4 my-auto text-2xl">
					1. Minimal wages
					<br/>
					2. Frequent burn outs
					<br/>
					3. Self doubts
					<br/>
					4. Maximum screen times
					<br/>
					5. Cut throat competition 
					<br/>

					And 
					<br/>
					6. Freaking close dead line punches.
				</p>
			}
			<Circle weight="fill" className="fill-green w-4 h-4 mt-8" />
		</div>
	)
}