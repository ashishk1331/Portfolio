import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

import { Sticker, ShoppingBag , GithubLogo, TShirt } from '@phosphor-icons/react'

export default function Stuff(props){

	let data = [
		{
			"title": "Kanpur Wala",
			"description": "A symbol of being a resident of Kanpur City, situated in Uttar Pradesh, India.",
			"github-url": "https://github.com/hugekontrast",
			"banner-url": "https://github.com/hugekontrast/Portfolio/blob/main/images/mockup/shirt-print.jpg?raw=true",
			"tags": [
				'tshirt',
				'kanpur'
			]
		},
		{
			"title": "San Francisco Sticker",
			"description": "A symbol of being a resident of Kanpur City, situated in Uttar Pradesh, India.",
			"github-url": "https://github.com/hugekontrast",
			"banner-url": "https://raw.githubusercontent.com/hugekontrast/Portfolio/main/images/mockup/Sticker_Mockup.png",
			"tags": [
				'sticker',
				'san francisco'
			]
		}
	]

	return (
		<div className="mx-auto v-flex bg-green rounded-xl overflow-hidden md:m-8 my-12 mt-0 p-4 py-8 md:p-24 pt-0 md:pt-8">
			<SectionTitle 
				logo={<ShoppingBag weight="fill" />}
				title='Stuff'
			/>
			<ul className="grid md:grid-cols-2 gap-4">
				{
					data.map((i, ind) => (
						<Card key={ind+''} {...i} last={data.length - 1 === ind && data.length%2} width="full" logo={<TShirt weight="fill" />}/>
					))
				}
			</ul>
		</div>
	)
}