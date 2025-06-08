import { Fragment, ReactNode } from "react";
import Chat from "./Chat";
import Spacer from "./Spacer";

type HeroProps = {
	contents: ReactNode[][];
};

export default function Hero({ contents }: HeroProps) {
	return contents.map((contents, index) => (
		<Fragment key={index}>
			{contents.map((text, index, array) => (
				<Chat
					key={index}
					index={index}
					extra={index === array.length - 1}
				>
					{text}
				</Chat>
			))}
			<Spacer />
		</Fragment>
	));
}
