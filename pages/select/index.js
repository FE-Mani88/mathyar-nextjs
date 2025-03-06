'use client'
import React, { useEffect, useState } from 'react'
import { GraduationCap } from 'lucide-react'
import QuizCard from '../../components/QuizCard/QuizCard';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import ThemeButton from '@/components/ThemeButton/ThemeButton';
import { Moon, Sun } from "lucide-react"

export default function Select() {

  // const [savedTheme] = localStorage.getItem('theme');
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [quizzes, setQuizzes] = useState(null)
  const [isSun, setIsSun] = useState(null)

  const themeHandler = () => {
    document.documentElement.classList.toggle('dark')

    if (isSun) {
      setIsSun(false)
    } else {
      setIsSun(true)
    }

  }

  useEffect(() => {
    const fetchHandler = async () => {
      const res = await fetch('http://localhost:3000/api/quizzes')
      const quizzesData = await res.json()
      setQuizzes(quizzesData)
      // console.log(quizzesData)
    }

    fetchHandler()
  }, [])

  const filteredQuizzes = selectedGrade
    ? quizzes.filter(quiz => quiz.grade === selectedGrade)
    : quizzes;

  return (
    <>
      {/* <ThemeButton /> */}
      {/*  */}
      <button
        onClick={themeHandler}
        className="fixed top-4 left-4 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg 
                hover:scale-110 hover:shadow-xl
                transform transition-all duration-400 ease-in-out"
        aria-label="Toggle theme"
      >
        <div className="relative w-5 h-5">
          <div className={`absolute inset-0 transform transition-transform duration-400`}>
            {isSun ?
              <div className={`absolute inset-0 transform transition-transform duration-400`}>
                <Sun className="w-5 h-5 text-yellow-500" />
              </div>
              :
              <Moon className="w-5 h-5 text-gray-700" />}
          </div>
        </div>
      </button>
      {/*  */}
      <div className="min-h-screen bg-gray-50 dark:bg-[#1a2331] transition-all scroll-y-hidden bg-[./images/codes.png]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="!text-4xl !gap-1 !font-bold text-gray-900 !mb-4 flex items-center justify-center dark:text-white">
              <GraduationCap className="w-10 h-10 mr-3 dark:text-white" />
              پلتفرم آزمون های ریاضی
              <GraduationCap className="w-10 h-10 mr-3 dark:text-white" />
            </h1>
            <p className="!text-xl text-gray-600 dark:text-gray-300">
              پایه تحصیلی خود را انتخاب کنید و آزمون مورد نظر خود را انتخاب کنید
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {[7, 8, 9].map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(selectedGrade === grade ? null : grade)}
                className={`dark:!text-white !px-6 !py-3 rounded-lg font-medium transition-colors ${selectedGrade === grade
                  ? '!bg-blue-600 !text-white dark:!bg-gray-900 '
                  : 'bg-white text-gray-700 hover:!bg-sky-500 hover:!text-white dark:!bg-gray-700 dark:hover:!bg-gray-800 dark:hover:!text-gray-300'
                  }`}
              >
                پایه  {grade === 9 ? 'نهم' : grade === 8 ? 'هشتم' : 'هفتم'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {console.log(filteredQuizzes)}

            {filteredQuizzes?.map((quiz) => (
              <QuizCard
                key={quiz.id}
                id={quiz.id}
                title={quiz.title}
                description={quiz.description}
                difficulty={quiz.difficulty}
                duration={quiz.duration}
                totalQuestions={quiz.totalQuestions}
                image={quiz.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
