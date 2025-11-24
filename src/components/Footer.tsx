import { Link } from 'react-router-dom'
import { site } from '../site.config'
import { ArmataLogo, IconFacebookSquare, IconInstagramSquare, IconYouTubeSquare } from './Branding'
import './links-styles.css' // pour .social-icon (hover/focus)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-light mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Col 1 : logo + pitch + réseaux (icônes identiques à la nav) */}
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <ArmataLogo />
            </div>
            <p className="text-opacity-75 mb-3">{site.description}</p>

            <div className="d-flex align-items-center gap-2">
              {site.facebook && (
                <a
                  href={site.facebook}
                  className="nav-link p-0 d-inline-flex align-items-center justify-content-center social-icon"
                  target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                >
                  <IconFacebookSquare />
                </a>
              )}
              {site.instagram && (
                <a
                  href={site.instagram}
                  className="nav-link p-0 d-inline-flex align-items-center justify-content-center social-icon"
                  target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                >
                  <IconInstagramSquare />
                </a>
              )}
              {site.youtube && (
                <a
                  href={site.youtube}
                  className="nav-link p-0 d-inline-flex align-items-center justify-content-center social-icon"
                  target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                >
                  <IconYouTubeSquare />
                </a>
              )}
            </div>
          </div>

          {/* Col 2 : contact/adresses */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h6 className="text-uppercase text-opacity-75 mb-3">Contact</h6>
            <ul className="list-unstyled mb-3">
              <li className="mb-1">
                <a className="link-light link-opacity-75-hover" href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="mb-1">
                <span className="text-opacity-75">Siège social :</span><br />
                <address className="mb-0">{site.address}</address>
              </li>
              <li className="mb-1">
                <span className="text-opacity-75">Entraînements :</span><br />
                <address className="mb-0">{site.trainingAddress}</address>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-outline-light btn-sm">Formulaire de contact</Link>
          </div>

          {/* Col 3 : navigation */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h6 className="text-uppercase text-opacity-75 mb-3">Navigation</h6>
            <ul className="list-unstyled">
              <li><Link className="link-light link-opacity-75-hover" to="/">Accueil</Link></li>
              <li><Link className="link-light link-opacity-75-hover" to="/evenements">Événements</Link></li>
              <li><Link className="link-light link-opacity-75-hover" to="/galerie">Galerie</Link></li>
              <li><Link className="link-light link-opacity-75-hover" to="/equipe">Équipe</Link></li>
              <li><Link className="link-light link-opacity-75-hover" to="/mentions-legales" rel="nofollow">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary border-opacity-25 my-4" />
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
          <small className="text-opacity-75">
            © {year} {site.name} — Tous droits réservés · RNA&nbsp;{site.rna} · SIREN&nbsp;{site.siren}
          </small>
          <a  href="#top"
              className="btn btn-outline-light btn-sm"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
          >
            ↑ Haut de page
          </a>
        </div>
      </div>
    </footer>
  )
}
