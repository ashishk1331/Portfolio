import { Fragment } from "react";
import Chat from "./Chat";
import Spacer from "./Spacer";
import { ListItem } from "@/app/page";
import APK from "./APK";

type HeroProps = {
	contents: ListItem[][];
};

export default function Hero({ contents }: HeroProps) {
	return contents.map((sub, index) => (
		<Fragment key={index}>
			{sub.map(({ content, itemType, href }, index, array) =>
				itemType === "apk" ? (
					<APK link={href}>{content}</APK>
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
			<Spacer />
		</Fragment>
	));
}
