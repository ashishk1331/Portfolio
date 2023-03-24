import { ChatCircleDots } from '@phosphor-icons/react'
import Tweet from '../components/Tweet'
import SectionTitle from '../components/SectionTitle'

export default function TweetsContainer(props){

	return (
		<div className="mx-auto v-flex bg-green rounded-xl overflow-hidden md:m-8 my-12 mt-0 p-4 py-8 md:p-24 pt-0 md:pt-8">
			<SectionTitle 
				logo={<ChatCircleDots weight="fill"/>}
				title='Tweets'
			/>
			<ul className="grid md:grid-rows-2 grid-cols-1 md:grid-cols-2 grid-flow-col gap-4">
				<Tweet rows={2} />
				<Tweet body="in not trying to become a rapper, I’m not getting married, & I’m not pregnant." />
				<Tweet body="in not trying to become a rapper, I’m not getting married, & I’m not pregnant." />
			</ul>
		</div>
	)
}