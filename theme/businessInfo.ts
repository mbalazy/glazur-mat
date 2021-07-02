import facebookIcon from '../public/facebook.svg'
import ingIcon from '../public/instagram.svg'
import whatsappIcon from '../public/whatsapp.svg'

import gips_sysIcon from '../public/sys_gips.svg'
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

export const offer = [
  {
    name: 'Montaż Systemów Gipsowych',
    icon: gips_sysIcon,
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
