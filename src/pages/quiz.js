import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { mchatQuestions, calculateScore } from '../utils/questions'

export default function Quiz() {
  const router = useRouter()
  const [answers, setAnswers] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer }
    setAnswers(newAnswers)
    
    if (currentQuestion < mchatQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Hitung skor menggunakan fungsi baru
      const score = calculateScore(newAnswers)
      router.push({
        pathname: '/result',
        query: { score }
      })
    }
  }

  const question = mchatQuestions[currentQuestion]

  return (
    <div className="min-h-screen">
      <Head>
        <title>I will chat you - Kuis Deteksi Dini (Pertanyaan {currentQuestion + 1})</title>
      </Head>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Pertanyaan {currentQuestion + 1} dari {mchatQuestions.length}
                  </h2>
                  <span className="text-lg font-medium text-primary">
                    {Math.round((currentQuestion / mchatQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary rounded-full h-3 transition-all duration-300"
                    style={{ width: `${(currentQuestion / mchatQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-medium text-gray-800 mb-6">{question.text}</h3>
                {question.kriteria && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-6">
                      <p className="font-medium text-green-800 mb-3">Perilaku Normal:</p>
                      <ul className="space-y-2">
                        {question.kriteria.lulus.map((item, idx) => (
                          <li key={`lulus-${idx}`} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-6">
                      <p className="font-medium text-red-800 mb-3">Perilaku yang Perlu Perhatian:</p>
                      <ul className="space-y-2">
                        {question.kriteria.gagal.map((item, idx) => (
                          <li key={`gagal-${idx}`} className="flex items-start">
                            <span className="text-red-500 mr-2">⚠</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-6">
                <button
                  onClick={() => handleAnswer(true)}
                  className="flex-1 py-4 px-6 bg-primary text-white text-lg font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Ya
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className="flex-1 py-4 px-6 bg-secondary text-white text-lg font-medium rounded-lg hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 