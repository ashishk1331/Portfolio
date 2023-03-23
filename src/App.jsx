import Intro from './container/Intro'
import Minis from './container/Minis'
import Projects from './container/Projects'
import Stuff from './container/Stuff'
import Footer from './container/Footer'

function App(){
	return (
		<>
			<Intro />
			<ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 mt-8">
				<Stuff />
				<Projects />
				<Minis />
			</ul>
			<Footer/>
		</>
	)
}

export default App