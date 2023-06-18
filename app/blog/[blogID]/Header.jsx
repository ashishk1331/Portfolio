"use client";
import {
	Circle,
} from "@phosphor-icons/react";
import image2xl from "@/images/hero/2xl-1536px.png";
import Link from "next/link"
import Image from "next/image"
import IconTray from "@/components/IconTray"


export default function(props){

	return (
		<>
			{/*  Navigation header  */}
			<header className="relative h-flex py-4 px-2">
				<Circle weight="fill" className="fill-fore animate-pulse" />
				<Link href="/">
					<h1>Home</h1>
				</Link>
				<Link href="/blog">
					<h1>/ Blog</h1>
				</Link>
				<h1>
					/{' ' + props.slug}
				</h1>
			</header>

			{/*  Hero Image placement  */}
			<Image 
				src={image2xl}
				alt="Hero Image"
				className="w-full my-8 2xl:px-20 xl:px-16 lg:px-12"
				placeholder="blur"
				priority
			/>

			{/*  Icon Tray  */}
			<IconTray />
		</>
	)
}