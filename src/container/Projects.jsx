import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

import { Package , GithubLogo } from '@phosphor-icons/react'

import data from '../assets/Projects-data.json'

export default function Projects(props){
	return (
	<>
		<SectionTitle 
			logo={<Package weight="fill" />}
			title='Prokects'
		/>

			{
				data.map((i, ind) => (
					<Card key={ind+''} {...i} />
				))
			}

		{/*<div className="w-full h-flex my-8">
			<button className="button-primary mx-auto">view all</button>
		</div>*/}
	</>
	)
}