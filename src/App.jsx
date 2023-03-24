import Intro from './container/Intro'
import Minis from './container/Minis'
import Projects from './container/Projects'
import Stuff from './container/Stuff'
import TweetsContainer from './container/TweetsContainer'
import Footer from './container/Footer'

function App(){
	return (
		<>
			<Intro />
			<TweetsContainer />
			<Stuff />
			<Projects />
			<Minis />
			<Footer/>
		</>
	)
}

export default App