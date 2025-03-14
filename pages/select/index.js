'use client'
import React, { useEffect, useState } from 'react'
import { GraduationCap } from 'lucide-react'
import QuizCard from '../../components/QuizCard/QuizCard';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import ThemeButton from '@/components/ThemeButton/ThemeButton';
import { Moon, Sun } from "lucide-react"
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function Select(props) {

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
    }

    fetchHandler()
  }, [])

  const filteredQuizzes = selectedGrade
    ? quizzes.filter(quiz => quiz.grade === selectedGrade)
    : quizzes;
  const isUserRegistered = Cookies.get('user')

  if (isUserRegistered) {
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
  } else {
    return (
      <div className="min-h-screen bg-[#111827] flex items-center justify-center p-4">
        <div className="c5sfa c307p c1sv4 cavhb cnmzr" aria-hidden="true">
          <img src="https://preview.cruip.com/neon/images/hero-illustration.svg" className="cy2lr" width={2143} height={737} alt="Hero Illustration" />
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300 py-10">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                قبل از استفاده از این صفحه باید ثبت نام کنید
              </h1>
              <p className="text-gray-600 !mt-4">
                "لطفا به صفحه ثبت نام بروید"
              </p>
            </div>
            <Link href="/register">
              <button
                // onClick={() => navigate('/register')}
                className="w-full !bg-gradient-to-r !from-indigo-600 !to-purple-600 !text-white !font-semibold !py-3 !px-6 !rounded-xl 
                     hover:!from-indigo-700 hover:!to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg"
              >
                ثبت نام کنید
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}


// export async function getServerSideProps(params) {

//   const res  = await fetch('/api/quizzes')
//   const data = await res.json()

//   return {
//     props: {
//       data: {
//         quizzes: data
//       }
//     }
//   }
// }