import Icon from "@/components/icon_set";
import image2xl from "@/images/hero/2xl-1536px.png";
import Link from "next/link"
import Image from "next/image"
import IconTray from "@/components/IconTray"

export default function (props) {

	return (
		<>
			{/*  Navigation header  */}
			<header className="h-flex gap-2">
				<Icon name="Circle" />
				<p className="mr-auto">Home</p>
				<Link href="/blog">
					<p>Blog</p>
				</Link>
			</header>

			{/*  Hero Image placement  */}
			{/*<Image 
				src={image2xl}
				alt="Hero Image"
				className="w-full" // 2xl:px-20 xl:px-16 lg:px-12
				placeholder="blur"
				priority
			/>*/}

			{/*  Icon Tray  */}
			<IconTray />
		</>
	);
}