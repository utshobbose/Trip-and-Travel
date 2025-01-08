import { navLinks } from '@/contents/content'
import { link } from 'fs'
import Link from 'next/link'
import React from 'react'
import { BiSolidPlanet } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'

const Nav = () => {
  return (
    <div className='bg-gray-500 transition-all duration-200 h-[12vh] z-[1000] fixed w-full'>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center flex-col'>
                    <BiSolidPlanet className='w-6 h-6 text-amber-400'/>
                </div>
                <h1 className='text-xl md:text-2xl text-white uppercase font-bold'> Ghuraghuri </h1>
            </div>
            {/* Navigation links */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((links) => {
                    return (
                        <Link href={links.url} key={links.id}>
                            <p className='relative text-white text-base font-medium w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-yellow-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-100 after:origin-left'>{links.name}</p>
                        </Link>
                    );
                })}
            </div>
            {/* Button */  }
            <div className='flex items-center space-x-4'>  
                <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-yellow-300 hover:bg-red-400 hover:text-white transition-all duration-200 rounded-lg '> Book now </button>
                {/* Burger menu */}
                <HiBars3BottomRight className='w-9 h-9 cursor-pointer text-yellow-200'/>
            </div>
        </div>
    </div>
  )
}

export default Nav