import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

export default function() {
	return (
		<>
			<Header breadcrumbs={["Home"]}/>
			<Intro />
			<Footer />
		</>
	);
}
