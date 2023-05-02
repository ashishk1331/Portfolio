import { Circle, GithubLogo, RedditLogo, TwitterLogo, SpotifyLogo, Confetti } from '@phosphor-icons/react'

export default function Intro(props){

	const selfie = "https://github.com/ashishk1331/Portfolio/blob/main/images/intro/hero_halftone.png?raw=true"
	const text = "https://raw.githubusercontent.com/ashishk1331/Portfolio/69a8081678cd3bdd93b9c0f8f9dbacfd6fdbb897/images/intro/circle-text.svg";
	const circle = "https://raw.githubusercontent.com/ashishk1331/Portfolio/69a8081678cd3bdd93b9c0f8f9dbacfd6fdbb897/images/intro/circle-body.svg";

	return (
		<div className="relative mx-auto flex flex-col md:flex-row-reverse bg-green rounded-xl overflow-hidden md:m-8 my-12 mt-0">

			<div className="absolute top-1/2 md:top-8 -translate-x-1/2 md:translate-x-0 left-1/2 -translate-y-full md:translate-y-0 w-36 aspect-square overflow-hidden ">
				<img src={text} alt="" className="absolute top-0 left-0 w-full object-cover animate-spin" style={{ animationDuration: '4s' }} />
				<img src={circle} alt="" className="w-full object-cover" />
			</div>

			<div className="w-full h-screen overflow-hidden">
				<img src={selfie} alt="" className="h-full w-full object-cover" />
			</div>

			<div className="v-flex w-full md:h-screen p-4 px-8 md:mx-12 my-8 md:my-0">
				<div className="m-auto v-flex gap-6">
					<h1 className="text-8xl tracking-tight">
						Ashish Khare is mad!
						<Confetti weight="fill" className="inline w-16 h-16 mb-4 my-auto" />
					</h1>
					<p className="mb-8 text-lg">
						Hello everyone! I’m Ashish Khare, a indie web developer and designer based in India. I envy VDOM creators for thinking a concept like itself. Also, I've been learning about design systems these days.
					</p>

					<div className="h-flex w-full">
						<a href="https://github.com/ashishk1331" className="p-3">
							<GithubLogo weight="fill" />
						</a>
						<a href="https://open.spotify.com/user/nwo0j3ix1j5mbwl0l3anytu29" className="p-3 flex items-center gap-1 w-full">
							<SpotifyLogo weight="fill" className="w-8 h-8" />
							<marquee>listening to <b>The Hills by Weeknd</b></marquee>
						</a>
						<a href="https://twitter.com/intent/tweet?screen_name=AshishK1331&ref_src=twsrc%5Etfw" className=" button-primary ml-auto" data-text="Hey!" data-related="" data-show-count="false">
							<TwitterLogo weight="fill" className="w-16 h-16 aspect-square" />
							<p className="font-medium">Tweet</p>
						</a>
						<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
					</div>
				</div>
			</div>
		</div>
	)
}