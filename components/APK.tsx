import { AndroidLogoIcon } from "@phosphor-icons/react";
import { PropsWithChildren } from "react";

type APKProps = {
	link: string;
} & PropsWithChildren;

export default function APK({ link, children }: APKProps) {
	return (
		<a
			href={link}
			className="w-32 h-32 aspect-square rounded-xl bg-primary/75 flex flex-col items-center justify-center border border-primary"
		>
			<AndroidLogoIcon size={12} />
			{children}.apk
		</a>
	);
}
