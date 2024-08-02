import React from 'react'
import Image from 'next/image'
import image from '@/public/assets/ors.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image
            src={image} width={50} height={10}
            alt="Logo"
          />
        </Link>
        <p>2024 Orans. All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer