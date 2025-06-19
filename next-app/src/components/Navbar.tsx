import Link from 'next/link'
import React from 'react'
import NbDesktopItems from './ui/NbDesktopItems'
import NbMobileItems from './ui/NbMobileItems'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 h-[5.75rem] py-5 bg-background shadow-sm'>
      <div className='flex items-center justify-between  mx-auto cursor-pointer sm:max-w-6xl'>
        <Link href={'/reviews'} >
          <div className='flex items-center gap-0 sm:gap-2'>
            <h1 className='text-3xl'>
              Books Review
              <span className='font-bold text-sm'>APP</span>
            </h1>
          </div>
        </Link>
        <div className='items-center justify-between hidden sm:flex'>
          <NbDesktopItems />
        </div>
        <div className='flex sm:hidden'>
          <NbMobileItems />
        </div>
      </div>
    </div>
  )
}

export default Navbar