import { Inter } from 'next/font/google'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })
import { MainLayout } from '../../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        get started by editing {''}
        <code className="code">page/pricing.tsx</code>
      </p>
    </MainLayout>
  )
}
