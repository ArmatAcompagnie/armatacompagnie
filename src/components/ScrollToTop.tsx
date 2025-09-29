import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navType = useNavigationType() // 'POP' quand on utilise retour/avant navigateur

  // 1) Nouveau chemin -> remonter en haut (sauf navigation 'POP' pour préserver la position sur retour/avant)
  useEffect(() => {
    if (!hash && navType !== 'POP') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname, hash, navType])

  // 2) Si on a un hash (#section), scroller jusqu’à l’élément une fois qu’il existe dans le DOM
  useEffect(() => {
    if (!hash) return
    const decoded = decodeURIComponent(hash)
    const targetId = decoded.slice(1)

    let tries = 0
    const tryScroll = () => {
      const el = document.getElementById(targetId) || document.querySelector(decoded)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (tries < 10) {
        tries += 1
        setTimeout(tryScroll, 50) // attend un peu que le contenu se monte (images, etc.)
      } else {
        // fallback
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    }
    tryScroll()
  }, [hash])

  return null
}
