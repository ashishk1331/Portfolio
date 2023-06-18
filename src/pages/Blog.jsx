import Header from "../dev/Header";
import Footer from "../dev/Footer";
import List from "../blog/List";
import { blogs } from "../../notion/content/data.json";

export default function () {
	return (
		<div className="container mx-auto p-4 md:p-8">
			<Header />
			<List blogs={blogs} />
			<Footer />
		</div>
	);
}
