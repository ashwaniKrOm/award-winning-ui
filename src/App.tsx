
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


function App() {
  

  return (
   <main className='relative min-h-screen w-screen overflow-x-hidden antialiased '>
    <Navbar/>
    <Hero/>
    <About/>
    <section className='z-0 min-h-screen bg-blue-500'/>
   </main>
  )
}

export default App
