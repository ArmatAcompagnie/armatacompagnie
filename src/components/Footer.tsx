import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-5 py-4 border-top">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} Compagnie ArmatA — Tous droits réservés</small>
        <Link to="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  )
}
