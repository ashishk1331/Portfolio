import { ChatCircleDots } from '@phosphor-icons/react'
import Tweet from '../components/Tweet'
import SectionTitle from '../components/SectionTitle'
import data from '../assets/Tweets-data.json'

export default function TweetsContainer(props){

	return (
		<div className="mx-auto v-flex bg-green rounded-xl overflow-hidden md:m-8 my-12 mt-0 p-4 py-8 md:p-24 pt-0 md:pt-8">
			<SectionTitle 
				logo={<ChatCircleDots weight="fill"/>}
				title='Tweets'
			/>
			<ul className="grid md:grid-rows-2 grid-cols-1 md:grid-cols-2 grid-flow-col gap-4">
				{/*<Tweet rows={2} body="Ah! let's say after whole 2 months of procrastination I've decided to crack the advent of Vue. However, here lies the twist I'll do it in React. Why? Did you ask yourself the same before learning React? Neither did I." />
				<Tweet body="I'd just created a service to update my banner, and they rolled out an update that will be shutting down my service now. 💀" />
				<Tweet body="Creating splash screen animations with 
@framer
 is way way like WAYYYYYY easy." />*/}
				{
					data.map((i, ind) => <Tweet key={i.id} rows={ind === 0 ? 2 : 0} {...i}/>)
				}
			</ul>
		</div>
	)
}