import Head from 'next/head'

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Tentang EarlyDetect</title>
      </Head>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-4">
              EarlyDetect – Fokus pada deteksi dini autisme
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Tentang Penelitian</h2>
                <p className="text-gray-700 leading-relaxed">
                  Penelitian ini bertujuan untuk mengembangkan platform deteksi dini berbasis web
                  yang dapat membantu orang tua dalam memahami, mencegah, dan mendeteksi
                  secara dini gejala autisme pada anak. Platform ini menggunakan metodologi yang
                  telah tervalidasi secara ilmiah untuk memberikan hasil yang akurat.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Apa itu EarlyDetect?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  EarlyDetect adalah platform deteksi dini yang inovatif, dirancang khusus untuk 
                  mengevaluasi risiko Autism Spectrum Disorder (ASD) pada anak usia 16-30 bulan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Platform ini menggunakan pendekatan yang telah terbukti efektif dalam mengidentifikasi 
                  tanda-tanda awal ASD, memungkinkan intervensi dini yang dapat sangat mempengaruhi 
                  perkembangan anak.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Tujuan Skrining</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <ul className="list-disc pl-6 text-gray-700 space-y-3">
                    <li>Mendeteksi secara dini kemungkinan ASD pada anak-anak</li>
                    <li>Memberikan panduan bagi orang tua untuk memahami perkembangan anak</li>
                    <li>Memfasilitasi intervensi dini jika diperlukan</li>
                    <li>Meningkatkan kesadaran tentang pentingnya pemantauan perkembangan anak</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Cara Penggunaan</h2>
                <div className="bg-green-50 p-6 rounded-lg">
                  <ul className="list-disc pl-6 text-gray-700 space-y-3">
                    <li>Skrining terdiri dari 20 pertanyaan dengan jawaban YA/TIDAK</li>
                    <li>Jawablah setiap pertanyaan sesuai dengan perilaku anak Anda</li>
                    <li>Jika skor menunjukkan risiko sedang, akan ada pertanyaan follow-up</li>
                    <li>Hasil skrining akan memberikan rekomendasi tindak lanjut</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Penting Diingat</h2>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Skrining ini bukan alat diagnosis. Hasil positif tidak berarti anak Anda pasti 
                    memiliki ASD, dan hasil negatif tidak menjamin anak Anda tidak memiliki ASD. 
                    Jika Anda memiliki kekhawatiran tentang perkembangan anak Anda, selalu konsultasikan 
                    dengan profesional kesehatan.
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 my-8"></div>

              <section>
                <h2 className="text-xl font-semibold mb-4">Profil Pengembang</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <img 
                        src="/images/logo-kemenkes.png" 
                        alt="Logo Kemenkes Poltekkes Makassar" 
                        className="h-20 w-auto"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-lg font-semibold text-gray-800">Kemenkes Poltekkes Makassar</h3>
                      <p className="text-gray-600">Program Studi D-III Keperawatan</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative">
                      <img 
                        src="/images/profile.jpg" 
                        alt="Foto Profil"
                        className="rounded-full object-cover w-full h-full shadow-lg"
                      />
                    </div>
                    <div className="space-y-2 text-center md:text-left">
                      <p className="text-gray-700"><span className="font-medium">Nama:</span> Willyam wulan sari</p>
                      <p className="text-gray-700"><span className="font-medium">NIM:</span> PO713201221087</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 