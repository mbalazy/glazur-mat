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
  address: ['Mateusz Oleksy', 'Zasępiec 43', '32-340 Wolbrom'],
  emails: ['kontakt@glazur-mat.pl'],
} as const

export default businessInfo

export const menuItems = [
  { label: 'Strona główna', link: '/' },
  { label: 'Realizacje', link: '/realizacje' },
  { label: 'Oferta', link: '/oferta' },
  { label: 'Dlaczego My', link: '/dlaczego-my' },
] as const

export const socials = [
  {
    name: 'facebook',
    icon: facebookIcon,
    link: 'https://www.facebook.com/glazur.mat/',
  },
  {
    name: 'instagram',
    icon: ingIcon,
    link: 'https://www.instagram.com/glazurmat/',
  },
  {
    name: 'whatsapp',
    icon: whatsappIcon,
    link: `https://api.whatsapp.com/send?phone=+48${businessInfo.telephones[0]}`,
  },
] as const

export const testimonials = [
  {
    name: 'Anna',
    testimonial:
      'Gorąco polecam! Świetny kontakt, bardzo szybkie i profesjonalne wykonanie, nie ma żadnych problemów z ewentualnymi poprawkami, ponadto ceny nie są wygórowane.',
    rating: 5,
  },
  {
    name: 'Robert',
    testimonial:
      'Serdecznie polecam! Współpracę z Panem Mateuszem doceniam przede wszystkim za fantastyczną komunikację - szybkie odpisywanie na wiadomości, możliwość wprowadzania poprawek nawet klika tygodni po wykonaniu analizy - to się ceni. Bardzo dziękuję za współpracę raz jeszcze 🙂',
    rating: 5,
  },
  {
    name: 'Jerzy',
    testimonial:
      'Firma terminowo i niemal wzorowo wykonała powierzone jej prace. Pan Mateusz działała profesjonalnie, szybko i solidnie. Można jemu powierzyć każde, nawet nietypowe zadanie, a błyskotliwa wręcz intuicja, doświadczenie i wiedza pomogą inwestorowi osiągnąć założony cel.',
    rating: 5,
  },
] as const

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
] as const

export const realizationHeading = 'Sprawdź nasze realizacje'

export const realizationsSubheading =
  'Przedstawiamy wybrane realizacje, które mieliśmy przyjemność wykonać dla naszych klientów. Remonty to dla nas coś co wykonujemy na co dzień, dlatego pragniemy podzielić się naszą pracą. Zapraszamy do obejrzenia galerii wykonanych przez nas prac remontowych.'

export const contactSubheading =
  'Osoby zainteresowane ofertą na remonty, wykończenia wnętrz lub inne prace budowlane prosimy o kontakt.'

export const whyUsFeatures = [
  {
    heading: 'Bezpłatna wycena',
    copy: 'Przed rozpoczęciem prac lub projektu przygotujemy bezpłatną wstepną wycenę usług wraz z zestawieniem niezbędnych materiałów.',
    imageSrc: '/wycena2.jpg',
  },
  {
    heading: 'Terminowość usług',
    copy: 'Jakość i dotrzymanie terminu to dla nas niezwykle ważne cechy. Dokładamy wszelkich starań aby spełnić wysokie oczekiwania naszych klientów.',
    imageSrc: '/kal1.jpg',
  },
  {
    heading: 'Gwarancja jakosci',
    copy: 'Posiadamy duże doświadczenie na rynku budowlanym gwarantując usługi w zakresie remontów, budowy i konserwacji. Jeśli szukasz profesjonalnych wykonawców to dobrze trafiłeś! Nasze największe atuty to profesjonalizm, terminowość oraz indywidualne podejście do klienta.',
    imageSrc: '/gw1.jpg',
  },
  {
    heading: 'Doświadczenie',
    copy: 'Wieloletnie doświadczenie jest gwarancją solidnego i profesjonalnego wykonania zleconych usług. Glazur-Mat posiada wysokiej jakości sprzęt, umożliwiający perfekcyjną realizację prac. Natomiast wiedza na temat aktualnych trendów przy wykonywaniu prac wykończeniowych jest z pewnością bardzo dużym atutem.',
    imageSrc: '/dos1.jpg',
  },
] as const
