import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

import { GameController, GithubLogo } from '@phosphor-icons/react'

import data from '../assets/Minis-data.json'

export default function Minis(porps){
	return (
	<>
		<SectionTitle 
			logo={<GameController weight="fill" />}
			title='Minis'
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