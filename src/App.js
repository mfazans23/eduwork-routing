import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='px-8 sm:px-12 md:px-16 lg:px-36'>
      <Nav />
      <main className='mt-32 sm:mt-16'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
