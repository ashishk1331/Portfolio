"use client";
import {
	Circle,
	GithubLogo,
	TwitterLogo,
	SpotifyLogo,
	CaretDown,
	CaretUp,
	HandWaving,
} from "@phosphor-icons/react";
import image2xl from "../../images/hero/2xl-1536px.png";
import imagexl from "../../images/hero/xl-1280px.png";
import imagelg from "../../images/hero/lg-1024px.png";
import imagemd from "../../images/hero/md-768px.png";
import imagesm from "../../images/hero/sm-640px.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function (props) {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			{/*  Navigation header  */}
			<header className="relative h-flex py-4">
				<Circle weight="fill" className="fill-fore animate-pulse" />
				<h1 className="mr-auto">Home</h1>
				<div className="hidden md:flex items-center gap-4">
					<h1 className="mx-4">Resources</h1>
					<h1>Projects</h1>
				</div>

				<button
					className="md:hidden"
					onClick={(e) => setOpenMenu((prev) => !prev)}
				>
					{openMenu ? <CaretUp /> : <CaretDown />}
				</button>
				{openMenu && (
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0.8, scale: 0.9, y: -20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{
								duration: 0.3,
							}}
							exit={{ opacity: 0, scale: 0.9, y: -20 }}
							className="absolute top-full translate-y-full md:hidden bg-white border-2 border-fore v-flex p-4 rounded-md w-full"
						>
							<h1>Resources</h1>
							<h1>Projects</h1>
						</motion.div>
					</AnimatePresence>
				)}
			</header>

			{/*  Hero Image placement  */}
			<picture>
				<source media="(min-width:1280px)" srcSet={image2xl} />
				<source media="(min-width:1024px)" srcSet={imagexl} />
				<source media="(min-width:768px)" srcSet={imagelg} />
				<source media="(min-width:640px)" srcSet={imagemd} />
				<source srcSet={imagesm} />
				<img
					src={imagesm}
					alt="Flowers"
					className="w-full my-8 2xl:px-20 xl:px-16 lg:px-12"
				/>
			</picture>

			{/*  Icon Tray  */}
			<IconTray />

			{/*  Introduction Section  */}
			<Intro />
		</>
	);
}

function IconTray(props) {
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
		</div>
	);
}

function Intro(props) {
	return (
		<main className="p-2">
			<h1 className="text-4xl">
				<p className="inline text-fore">AshishK</p> is back
			</h1>

			<p>
				:waving-hand:  Hello everyone! I’m Ashish Khare, a indie web developer and
				designer based in India. I usually love studying topics realted
				to data structures like the almighty virtual DOM.
			</p>
			<p>
				I'm that night owl who tweets as well. Personally, I enjoy
				Twitter not only becasue of the great people that reside there
				but also becasue it has a great User Experience, features
				unparallel to any other social site and ofcourse the
				"controvery". :wink:
			</p>
			<p>
				And yes! I deliberately left out the dark mode. :evil-laugh:
			</p>
		</main>
	);
}
