import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })
import { MainLayout } from '@/components/layouts/MainLayout'

export default function HomePage() {
    return (
        <MainLayout>
            <h1 className="title">
                Ir a <Link href="/about">about</Link>
            </h1>
            <p className="description">
                get started by editing {''}
                <code className="code">page/index.tsx</code>
            </p>
        </MainLayout>
    )
}
