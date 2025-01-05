import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Nav from './components/Nav'
import About from './pages/About'
import Donors from './pages/Donors'
import Organizations from './pages/Organizations'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
