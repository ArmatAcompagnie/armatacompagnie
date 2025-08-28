import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Planning from './pages/Planning'
import Equipe from './pages/Equipe'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'
import Merci from './pages/Merci'




export default function App() {
  return (
    <Router>
      <TopNav />
      <main className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merci" element={<Merci />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
