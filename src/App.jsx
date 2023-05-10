import {BrowserRouter} from 'react-router-dom';
import{About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover'>
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Tech />
      <Works />
      <Experience />
      <div className='relative z-o'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App