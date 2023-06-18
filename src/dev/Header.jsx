"use client";
import {
	Circle,
	GithubLogo,
	TwitterLogo,
	SpotifyLogo,
	CaretDown,
	CaretUp,
	ArrowSquareOut,
	LinkedinLogo,
} from "@phosphor-icons/react";
import image2xl from "../../images/hero/2xl-1536px.png";
import imagexl from "../../images/hero/xl-1280px.png";
import imagelg from "../../images/hero/lg-1024px.png";
import imagemd from "../../images/hero/md-768px.png";
import imagesm from "../../images/hero/sm-640px.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function (props) {
	const [openMenu, setOpenMenu] = useState(false);
	const { pathname } = useResolvedPath();
	let path = pathname.substring(1);
	
	return (
		<>
			{/*  Navigation header  */}
			<header className="relative h-flex py-4 px-2">
				<Circle weight="fill" className="fill-fore animate-pulse" />
				<Link
					to="/"
					className={twMerge(path.length === 0 && "mr-auto")}
				>
					<h1>Home</h1>
				</Link>
				{path.length > 0 && <h1>/</h1>}
				{(path.length === 0 || path === "blog") && (
					<Link to="/blog" className={twMerge(path.length === 0 && "mr-4")}>
						<h1>Blog</h1>
					</Link>
				)}
				{/*{(path.length === 0 || path === "cases") && (
					<Link to="/cases">
						<h1>Cases</h1>
					</Link>
				)}*/}
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
