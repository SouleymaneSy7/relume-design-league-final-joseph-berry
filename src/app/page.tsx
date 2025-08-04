import Container from '@/components/common/Container'
import CardSection from '@/components/layouts/CardSection'
import CommuteSection from '@/components/layouts/CommuteSection'
import JoinSection from '@/components/layouts/JoinSection'
import ReviewSection from '@/components/layouts/ReviewSection'

export default function Home() {
  return (
    <Container as={'section'}>
      <CardSection />
      <CommuteSection />
      <ReviewSection />
      <JoinSection />
    </Container>
  )
}
