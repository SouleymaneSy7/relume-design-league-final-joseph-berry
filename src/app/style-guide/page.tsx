import { Button } from '@/components/common/Button'
import Title from '@/components/common/Title'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

const page = () => {
  return (
    <main className="container">
      <Title
        level="h1"
        className="text-heading-small tracking-xs mb-8 font-bold"
      >
        Style Guide
      </Title>

      <div className="space-y-5">
        <Title level="h2" className="text-heading-1 mb-4 font-medium">
          Text:
        </Title>

        <div className="space-y-3 divide-y-2">
          <Title level="h2" className="heading-x-large">
            Heading X Large
          </Title>

          <Title level="h2" className="heading-large">
            Heading Large
          </Title>

          <Title level="h2" className="heading-medium">
            Heading Medium
          </Title>

          <Title level="h2" className="heading-small">
            Heading Small
          </Title>

          <Title level="h2" className="heading-1">
            Heading 1
          </Title>

          <Title level="h2" className="heading-2">
            Heading 2
          </Title>

          <Title level="h2" className="heading-3">
            Heading 3
          </Title>

          <Title level="h2" className="heading-4">
            Heading 4
          </Title>

          <Title level="h2" className="heading-5">
            Heading 5
          </Title>

          <Title level="h2" className="heading-6">
            Heading 6
          </Title>
        </div>
      </div>

      <div>
        <Title level="h2" className="text-heading-1 mb-4 font-medium">
          Button:
        </Title>

        <div className="space-y-3">
          <Button variant="default" className="border-dark-clr border-2">
            Order Now
          </Button>
          <Button variant="secondary">Order Now</Button>
          <Button variant="outline">Subscribe</Button>
          <div className="flex items-center gap-4">
            <Button variant={'arrow_ghost'}>
              <ArrowLeftIcon />
            </Button>

            <Button variant={'arrow_ghost'}>
              <ArrowRightIcon />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant={'arrow'}>
              <ArrowLeftIcon />
            </Button>

            <Button variant={'arrow'}>
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
