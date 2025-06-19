import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='mt-4'>
      <div className='h-full  max-h-screen-xl mx-auto p-4 md:py-8 sm:max-w-6xl'>
        <p className='text-xl text-center'>
          Books Review
          <span className='font-bold text-xs'>
            APP
          </span>
        </p>
        <Separator className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          &copy; {new Date().getFullYear()} {" "}
          <span >
            Todos los derechos reservados. Desarrollado por {" "}
            <Link href="https://leonardo-fuentes-claros.vercel.app" className='font-semibold hover:underline'>
              Leonardo Fuentes Claros
            </Link>
          </span>

        </span>
      </div>
    </footer>
  )
}

export default Footer