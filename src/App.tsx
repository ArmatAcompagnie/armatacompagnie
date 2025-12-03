import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Evenements from './pages/Evenements'
import Equipe from './pages/Equipe'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'
import ScrollToTop from './components/ScrollToTop'


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopNav />
      <main className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<Mentions />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
