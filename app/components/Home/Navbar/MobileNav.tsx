import { navLinks } from '@/contents/content'
import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (
    <div>
      {/* Overlay */}
      <div className='fixed inset-0 transform transition-all duration-500 bg-black opacity-70 w-full h-screen'></div>
      {/* Navlinks */}
      <div className='text-black fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-yellow-300 space-y-6 z-[100]'>
      {navLinks.map((link) => (
        <Link href={link.url} key={link.id}>
          <p className='text-black w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.name || link.label}</p>
        </Link>
      ))}

      </div>
    </div>
  )
}

export default MobileNav