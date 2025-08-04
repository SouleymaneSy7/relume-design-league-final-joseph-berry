import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  StarIcon,
  TwitterIcon,
} from 'lucide-react'

const cards = [
  {
    id: crypto.randomUUID(),
    cardImg: '/images/card-img-1.png',
    cardTitle: 'High-quality Materials',
    cardDescription:
      'Premium materials and advanced construction techniques to ensure durability and a long lifespan.',
  },
  {
    id: crypto.randomUUID(),
    cardImg: '/images/card-img-2.png',
    cardTitle: 'High-quality Materials',
    cardDescription:
      'Premium materials and advanced construction techniques to ensure durability and a long lifespan.',
  },
  {
    id: crypto.randomUUID(),
    cardImg: '/images/card-img-3.jpg',
    cardTitle: 'High-quality Materials',
    cardDescription:
      'Premium materials and advanced construction techniques to ensure durability and a long lifespan.',
  },
]

const star = [
  { id: crypto.randomUUID(), icon: StarIcon },
  { id: crypto.randomUUID(), icon: StarIcon },
  { id: crypto.randomUUID(), icon: StarIcon },
  { id: crypto.randomUUID(), icon: StarIcon },
  { id: crypto.randomUUID(), icon: StarIcon },
]

const footerLinks1 = ['E-bikes', 'Specs', 'Our Impacts', 'Contact Us']
const footerLinks2 = ['Zoom', 'EcoBoost', 'Voltage', 'PowerPedal']
const footerSocials = [
  { id: crypto.randomUUID(), icon: FacebookIcon, title: 'Facebook' },
  { id: crypto.randomUUID(), icon: InstagramIcon, title: 'Instagram' },
  { id: crypto.randomUUID(), icon: TwitterIcon, title: 'Twitter' },
  { id: crypto.randomUUID(), icon: LinkedinIcon, title: 'LinkedIn' },
]

const footerTerms = ['Privacy Policy', 'Terms Of Services', 'Cookies Settings']

export { cards, star, footerLinks1, footerLinks2, footerSocials, footerTerms }
