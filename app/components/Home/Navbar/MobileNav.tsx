import { navLinks } from '@/contents/content'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}: Props) => {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      {/* Navlinks */}
      <div className={`text-black ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-yellow-300 space-y-6 z-[1100]`}>
      {navLinks.map((link) => (
        <Link href={link.url} key={link.id}>
          <p className='text-black w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-black sm:text-[30px]'>{link.name || link.label}</p>
        </Link>
      ))}
      {/* close button */}
      <CgClose onClick={closeNav}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-black"
      />

      </div>
    </div>
  )
}

export default MobileNav