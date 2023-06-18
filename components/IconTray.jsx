"use client";
import {
	Circle,
	GithubLogo,
	TwitterLogo,
	SpotifyLogo,
	LinkedinLogo,
} from "@phosphor-icons/react";


export default function IconTray(props) {
	return (
		<div className="h-flex">
			{/*  Github logo  */}
			<a
				href="https://github.com/ashishk1331"
				className="p-3 hover:bg-fore/25 rounded-full"
			>
				<GithubLogo />
			</a>

			{/*  Twitter logo  */}
			<a
				href="https://twitter.com/AshishK1331"
				className="p-3 hover:bg-fore/25 rounded-full"
			>
				<TwitterLogo />
			</a>

			{/*  Spotify logo  */}
			<a
				href="https://open.spotify.com/user/nwo0j3ix1j5mbwl0l3anytu29"
				className="p-3 hover:bg-fore/25 rounded-full"
			>
				<SpotifyLogo />
			</a>

			{/*  Linkedin logo  */}
			<a
				href="https://www.linkedin.com/in/ashishk1331/"
				className="p-3 hover:bg-fore/25 rounded-full"
			>
				<LinkedinLogo />
			</a>
		</div>
	);
}