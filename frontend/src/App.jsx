import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

// Create router configuration with future flags
const routerConfig = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function App() {
  return (
    <Router {...routerConfig}>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="w-full flex justify-center px-4 py-8 flex-grow">
          <div className="w-full lg:w-[70%] md:w-[85%] sm:w-[95%]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
