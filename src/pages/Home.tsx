import DemoPromo from '../components/DemoPromo'
import HomeAbout from '../components/home/HomeAbout'
import HomeCta from '../components/home/HomeCta'
import HomeHero from '../components/home/HomeHero'
import HomeStructuredData from '../components/home/HomeStructuredData'
import HomeUnivers from '../components/home/HomeUnivers'
import HomeUpcomingEvents from '../components/home/HomeUpcomingEvents'
import Meta from '../components/Meta'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <Meta
        title="Spectacles historiques, fantastiques & combats chorégraphiés"
        description="La Compagnie Armata crée des spectacles historiques, fantastiques et de science-fiction :
         combats chorégraphiés, cascades, animations et reconstitutions partout en France."
        path="/"
      />

      <HomeStructuredData />
      <HomeHero />
      <HomeAbout />
      <HomeUnivers />

      <DemoPromo
        videoId="ay_pphQG2fU"
        title="Démo / Bande promo"
        poster="images/logo/logo-master02.jpg"
        subtitle="Extraits de spectacles : antique, médiéval, grand siècle, renaissance et fantastique."
        maxVh={60}
      />

      <HomeUpcomingEvents />
      <HomeCta />
    </>
  )
}