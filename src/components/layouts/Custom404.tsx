import Link from 'next/link'
import Title from '../common/Title'
import { Button } from '../common/Button'

const Custom404 = () => {
  return (
    <main className="bg-light-clr grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <p className="text-heading-6 font-semi-bold uppercase">404</p>

        <Title
          level="h1"
          className="text-heading-small text-dark-clr mt-4 font-medium tracking-tight text-balance uppercase"
        >
          This page does not exist
        </Title>

        <p className="text-heading-6 text-dark-clr mt-6 font-medium text-pretty opacity-60">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <Button variant={'secondary'} asChild className="mt-10">
          <Link href={'/'} title="Go back home">
            Go back home
          </Link>
        </Button>
      </div>
    </main>
  )
}

export default Custom404
