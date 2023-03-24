import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

import { GameController, GithubLogo } from '@phosphor-icons/react'

import data from '../assets/Minis-data.json'

export default function Minis(porps){
	return (
		<div className="mx-auto v-flex bg-green rounded-xl overflow-hidden md:m-8 my-12 mt-0 p-4 py-8 md:p-24 pt-0 md:pt-8">
		<SectionTitle 
			logo={<GameController weight="fill" />}
			title='Minis'
		/>
		<ul className="grid md:grid-cols-2 gap-4">
			{
				data.map((i, ind) => (
					<Card key={ind+''} {...i} />
				))
			}
		</ul>
		</div>
	)
}