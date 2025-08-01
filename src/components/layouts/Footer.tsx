import Link from 'next/link'

import Form from '../common/Form'
import List from '../common/List'
import Title from '../common/Title'
import Inputs from '../common/Input'
import Container from '../common/Container'

import { Button } from '../common/Button'
import {
  footerLinks1,
  footerLinks2,
  footerSocials,
  footerTerms,
} from '@/constants'

const Footer = () => {
  return (
    <footer className="bg-dark-clr text-text-light-clr">
      <Container as={'section'} className="container pt-14 pb-12 lg:pt-21">
        <div>
          <div>
            <Link href={'/'}>
              <Title level="h1">ReCycle</Title>
            </Link>
            <p>
              Join our newsletter to stay up to date on features and releases.
            </p>

            <Form>
              <Inputs
                id={'email'}
                name="email"
                type="email"
                placeholder="Enter your email"
              />

              <Button variant={'outline'}>Subscribe</Button>
              <p>
                By subscribing you agree to with our{' '}
                <a href="#" title="Privacy Policy">
                  Privacy Policy
                </a>{' '}
                and provide consent to receive updates from our company.
              </p>
            </Form>
          </div>

          <div>
            <Title level="h2">Explore</Title>

            <List
              items={footerLinks1}
              renderItem={(item) => {
                return (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                )
              }}
            />
          </div>

          <div>
            <Title level="h2">Our top picks</Title>

            <List
              items={footerLinks2}
              renderItem={(item) => {
                return (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                )
              }}
            />
          </div>

          <div>
            <Title level="h2">Follow Us</Title>

            <List
              items={footerSocials}
              renderItem={({ id, icon, title }) => {
                const Icon = icon

                return (
                  <li key={id}>
                    <a href="#">
                      <Icon />
                      {title}
                    </a>
                  </li>
                )
              }}
            />
          </div>
        </div>

        <div>
          <List
            items={footerTerms}
            renderItem={(item) => {
              return (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              )
            }}
          />

          <p>{new Date().getFullYear()} - Relume. All right reserved.</p>
        </div>

        <div>
          <Title level="h3" className="heading-x-large">
            C<i>o</i>mmute
          </Title>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
