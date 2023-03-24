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
		<div className="mx-auto v-flex bg-green rounded-xl overflow-hidden md:m-8 my-12 mt-0 p-4 py-8 md:p-24 pt-0 md:pt-8">
			<SectionTitle 
				logo={<ShoppingBag weight="fill" />}
				title='Stuff'
			/>
				{
					data.map((i, ind) => (
						<Card key={ind+''} {...i} logo={<TShirt weight="fill" />}/>
					))
				}
		</div>
	)
}