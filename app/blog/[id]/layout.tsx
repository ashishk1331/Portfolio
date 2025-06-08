import { PropsWithChildren } from "react";
import Prose from "../../../components/Prose";

export default function BlogLayout({ children }: PropsWithChildren) {
	return <Prose>{children}</Prose>;
}
