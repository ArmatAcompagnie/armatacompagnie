import { Container } from 'reactstrap'
import { site } from '../site.config'
import MapPreview from '../components/MapPreview'
import Meta from '../components/Meta'

export default function Mentions() {
  return (
    <Container style={{ paddingTop: '6rem', maxWidth: 900 }}>
    <Meta
        title="Mentions légales"
        description="Mentions légales."
        path="mentions-legales"
    />
      <h1 className="mb-4">Mentions légales</h1>

      <section className="mb-4">
        <h2 className="h4">Éditeur du site</h2>
        <p className="mb-1"><strong>{site.name}</strong> — Association (loi 1901)</p>
        <p className="mb-1">{site.address}</p>
        <p className="mb-1">RNA : {site.rna} — SIREN : {site.siren}</p>
        <p className="mb-1">Email : <a href={`mailto:${site.email}`}>{site.email}</a></p>
        <p className="mb-0">Responsable de la publication : Mr Fleury Loïc.</p>
      </section>

      {site.trainingAddress && (
        <section className="mb-4">
          <h2 className="h4">Lieux d’activité</h2>
          <p className="mb-1">Entraînements : {site.trainingAddress}</p>
          <MapPreview
            query={site.trainingAddress}
            label="Complexe sportif — 4 Rue Raymond Poirier, 28600 Luisant"
            height={360}
          />
          <p className="text-muted mb-0"><small>Important : aucune réception de courrier à cette adresse.</small></p>
        </section>
      )}

      <section className="mb-4">
        <h2 className="h4">Hébergement</h2>
        <p className="mb-1"><strong>GitHub Pages</strong> (GitHub, Inc.)</p>
        <p className="mb-0">Service d’hébergement de pages statiques. Localisation : États-Unis.</p>
      </section>

      <section className="mb-4">
        <h2 className="h4">Conception & développement</h2>
        <p className="mb-0">{site.name} — Site développé en Vite + React. Coordination web : Mr Fleury Loïc.</p>
      </section>

      <section className="mb-4">
        <h2 className="h4">Propriété intellectuelle</h2>
        <p>Le contenu de ce site (textes, images, logos, vidéos), sauf mention contraire, est la propriété de {site.name}.
        Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, est interdite sans autorisation écrite préalable.</p>
        <p>Les marques et contenus tiers demeurent la propriété de leurs titulaires respectifs.</p>
      </section>

      <section className="mb-4">
        <h2 className="h4">Données personnelles</h2>
        <p><strong>Responsable de traitement :</strong> {site.name}</p>
        <p><strong>Finalités :</strong> traitement des demandes via le formulaire de contact (prise de contact, devis, organisation d’événements).</p>
        <p><strong>Base légale :</strong> consentement (case à cocher avant envoi).</p>
        <p><strong>Données traitées :</strong> identité (nom), coordonnées (email), message libre.</p>
        <p><strong>Durée de conservation :</strong> 12 mois à compter du dernier échange, sauf obligation légale contraire.</p>
        <p><strong>Destinataires :</strong> membres habilités de l’association. <strong>Sous-traitants :</strong> Web3Forms (traitement du formulaire), hCaptcha (lutte anti-spam).</p>
        <p><strong>Vos droits :</strong> accès, rectification, effacement, limitation, opposition et portabilité. Pour les exercer : <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez également introduire une réclamation auprès de la CNIL.</p>
      </section>

      <section className="mb-4">
        <h2 className="h4">Cookies & traceurs</h2>
        <p>Ce site ne dépose pas de cookies publicitaires et n’utilise pas de mesure d’audience avec traceurs.</p>
        <p>Le service de sécurité <strong>hCaptcha</strong>, affiché sur la page de contact, peut déposer des traceurs strictement nécessaires à la prévention du spam et des abus. Aucun autre traceur non essentiel n’est utilisé.</p>
      </section>

      <section className="mb-4">
        <h2 className="h4">Liens externes</h2>
        <p>Les liens vers des sites tiers (par ex. réseaux sociaux) sont fournis à titre pratique. {site.name} n’exerce aucun contrôle sur leur contenu et décline toute responsabilité quant à leur disponibilité ou leur légalité.</p>
      </section>

      <section className="mb-4">
        <h2 className="h4">Crédits</h2>
        <p>Photographies : {site.name} et partenaires — sauf mention contraire.</p>
        <p>Vidéos : {site.name} et partenaires — sauf mention contraire.</p>
        <p>Logo : {site.name}.</p>
      </section>

      <section className="mb-5">
        <h2 className="h4">Contact</h2>
        <p>Pour toute question relative au site ou à vos données, écrivez-nous à <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <p className="text-muted">Dernière mise à jour : 03/09/2025</p>
      </section>

      <hr />
      <p className="small text-muted mt-3">
        Ce document est fourni à titre informatif et doit être adapté à la situation de l’association (statuts, n° RNA/SIREN, rôle du responsable de publication, etc.).
      </p>
    </Container>
  )
}
