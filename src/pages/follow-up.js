import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { followUpQuestions } from '../utils/questions'

const FollowUpQuestion = ({ question, onAnswer }) => {
  const [answers, setAnswers] = useState({
    lulus: {},
    gagal: {},
    additional: {}
  })

  const handleAnswer = (category, key, value) => {
    setAnswers(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }))
  }

  const handleSubmit = () => {
    // Evaluasi jawaban berdasarkan diagram alur
    let result = "GAGAL"
    
    // Hitung jumlah jawaban LULUS dan GAGAL
    const lulusCount = Object.values(answers.lulus).filter(Boolean).length
    const gagalCount = Object.values(answers.gagal).filter(Boolean).length
    
    // Jika hanya ada jawaban LULUS
    if (lulusCount > 0 && gagalCount === 0) {
      result = "LULUS"
    }
    // Jika hanya ada jawaban GAGAL
    else if (lulusCount === 0 && gagalCount > 0) {
      result = "GAGAL"
    }
    // Jika ada keduanya, bandingkan jumlahnya
    else if (lulusCount > gagalCount) {
      result = "LULUS"
    }

    onAnswer(result)
  }

  // Tampilkan loading atau null jika pertanyaan belum siap
  if (!question?.subQuestions) {
    return <div>Memuat pertanyaan...</div>
  }

  const { lulus = [], gagal = [] } = question.subQuestions

  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 rounded-lg mb-6">
        <p className="text-blue-800 text-sm">
          Pilih semua perilaku yang sesuai dengan anak Anda. Centang sebanyak mungkin yang sesuai.
        </p>
      </div>

      {lulus.length > 0 && (
        <div className="space-y-4 p-4 bg-green-50 rounded-lg">
          <h3 className="font-medium text-lg text-green-800">Perilaku Normal:</h3>
          {lulus.map((q, idx) => (
            <div key={`lulus-${idx}`} className="flex items-start space-x-2">
              <input
                type="checkbox"
                id={`lulus-${idx}`}
                checked={answers.lulus[idx] || false}
                onChange={(e) => handleAnswer('lulus', idx, e.target.checked)}
                className="mt-1 h-4 w-4 text-green-600 rounded"
              />
              <label htmlFor={`lulus-${idx}`} className="text-green-900">
                {q}
              </label>
            </div>
          ))}
        </div>
      )}

      {gagal.length > 0 && (
        <div className="space-y-4 p-4 bg-red-50 rounded-lg">
          <h3 className="font-medium text-lg text-red-800">Perilaku yang Perlu Perhatian:</h3>
          {gagal.map((q, idx) => (
            <div key={`gagal-${idx}`} className="flex items-start space-x-2">
              <input
                type="checkbox"
                id={`gagal-${idx}`}
                checked={answers.gagal[idx] || false}
                onChange={(e) => handleAnswer('gagal', idx, e.target.checked)}
                className="mt-1 h-4 w-4 text-red-600 rounded"
              />
              <label htmlFor={`gagal-${idx}`} className="text-red-900">
                {q}
              </label>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="w-full btn-primary mt-8"
      >
        Lanjutkan
      </button>
    </div>
  )
}

export default function FollowUp() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [results, setResults] = useState([])

  const handleAnswer = (result) => {
    const newResults = [...results, result]
    setResults(newResults)

    if (currentQuestion < Object.keys(followUpQuestions).length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Hitung skor akhir berdasarkan jumlah GAGAL
      const score = newResults.filter(r => r === "GAGAL").length
      router.push({
        pathname: '/result',
        query: { score, isFollowUp: true }
      })
    }
  }

  const question = followUpQuestions[currentQuestion + 1]

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Memuat pertanyaan...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>I Will CHAT You - Follow-Up Deteksi Dini</title>
      </Head>

      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-center mb-8">
              Follow-Up Deteksi Dini
            </h1>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Pertanyaan {currentQuestion + 1} dari {Object.keys(followUpQuestions).length}
                </h2>
                <span className="text-gray-500">
                  {Math.round((currentQuestion / Object.keys(followUpQuestions).length) * 100)}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all duration-300"
                  style={{ width: `${(currentQuestion / Object.keys(followUpQuestions).length) * 100}%` }}
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-6 text-gray-800">{question.initialQuestion}</h3>
              <FollowUpQuestion
                question={question}
                onAnswer={handleAnswer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 