import { Copyright } from '@phosphor-icons/react'

export default function Footer(props){
	return (
		<footer className="w-full p-4 py-12 mt-12 text-white">
			<div className="w-fit v-flex m-auto text-center">
				<Copyright />
				<h1 className="md:text-xl">
					No rights reserved
					<br />
					by Ashish Khare
				</h1>
			</div>
		</footer>
	)
}