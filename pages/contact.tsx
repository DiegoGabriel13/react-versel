import Head from 'next/head'
import { Inter } from 'next/font/google'
import React from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function contact () {
  return (
    <MainLayout>
      <h1 className="title">
        Ir a <Link href="/">home</Link>
      </h1>
      <p className="description">
        get started by editing {''}
        <code className="code">page/contact.tsx</code>
      </p>
    </MainLayout>
  )
}
