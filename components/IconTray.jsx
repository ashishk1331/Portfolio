import Icon from "@/components/icon_set";

export default function IconTray(props) {
	return (
		<div className="h-flex">
			{/*  Github logo  */}
			<a
				href="https://github.com/ashishk1331"
				className="p-3 hover:bg-fore/25 rounded-full"
			>
				<Icon name="Github" />
			</a>

			{/*  Twitter logo  */}
			<a
				href="https://twitter.com/AshishK1331"
				className="p-3 hover:bg-fore/25 rounded-full"
			>
				<Icon name="Twitter" />
			</a>

			{/*  Spotify logo  */}
			<a
				href="https://open.spotify.com/user/nwo0j3ix1j5mbwl0l3anytu29"
				className="p-3 hover:bg-fore/25 rounded-full"
			>
				<Icon name="Spotify" />
			</a>

			{/*  Linkedin logo  */}
			<a
				href="https://www.linkedin.com/in/ashishk1331/"
				className="p-3 hover:bg-fore/25 rounded-full"
			>
				<Icon name="LinkedIn" />
			</a>
		</div>
	);
}