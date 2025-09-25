import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-5 py-4 border-top">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} Compagnie Armata — Tous droits réservés</small>
        <p><Link to="/mentions-legales">Mentions légales</Link></p>
      </div>
    </footer>
  )
}
