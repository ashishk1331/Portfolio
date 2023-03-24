import Intro from './container/Intro'
import Minis from './container/Minis'
import Projects from './container/Projects'
import Stuff from './container/Stuff'
import Footer from './container/Footer'

import {ThemeProvider, theme} from '@primer/react'
import deepmerge from 'deepmerge'

const customTheme = deepmerge(theme, {
  fonts: {
    mono: `'Roboto Mono', monospace`,
  },
})

function App(){
	return (
		<ThemeProvider theme={customTheme}>
			<Intro />
			<ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 mt-8">
				<Stuff />
				<Projects />
				<Minis />
			</ul>
			<Footer/>
		</ThemeProvider>
	)
}

export default App