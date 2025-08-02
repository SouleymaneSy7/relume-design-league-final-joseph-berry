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
        <div className="flex w-full flex-col gap-10 space-y-4 lg:flex-row lg:justify-between lg:gap-16">
          <div className="footer-fluid-width">
            <Link href={'/'}>
              <Title level="h1" className="text-heading-5 mb-6">
                ReCycle
              </Title>
            </Link>
            <p className="mb-6">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <Form className="flex w-full flex-col gap-4">
              <div className="flex w-full flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <Inputs
                  id={'email'}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-light-clr border-text-muted-clr text-dark-clr placeholder:text-muted-clr w-full grow rounded-full border py-3 pl-6"
                  inputWrapperClassName="grow-1"
                />

                <Button variant={'outline'} className="w-full md:w-[120px]">
                  Subscribe
                </Button>
              </div>
              <p className="text-small">
                By subscribing you agree to with our{' '}
                <a
                  href="#"
                  title="Privacy Policy"
                  className="font-medium underline"
                >
                  Privacy Policy
                </a>{' '}
                and provide consent to receive updates from our company.
              </p>
            </Form>
          </div>

          <div className="responsive-flex w-full lg:w-[60%]">
            <div>
              <Title level="h2" className="heading-6 mb-4 font-bold lg:mb-6">
                Explore
              </Title>

              <List
                className="flex flex-col items-start gap-4"
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
              <Title level="h2" className="heading-6 mb-4 font-bold lg:mb-6">
                Our top picks
              </Title>

              <List
                className="flex flex-col items-start gap-4"
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
              <Title level="h2" className="heading-6 mb-4 font-bold lg:mb-6">
                Follow Us
              </Title>

              <List
                className="flex flex-wrap items-center gap-4 md:flex-col md:items-start"
                items={footerSocials}
                renderItem={({ id, icon, title }) => {
                  const Icon = icon

                  return (
                    <li key={id}>
                      <a href="#" className="flex items-start gap-2">
                        <Icon />
                        {title}
                      </a>
                    </li>
                  )
                }}
              />
            </div>
          </div>
        </div>

        <div className="border-light-clr mt-8 flex flex-col gap-4 border-t py-6 lg:mt-16 lg:flex-row-reverse lg:items-center lg:justify-between lg:py-8">
          <List
            items={footerTerms}
            className="flex flex-wrap items-center gap-5"
            renderItem={(item) => {
              return (
                <li key={item}>
                  <a href="#" className="underline">
                    {item}
                  </a>
                </li>
              )
            }}
          />

          <p>{new Date().getFullYear()} - Relume. All right reserved.</p>
        </div>

        <div>
          <Title level="h3" className="heading-x-large text-center uppercase">
            C<i>o</i>mmute
          </Title>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
