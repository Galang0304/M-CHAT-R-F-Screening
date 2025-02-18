import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            M-CHAT-R/F Screening
          </Link>
          
          <div className="flex gap-4">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Beranda
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">
              Tentang
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 