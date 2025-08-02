import Image from 'next/image'
import Title from '../common/Title'

const CommuteSection = () => {
  return (
    <div className="bg-primary-clr relative h-screen">
      <Image
        width={800}
        height={800}
        alt="recycle bike image"
        src={'/images/bike-img-1.png'}
        className="absolute top-1/2 left-1/2 z-50 aspect-auto h-full w-full -translate-1/2 object-cover"
      />

      <div className="grid h-full w-full place-items-center">
        <Title level="h2" className="heading-large text-light-clr">
          C<i>o</i>mmute
        </Title>
      </div>
    </div>
  )
}

export default CommuteSection
