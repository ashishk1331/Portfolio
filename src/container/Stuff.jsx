import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

import { ShoppingBag , GithubLogo, TShirt } from '@phosphor-icons/react'
import tshirt from '../assets/shirt-print.jpg'

export default function Stuff(props){

	let data = [
		{
			"title": "Kanpur Wala",
			"description": "A symbol of being a resident of Kanpur City, situated in Uttar Pradesh, India.",
			"github-url": "https://github.com/hugekontrast",
			"banner-url":	tshirt,
			"tags": [
				'tshirt',
				'kanpur'
			]
		},
	]

	return (
		<>
			<SectionTitle 
				logo={<ShoppingBag weight="fill" />}
				title='Stuff'
			/>
				{
					data.map((i, ind) => (
						<Card key={ind+''} {...i} logo={<TShirt />}/>
					))
				}

			{/*<div className="w-full h-flex my-8">
				<button className="button-primary mx-auto">view all</button>
			</div>*/}
		</>
	)
}