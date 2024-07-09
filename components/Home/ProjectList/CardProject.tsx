import { cn } from '@/utils/cn'
import Image from 'next/image'

export default function CardProject({
  project,
}: {
  project: any
}) {
  return (
    <div className={cn('flex flex-col px-4 pt-4 pb-5 bg-[#18181b] rounded-xl transition duration-300')}>
      <div className='relative h-[273px]'>
        <Image fill objectFit='cover' src={project.thumbnail} alt={project.thumbnail} className='rounded-lg' />
      </div>
      <div className='flex items-center mt-3 relative'>
        <div className='relative h-10 w-10'>
          <Image fill objectFit='cover' src={project.logo} alt={project.logo} className='w-12 h-12 rounded-full' />
        </div>
        <div className='ms-2'>
          <h2 className='font-bold'>{project.title}</h2>
          <p className='text-sm font-thin'>{project.subTitle}</p>
        </div>
      </div>
    </div>
  )
}
