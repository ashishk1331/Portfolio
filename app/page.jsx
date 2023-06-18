import Header from "../components/Header";
import Projects from "../components/Projects";
import Introduction from "../components/Introduction";
import Resources from "../components/Resources";
import Footer from "../components/Footer";

export default function() {
	return (
		<div className="container mx-auto p-4 md:p-8">
			<Header />
			<Introduction />
			<Projects />
			<Resources />
			<Footer />
		</div>
	);
}
