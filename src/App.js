import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='px-8 sm:px-12 md:px-16 lg:px-36'>
      <Nav />
      <main className='main mt-32 sm:mt-16'>
        <Home />
        <About />
        <Skill />
        <Contact />
      </main>
    </div>
  )
}

export default App
