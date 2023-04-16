import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

import { Package , GithubLogo } from '@phosphor-icons/react'

import data from '../assets/Projects-data.json'

export default function Projects(props){
	return (
	<div className="mx-auto v-flex bg-green rounded-xl overflow-hidden md:m-8 my-12 mt-0 p-4 py-8 md:p-24 pt-0 md:pt-8">
		<SectionTitle 
			logo={<Package weight="fill" />}
			title='Projects'
		/>
		<ul className="grid md:grid-cols-2 gap-4">

			{
				data.map((i, ind) => (
					<Card key={ind+''} last={data.length - 1 === ind && data.length%2} {...i} />
				))
			}
		</ul>
	</div>
	)
}