import Header from "./dev/Header";
import Projects from "./dev/Projects";
import Introduction from "./dev/Introduction";
import Resources from "./dev/Resources";
import Footer from "./dev/Footer";

function App() {
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

export default App;
