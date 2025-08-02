import Container from '@/components/common/Container'
import CommuteSection from '@/components/layouts/CommuteSection'
import JoinSection from '@/components/layouts/JoinSection'

export default function Home() {
  return (
    <Container as={'section'}>
      <CommuteSection />
      <JoinSection />
    </Container>
  )
}
