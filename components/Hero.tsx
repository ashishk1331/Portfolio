import { Fragment } from "react";
import Chat from "./Chat";
import Spacer from "./Spacer";
import { ListItem } from "@/app/page";
import APK from "./APK";
import ImageChat from "./ImageChat";
import TimeCheck from "./TimeCheck";

type HeroProps = {
	contents: ListItem[][];
};

export default function Hero({ contents }: HeroProps) {
	return contents.map((sub, index) => (
		<Fragment key={index}>
			{sub.map(({ content, itemType, href, src, alt }, index, array) =>
				itemType === "apk" ? (
					<APK index={index} link={href}>
						{content}
					</APK>
				) : itemType === "image" ? (
					<ImageChat src={src} alt={alt} index={index} />
				) : (
					<Chat
						key={index}
						index={index}
						extra={index === array.length - 1}
					>
						{content}
					</Chat>
				),
			)}
			<TimeCheck index={sub.length} />
			<Spacer />
		</Fragment>
	));
}
