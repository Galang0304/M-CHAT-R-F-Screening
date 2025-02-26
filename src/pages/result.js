import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { calculateRisk, getRecommendation } from '../utils/questions'

const getRiskColor = (risk) => {
  switch (risk) {
    case 'low':
      return 'green'
    case 'medium':
      return 'yellow'
    case 'high':
      return 'red'
    default:
      return 'gray'
  }
}

const getRiskLabel = (risk) => {
  switch (risk) {
    case 'low':
      return 'Rendah'
    case 'medium':
      return 'Sedang'
    case 'high':
      return 'Tinggi'
    default:
      return 'Tidak Diketahui'
  }
}

const getRiskExplanation = (risk, score) => {
  switch (risk) {
    case 'low':
      return {
        title: 'Risiko Rendah (Skor 0-2)',
        explanation: 'Jika anak lebih muda dari 24 bulan, lakukan deteksi lagi setelah ulang tahun kedua. Tidak ada tindakan lanjutan yang diperlukan, kecuali pemantauan rutin perkembangan anak.',
        note: 'Tetap perhatikan perkembangan anak dan lakukan deteksi rutin sesuai jadwal.'
      }
    case 'medium':
      return {
        title: 'Risiko Sedang (Skor 3-7)',
        explanation: 'Perlu dilakukan Follow-up (tahap kedua) untuk mendapat informasi tambahan tentang perilaku berisiko.',
        note: 'Jika skor Follow-up ≥ 2: Rujuk untuk evaluasi diagnostik dan evaluasi eligibilitas intervensi dini.\nJika skor Follow-up 0-1: Tidak perlu tindakan lanjut, lakukan deteksi ulang saat kunjungan berikutnya.'
      }
    case 'high':
      return {
        title: 'Risiko Tinggi (Skor 8-20)',
        explanation: 'Follow-up dapat tidak dilakukan dan disarankan untuk segera melakukan konsultasi untuk evaluasi diagnostik dan evaluasi eligibilitas untuk intervensi dini.',
        note: 'Segera konsultasikan dengan dokter spesialis anak atau psikiater anak untuk evaluasi lebih lanjut.'
      }
    default:
      return {
        title: 'Tidak dapat menentukan risiko',
        explanation: 'Terjadi kesalahan dalam perhitungan skor.',
        note: 'Silakan ulangi deteksi atau hubungi administrator.'
      }
  }
}

export default function Result() {
  const router = useRouter()
  const score = parseInt(router.query.score || '0')
  const isFollowUp = router.query.isFollowUp === 'true'
  const risk = calculateRisk(score)
  const riskColor = getRiskColor(risk)
  const recommendation = getRecommendation(score, isFollowUp)
  const riskInfo = getRiskExplanation(risk, score)

  return (
    <div className="min-h-screen">
      <Head>
        <title>EarlyDetect - Hasil Deteksi Dini{isFollowUp ? ' (Follow-Up)' : ''}</title>
      </Head>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Hasil Deteksi Dini{isFollowUp ? ' (Follow-Up)' : ''}
              </h1>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-lg text-gray-600 mb-2">Skor Total:</p>
                  <div className="text-5xl font-bold text-primary mb-4">{score}</div>
                  <div className={`inline-block px-6 py-2 rounded-full text-white text-lg font-medium bg-${riskColor}-500`}>
                    Risiko {getRiskLabel(risk)}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">{riskInfo.title}</h2>
                  <p className="text-gray-700 mb-4">
                    {riskInfo.explanation}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Catatan Penting:</h3>
                  <p className="text-blue-700 whitespace-pre-line">
                    {riskInfo.note}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Rekomendasi:</h3>
                  <p className="text-gray-700">
                    {recommendation}
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <p className="text-yellow-800">
                    <strong className="block mb-2">Perhatian:</strong>
                    Hasil deteksi ini bukan diagnosis. Deteksi ini hanya alat bantu untuk mendeteksi risiko awal ASD. 
                    Diagnosis resmi hanya dapat dilakukan oleh profesional kesehatan yang berkualifikasi.
                  </p>
                </div>

                <div className="flex gap-6 mt-8">
                  {!isFollowUp && risk === 'medium' && (
                    <Link href="/follow-up" className="flex-1">
                      <button className="w-full py-4 px-6 bg-primary text-white text-lg font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        Lanjut ke Follow-Up
                      </button>
                    </Link>
                  )}
                  <Link href="/" className="flex-1">
                    <button className="w-full py-4 px-6 bg-secondary text-white text-lg font-medium rounded-lg hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
                      Kembali ke Beranda
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 