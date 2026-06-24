import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Achievements } from './components/sections/Achievements'
import { Skills } from './components/sections/Skills'
import { GitHubAnalytics } from './components/sections/GitHubAnalytics'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <GitHubAnalytics />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
