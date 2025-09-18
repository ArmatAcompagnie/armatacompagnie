import { NavLink, Link } from 'react-router-dom'
import './links-styles.css'

const base = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace('//','/')

type LienProps = {
  lien: string
  page: string
  rel?: string
  /** Active exacte pour la home ("/") */
  end?: boolean
}

const Lien = ({ lien, page, rel, end }: LienProps) => {
  return (
    <li className="nav-item">
      <NavLink
        to={page}
        end={end}
        rel={rel}
        className="nav-link nav-lien"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' as const : 'normal' as const,
          color: isActive ? 'yellow' : '',
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        {lien}
      </NavLink>
    </li>
  )
}

const TopNav = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div className="container-fluid">
          {/* Brand (logo → accueil) */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <picture>
              {/* Utilise le SVG si dispo */}
              <source srcSet={base('images/logo/logo_black_sansBordure.svg')} type="image/svg+xml" />
              {/* Fallback PNG 2x si le SVG n'est pas pris en charge */}
              <img
                src={base('images/logo/logo-200_black_sansBordure.png')}
                alt="Compagnie ArmatA"
                height={100}                 // ajuste si tu veux
                style={{ width: 'auto', display: 'block' }}
              />
            </picture>
            <span className="visually-hidden">Compagnie ArmatA</span>
          </Link>


          {/* Burger aligné à droite */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <Lien lien="Accueil" page="/" end />
              <Lien lien="Événements" page="/evenements" />
              <Lien lien="Galerie" page="/galerie" />
              <Lien lien="Équipe" page="/equipe" />
              <Lien lien="Contact" page="/contact" />
              <Lien lien="Mentions légales" page="/mentions-legales" rel="nofollow" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default TopNav
