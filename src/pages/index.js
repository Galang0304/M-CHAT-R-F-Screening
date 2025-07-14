import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>I Will CHAT You – Fokus pada deteksi dini autisme</title>
        <meta name="description" content="Platform deteksi dini autisme menggunakan M-CHAT-R/F" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-12">
        <div className="text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              I Will CHAT You – Fokus pada deteksi dini autisme
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Deteksi Dini Autisme
            </h2>
            <p className="text-xl text-gray-600">
              Alat deteksi dini autisme untuk balita usia 16-30 bulan
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Tentang I Will CHAT You</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I Will CHAT You adalah platform deteksi dini yang divalidasi untuk mengevaluasi risiko Autism Spectrum Disorder (ASD) 
              pada anak usia 16-30 bulan.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kuisioner ini terdiri dari 20 pertanyaan yang dapat dijawab dengan YA/TIDAK.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 mb-3">Tujuan Skrining</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Deteksi dini risiko ASD pada anak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Identifikasi kebutuhan evaluasi lebih lanjut</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Panduan intervensi dini jika diperlukan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-green-800 mb-3">Manfaat</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Skrining cepat dan mudah dilakukan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Hasil dan rekomendasi langsung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Panduan tindak lanjut yang jelas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/quiz" className="inline-block">
            <button className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Mulai Deteksi
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
} 