import { WindowContainer } from '@/components/WindowContainer'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Renz Pulvira - Dotfiles',
  description: 'My config files documentation'
}

export default function DotFiles() {
  return (
    <WindowContainer title='Dotfiles' bodyStyles='p-6'>
      <h1 className='text-center'>Coming Soon...</h1>
    </WindowContainer>
  )
}
