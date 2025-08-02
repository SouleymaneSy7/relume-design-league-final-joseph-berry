import Title from '../common/Title'
import Container from '../common/Container'

const JoinSection = () => {
  return (
    <Container
      as={'section'}
      className="join-bg-image text-light-clr h-screen py-8 lg:py-12"
    >
      <div className="container flex h-full flex-col justify-between">
        <Title level="h2" className="heading-large">
          J<i>o</i>in
        </Title>

        <div className="border-light-clr border-t pt-5 lg:pt-8">
          <p className="heading-1 w-full max-w-[420px]">
            Join the ReCycle Revolution
          </p>
        </div>
      </div>
    </Container>
  )
}

export default JoinSection
