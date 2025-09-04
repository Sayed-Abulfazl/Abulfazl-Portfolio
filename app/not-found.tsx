"use client"

import Link from 'next/link'
import React from 'react'
import useTheme from './context/useTheme'
import { FaRegSadCry } from 'react-icons/fa'
import { BsBack, BsBackpack2Fill, BsSkipBackward, BsSkipBackwardBtn, BsSkipBackwardCircleFill } from 'react-icons/bs'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const notFound = () => {
  const {mode} = useTheme();
  return (
    <div className={`h-screen flex-col font-semibold gap-2 ${mode === 'dark' ? 'text-white bg-black' : "text-black bg-white"} FCC`}>
      <div className='FCC gap-3 text-3xl bg-red-500 py-3 px-5 rounded-full'>
        <h1>Not Found</h1>
        <FaRegSadCry className='text-white' />
      </div>
      <div className='p-2 FCC gap-1 bg-yellow-500 rounded-full px-8'>
        <MdOutlineKeyboardBackspace />
        <Link href={'/'} >Back</Link>
      </div>
    </div>
  )
}

export default notFound
