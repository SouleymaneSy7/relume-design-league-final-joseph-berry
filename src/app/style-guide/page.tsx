import { Button } from '@/components/common/Button'
import Title from '@/components/common/Title'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

const page = () => {
  return (
    <main className="container">
      <Title level="h1" className="text-heading-1 tracking-xs mb-8 font-bold">
        Style Guide
      </Title>

      <div>
        <Title level="h2" className="text-heading-2 mb-4 font-medium">
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
