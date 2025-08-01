import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'

const footerLinks1 = ['E-bikes', 'Specs', 'Our Impacts', 'Contact Us']
const footerLinks2 = ['Zoom', 'EcoBoost', 'Voltage', 'PowerPedal']
const footerSocials = [
  { id: crypto.randomUUID(), icon: FacebookIcon, title: 'Facebook' },
  { id: crypto.randomUUID(), icon: InstagramIcon, title: 'Instagram' },
  { id: crypto.randomUUID(), icon: TwitterIcon, title: 'Twitter' },
  { id: crypto.randomUUID(), icon: LinkedinIcon, title: 'LinkedIn' },
]

const footerTerms = ['Privacy Policy', 'Terms Of Services', 'Cookies Settings']

export { footerLinks1, footerLinks2, footerSocials, footerTerms }
