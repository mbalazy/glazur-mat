import facebookIcon from '../public/facebook.svg'
import ingIcon from '../public/instagram.svg'
import whatsappIcon from '../public/whatsapp.svg'

import gipsIcon from '../public/sys_gips.svg'
import tilesIcon from '../public/tiles.svg'
import plasteringIcon from '../public/plastering.svg'
import paitingIcon from '../public/painting.svg'
import windowIcon from '../public/window.svg'
import floorIcon from '../public/floor.svg'

const businessInfo = {
  fullTitle: 'Glazur-Mat',
  telephones: ['537 911 486'],
  emails: ['kontakt@glazur-mat.pl'],
}

export default businessInfo

export const socials = [
  {
    name: 'facebook',
    icon: facebookIcon,
    link: 'https://www.facebook.com',
  },
  {
    name: 'instagram',
    icon: ingIcon,
    link: 'https://www.instagram.com',
  },
  {
    name: 'whatsapp',
    icon: whatsappIcon,
    link: 'https://www.whatsapp.com',
  },
]
export const offerSubheading =
  'Oferujemy Państwu usługi wykończeniowe i remontowo-budowlane na najwyższym poziomie. Podejmujemy się trudnych zadań, angażujemy się w każdą usługę remontową, a swoją pracę wykonujemy terminowo i solidnie. Specjalizujemy się w nowoczesnych technologiach oraz w kreowaniu estetycznej przestrzeni, w której każdy szczegół ma znaczenie. '

export const offerContet = [
  {
    name: 'Montaż Systemów Gipsowych',
    icon: gipsIcon,
    details: [
      'Podwieszanie sufitów',
      'Sufity wielopoziomowe z podświetleniem LED',
      'Zabudowy nietypowe',
      'Ścianki działowe',
    ],
  },
  {
    name: 'Kafelkowanie',
    icon: tilesIcon,
    details: ['Ceramika', 'Gres', 'Beton dekoracyjny', 'Cegła dekoracyjna', 'Mozaika', 'Klinkier'],
  },
  {
    name: 'Gładź Tynki Posadzki',
    icon: plasteringIcon,
    details: [
      'Gładzie',
      'Suche tynki',
      'Kamienne dywany',
      'Posadzki żywiczne',
      'Posadzki samopoziomujące',
    ],
  },
  {
    name: 'Malowanie Tapetowanie',
    icon: paitingIcon,
    details: [
      'Malowanie farbami lateksowymi, akrylowymi, ceramicznymi',
      'Malowanie elewacji, drewna i stali',
      'Tapetowanie',
      'Tynki dekoracyjne',
      'Montaż sztukaterii',
    ],
  },
  {
    name: 'Okna i Drzwi',
    icon: windowIcon,
    details: [
      'Montaż drzwi wewnętrznych i zewnętrznych',
      'Montaż okien',
      'Montaż drzwi przesuwnych',
      'Montaż drzwi system ukrytych ościeżnic',
    ],
  },
  {
    name: 'Podłogi',
    icon: floorIcon,
    details: [
      'Montaż paneli drewnianych oraz winylowych',
      'Montaż desek podłogowych',
      'Montaż cokołów i listew przypodłogowych',
    ],
  },
]

export const testimonials = [
  {
    name: 'Hiacynta',
    testimonial:
      'Szefa Firmy, i co dla Nas było ważne porządek w trakcie oraz po zakończeniu robót. Mierząc się z wyzwaniem budowy domu, nawet się postarał.',
    rating: 5,
  },
  {
    name: 'Stanislaw',
    testimonial:
      'Reasumując: solidność, kreatywność, empatia do inwestora,i co dla Nas było ważne porządek w trakcie oraz po zakończeniu robót. Mierząc się z wyzwaniem budowy domu, nawet się postarał.',
    rating: 5,
  },
  {
    name: 'Jerzy',
    testimonial:
      'Firma p. Janusza budowała dom na sąsiedniej działce. Podobał nam się sposób jej prowadzania i postępy więc poprosiliśmy o ofertę na nasz dom. Oferta okazała się do przyjęcia więc podpisaliśmy.',
    rating: 5,
  },
]

export const realizationsContent = [
  { name: 'Lazienka w Olkuszu', image: '/lazienka1.jpg' },
  { name: 'Kuchnia w Olkuszu', image: '/kuchnia1.jpg' },
  { name: 'Dom w Olkuszu', image: '/lazienka1.jpg' },
  { name: 'Salon w Olkuszu', image: '/lazienka1.jpg' },
  { name: 'Taras w Olkuszu', image: '/lazienka1.jpg' },
]

export const realizationsSubheading =
  'Przedstawiamy wybrane realizacje, które mieliśmy przyjemność wykonać dla naszych klientów. Remonty to dla nas coś co wykonujemy na co dzień, dlatego pragniemy podzielić się naszą pracą. Zapraszamy do obejrzenia galerii wykonanych przez nas prac remontowych.'

export const contactSubheading =
  'Osoby zainteresowane ofertą na remonty, wykończenia wnętrz lub inne prace budowlane prosimy o kontakt.'

export const menuItems = [
  { label: 'Strona główna', link: '/' },
  { label: 'Realizacje', link: '/realizacje' },
  { label: 'Oferta', link: '/oferta' },
  { label: 'Dlaczego My', link: '/dlaczego-my' },
]
