import AvailabilityStatus from './MinimalistHero/AvailabilityStatus';
import { FlipWords } from './MinimalistHero/FlipWords';

export default function MinimalistHero() {
  return (
    <section id="home" className="relative container max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold">Eager to Master the Art of</h1>
      <h1 className="text-4xl font-bold text-blue-500 transition duration-200">
        <FlipWords words={[
          'Fullstack',
          'Mobile',
          'Blockchain',
          'AI',
        ]} />
        <span className='ms-2'>Development</span> 
      </h1>
      <p className="max-w-2xl mt-4 font-thin mb-6">Need a passionate fullstack developer? Let&apos;s turn your vision into reality with my expertise in modern web technologies!</p>
      <AvailabilityStatus />
    </section>
  )
}
