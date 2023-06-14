"use client";
import {
	Circle,
	GithubLogo,
	TwitterLogo,
	SpotifyLogo,
	CaretDown,
	CaretUp,
	ArrowSquareOut,
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
					<a href="#projects">
						<h1>Projects</h1>
					</a>
					<a href="#resources" className="mx-4">
						<h1>Resources</h1>
					</a>
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
							className="absolute top-full translate-y-full md:hidden bg-white border-2 border-fore flex flex-col items-center gap-6 p-8 rounded-md w-full"
						>
							<a href="#projects" className="h-flex">
								<h1>Projects</h1>
								<ArrowSquareOut />
							</a>
							<a href="#resources" className="mx-4 h-flex">
								<h1>Resources</h1>
								<ArrowSquareOut />
							</a>
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