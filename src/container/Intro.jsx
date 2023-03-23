import { GithubLogo, RedditLogo, TwitterLogo, SpotifyLogo } from '@phosphor-icons/react'

import selfie from '../assets/hero_halftone.png'
import logo from '../assets/logo.png'

export default function Intro(props){

	return (
		<div className="container mx-auto flex flex-col md:flex-row-reverse">

			<div className="w-full h-screen overflow-hidden">
				<img src={selfie} alt="" className="h-full w-full object-cover" />
			</div>

			<div className="v-flex w-full md:h-screen p-4 px-8 md:mx-12">
				<div className="m-auto v-flex gap-6">
					<div className="w-full">
						<img src={logo} alt="Octoicon's mention svg" className="w-12 h-12 ml-2" />
					</div>
					<h1 className="text-8xl tracking-tight">
						Ashish Khare is mad!
					</h1>
					<p className="mb-8 text-lg">
						Hello everyone! I’m Ashish Khare, a indie web developer and designer based in India. Basically, writing this from my table. I envy VDOM creators for thinking a concept like itself. Also, you might find me across these places.
					</p>

					<div className="h-flex w-full">
						<a href="https://github.com/hugekontrast" className="p-3">
							<GithubLogo weight="fill"/>
						</a>
						<a href="https://www.reddit.com/user/RetroWard" className="p-3">
							<RedditLogo weight="fill"/>
						</a>
						<a href="https://open.spotify.com/user/nwo0j3ix1j5mbwl0l3anytu29" className="p-3 flex items-center gap-1">
							<SpotifyLogo weight="fill" fill="#1DB954" className="animate-pulse"/>
							<marquee>listening to <b>The Hills by Weeknd</b></marquee>
						</a>
						<a href="https://twitter.com/intent/tweet?screen_name=AshishK1331&ref_src=twsrc%5Etfw" className="twitter-mention-button button-primary ml-auto" data-text="Hey!" data-related="" data-show-count="false">
							<TwitterLogo weight="fill" className="min-w-6 min-h-6" />
							<p className="font-medium">Tweet</p>
						</a>
						<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
					</div>
				</div>
			</div>
		</div>
	)
}