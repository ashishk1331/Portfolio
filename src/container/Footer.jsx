import { Copyright } from '@phosphor-icons/react'

export default function Footer(props){
	return (
		<footer className="w-full p-4 py-12 mt-12 mb-6 text-white">
			<div className="w-fit v-flex m-auto text-center">
				<Copyright className="w-8 h-8" />
				<h1 className="">
					Hand crafted by Ashish Khare.
					<br />
					Designed in <a href="https://www.figma.com/file/kDUnthgR8RayILLLICxQCI/Portfolio?node-id=0%3A1&t=IkFAXnRmbH9C979R-1" className="border-b-2">Figma</a>.
					<br />
					Hosted on <a href="https://vercel.com/" className="border-b-2">Vercel</a>.
					<br />
					Fabulous icons by <a href="https://phosphoricons.com/" className="border-b-2">Phosphor Icons</a>.
				</h1>
				<p>...</p>
			</div>
		</footer>
	)
}