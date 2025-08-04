import List from '../common/List'
import Title from '../common/Title'
import { Button } from '../common/Button'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { star } from '@/constants'

const ReviewSection = () => {
  return (
    <div className="container flex flex-col gap-6 py-10 md:gap-10 md:py-14 lg:flex-row lg:items-start lg:justify-between lg:py-24">
      <div>
        <Title level="h2" className="text-heading-1 leading-8 font-medium">
          Reviews
        </Title>
      </div>

      <div className="flex w-full max-w-[764px] flex-col gap-6 lg:gap-10">
        <List
          className="flex items-center gap-3"
          items={star}
          renderItem={({ id, icon }) => {
            const Icon = icon
            return (
              <li key={id}>
                <Button variant={'arrow_ghost'}>
                  <Icon />
                </Button>
              </li>
            )
          }}
        />

        <p className="text-heading-3 opacity-50">
          ReCycle e-bikes have exceeded my expectations. Not only have I saved
          money on gas, but my fitness and well-being have also improved. Plus,
          Im doing my part to reduce my carbon footprint. I highly recommend
          ReCycle e-bikes to anyone looking to make a positive change in their
          transportation habits.
        </p>

        <div className="flex items-center gap-4">
          <Button variant={'arrow_ghost'}>
            <ArrowLeftIcon />
          </Button>

          <Button variant={'arrow_ghost'}>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
