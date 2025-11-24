import { NavLink, Link } from 'react-router-dom'
import './links-styles.css'
import { site } from '../site.config' // ← on lit les URLs ici
import type { SVGProps } from 'react' // pour typer les icônes



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

/** Icônes SVG inline (pas de dépendance externe) */
/** Facebook en bleu #1877F2 (remplit par currentColor) */
function IconFacebookSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden focusable="false" {...props}>
      {/* fond bleu arrondi */}
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#1877F2" />
      {/* f blanc (chemin simplifié, lisible) */}
      <path
        fill="#fff"
        d="M13.5 18.5v-6h2.2l.4-2.5h-2.6v-1c0-.8.3-1.3 1.5-1.3h1.1V5.4c-.5-.1-1.3-.1-2.1-.1-2.3 0-3.8 1.2-3.8 3.7v1.9H8.1V12.5h2.1v6h3.3z"
      />
    </svg>
  )
}



/** Instagram avec dégradé officiel (gradient interne au SVG) */
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  const id = 'igGradient'
  return (
    <svg
      viewBox="0 0 16 16"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      focusable="false"
      {...props}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#f58529" />
          <stop offset="30%"  stopColor="#feda77" />
          <stop offset="50%"  stopColor="#dd2a7b" />
          <stop offset="70%"  stopColor="#8134af" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M8 1.5c2.1 0 2.3 0 3.1.03.7.03 1.1.1 1.4.2.4.1.7.3 1 .6.3.3.5.6.6 1 .1.3.2.7.2 1.4.03.8.03 1 .03 3.1s0 2.3-.03 3.1c-.03.7-.1 1.1-.2 1.4-.1.4-.3.7-.6 1-.3.3-.6.5-1 .6-.3.1-.7.2-1.4.2-.8.03-1 .03-3.1.03s-2.3 0-3.1-.03c-.7-.03-1.1-.1-1.4-.2-.4-.1-.7-.3-1-.6-.3-.3-.5-.6-.6-1-.1-.3-.2-.7-.2-1.4C1.5 10.3 1.5 10.1 1.5 8s0-2.3.03-3.1c.03-.7.1-1.1.2-1.4.1-.4.3-.7.6-1 .3-.3.6-.5 1-.6.3-.1.7-.2 1.4-.2C5.7 1.5 5.9 1.5 8 1.5z"
      />
      <path
        fill="#fff"
        d="M8 3.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zM13.6 3.4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      />
    </svg>
  )
}
/** YouTube – carré rouge + play blanc */
function IconYouTubeSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden focusable="false" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#FF0000" />
      <polygon points="10,8 16,12 10,16" fill="#fff" />
    </svg>
  )
}

const TopNav = () => {
  function closeMenuIfOpen() {
  const toggler = document.querySelector<HTMLButtonElement>(
    '.navbar-toggler[aria-controls="navbarSupportedContent"]'
  )
  const isOpen = toggler?.getAttribute('aria-expanded') === 'true'
  if (toggler && isOpen) toggler.click() // ← simule un clic pour refermer proprement
  }

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
            {/* Liens du site */}
            <ul className="navbar-nav mb-2 mb-lg-0"
            onClick={(e) => {
              const a = (e.target as HTMLElement).closest('a.nav-link')
              if (a) closeMenuIfOpen()
            }}
            >
              <Lien lien="Accueil" page="/" end />
              <Lien lien="Événements" page="/evenements" />
              <Lien lien="Galerie" page="/galerie" />
              <Lien lien="Équipe" page="/equipe" />
              <Lien lien="Contact" page="/contact" />
              <Lien lien="Mentions légales" page="/mentions-legales" rel="nofollow" />
            </ul>

            {/* Réseaux sociaux (icônes à droite et couleurs officielles) */}
            <div className="d-flex align-items-center ms-lg-3 gap-2 mt-2 mt-lg-0">
            {site.facebook && (
              <a
                href={site.facebook}
                className="nav-link p-0 d-inline-flex align-items-center justify-content-center social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook - ouvre dans un nouvel onglet"
                title="Facebook"
              >
                <IconFacebookSquare />
              </a>
            )}
            {site.instagram && (
              <a
                href={site.instagram}
                className="nav-link p-0 d-inline-flex align-items-center justify-content-center social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - ouvre dans un nouvel onglet"
                title="Instagram"
              >
                <IconInstagram />
              </a>
            )}
            {site.youtube && (
              <a
                href={site.youtube}
                className="nav-link p-0 d-inline-flex align-items-center justify-content-center social-icon"
                target="_blank" rel="noopener noreferrer"
                aria-label="YouTube - ouvre dans un nouvel onglet" title="YouTube"
              >
                <IconYouTubeSquare />
              </a>
            )}
          </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default TopNav
