import Button from '@/components/common/Button'
import Title from '@/components/common/Title'

const page = () => {
  return (
    <main className="container">
      <Title level="h1" className="text-heading-1 tracking-xs mb-8 font-bold">
        Style Guide
      </Title>

      <div>
        <Title level="h2" className="text-heading-2 mb-4">
          Button:
        </Title>

        <div>
          <Button variant="default">Default</Button>
        </div>
      </div>
    </main>
  )
}

export default page
