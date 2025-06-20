"use client"
import Link from 'next/link'
import React from 'react'
import NbDesktopItems from './ui/NbDesktopItems'
import NbMobileItems from './ui/NbMobileItems'
import { logoutUser } from '@/services/user';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter();
  const handleLogout = async () => {
    logoutUser().then(() => {
      router.push('/login');
    });
  }
  return (
    <div className='fixed top-0 left-0 right-0 z-50 h-[5.75rem] py-5 bg-background shadow-sm'>
      <div className='flex items-center justify-between  mx-auto cursor-pointer sm:max-w-6xl'>
        <Link href={'/reviews'} >
          <div className='flex items-center gap-0 sm:gap-2'>
            <h1 className='text-3xl'>
              ReadSoul
              <span className='font-bold text-sm'>APP</span>
            </h1>
          </div>
        </Link>
        <div className='items-center justify-between hidden sm:flex'>
          <NbDesktopItems
            onLogout={handleLogout}
          />
        </div>
        <div className='flex sm:hidden'>
          <NbMobileItems
            onLogout={handleLogout}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar