import { cards } from '@/constants'
import Container from '../common/Container'
import List from '../common/List'
import Title from '../common/Title'
import Card from '../common/Card'
import Image from 'next/image'

const CardSection = () => {
  return (
    <Container
      as={'section'}
      className="bg-dark-clr text-text-light-clr py-10 lg:py-24"
    >
      <div className="container">
        <Title
          level="h2"
          className="heading-1 font-regular mb-10 text-center lg:mb-20"
        >
          Leading the Way in <br /> Sustainable Transportation
        </Title>

        <List
          className="md:grid-cols-[minmax(300px, _1fr)] grid gap-6 md:grid-rows-2 md:gap-8 lg:gap-10"
          items={cards}
          renderItem={({ id, cardImg, cardTitle, cardDescription }) => {
            return (
              <li key={id} className="md:first:col-span-2">
                <Card>
                  <div className="bg-dark-clr h-full w-full">
                    <Image
                      src={cardImg}
                      alt={cardTitle}
                      className="aspect-auto h-full w-full object-cover"
                      width={800}
                      height={800}
                      priority
                    />
                  </div>

                  <div className="mt-6 w-full max-w-[416px]">
                    <Title
                      level="h3"
                      aria-label="card-title"
                      className="heading-4 font-regular mb-2 lg:mb-3"
                    >
                      {cardTitle}
                    </Title>{' '}
                    <p className="text-heading-6 opacity-50">
                      {cardDescription}
                    </p>
                  </div>
                </Card>
              </li>
            )
          }}
        />
      </div>
    </Container>
  )
}

export default CardSection
