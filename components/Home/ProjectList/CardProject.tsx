import React from 'react'

export default function CardProject({
  img,
}: {
  img: string
}) {
  return (
    <div className='max-w-xl px-4 pt-4 pb-5 bg-[#18181b] rounded-xl'>
      <img src={img} className='rounded-lg' alt="Texio Project" />
      <div className='flex items-center mt-3'>
        <img src="/projects/project_texio/logo.png" className='w-12 h-12 rounded-full' alt="" />
        <div className='ms-2'>
          <h2 className='font-bold'>Texio Landing Page</h2>
          <p className='text-sm font-thin'>A landing page for Texio</p>
        </div>
      </div>
    </div>
  )
}
