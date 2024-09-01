import { WindowContainer } from '@/components/WindowContainer'
import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <WindowContainer title='Blog posts' bodyStyles='p-0'>
      <Link href="/" className='border-b-2 border-neutral-500 py-5 block px-5'>
        <h2 className='text-xl font-medium'>This is a test post 1</h2>
        <span className='text-xs block mb-3'>08/19/2024</span>
        <p className='text-sm'>Lorem veniam voluptatem sed sit doloribus ipsam. Repellat dolor rerum vel in odio, quam? Maiores aspernatur ipsum excepturi eveniet illo omnis? Laboriosam quae reprehenderit totam reiciendis maiores. Similique minus fugiat.</p>
      </Link>
      <Link href="/" className='border-b-2 last:border-b-0 border-neutral-500 mb-0 py-5 block px-5'>
        <h2 className='text-xl font-medium'>This is a test post 2</h2>
        <span className='text-xs block mb-3'>08/19/2024</span>
        <p className='text-sm'>Lorem veniam voluptatem sed sit doloribus ipsam. Repellat dolor rerum vel in odio, quam? Maiores aspernatur ipsum excepturi eveniet illo omnis? Laboriosam quae reprehenderit totam reiciendis maiores. Similique minus fugiat.</p>
      </Link>
    </WindowContainer>
  )
}
