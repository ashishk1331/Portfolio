import { PropsWithChildren } from "react";
import Footer from "../../components/Footer";

export default function BaseBlogLayout({ children }: PropsWithChildren) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
