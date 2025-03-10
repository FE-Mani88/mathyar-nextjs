import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Clock, BookOpen, BarChart, ArrowLeft, GraduationCap, List } from 'lucide-react';
import { DIFFICULTY_COLORS } from '../../utils/constants';
import { ActiveQuiz } from '@/components/ActiveQuiz/ActiveQuiz';
import fs from 'fs'
import path from 'path';

export default function QuizShortName(props) {

    const router = useRouter()
    const queryValue = router.query
    const [foundQuiz, setFoundQuiz] = useState(null)
    const [isQuizStarted, setIsQuizStarted] = useState(null)

    console.log(props.data.quizzes);
    

    useEffect(() => {
        const fetchHandler = async () => {
            

            let isQuizFound = props.data.quizzes?.find(quiz => quiz.id == queryValue.shortname)
            // console.log(()isQuizFound);

            if (isQuizFound?.id != foundQuiz?.id) {
                console.log('== => ', isQuizFound, foundQuiz);

                setFoundQuiz(isQuizFound)
            }
        }

        fetchHandler()
    })


    if (isQuizStarted) {
        return <ActiveQuiz quiz={foundQuiz} />;
    }

    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-[#1b2433] transition-all">
                {/* <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} /> */}
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="h-64 overflow-hidden">
                            <img
                                src={foundQuiz?.image}
                                alt={foundQuiz?.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 dark:bg-[#293546]">
                            <div className="flex items-center justify-between mb-6">
                                <span className={`px-4 py-2 rounded-full text-sm font-medium ${DIFFICULTY_COLORS[foundQuiz?.difficulty]}`}>
                                    {foundQuiz?.difficulty === 'medium' ? 'متوسط' : foundQuiz?.difficulty === 'hard' ? 'سخت' : 'آسان'}
                                </span>
                                <h1 className="!text-2xl sm:text-3xl rtl !font-bold text-gray-900 dark:text-white">{foundQuiz?.title}</h1>
                            </div>

                            <p className="text-gray-600 text-lg mb-8 dark:text-gray-300 rtl">{foundQuiz?.description}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-center !flex justify-evenly">
                                <div className="flex items-center gap-2 space-x-3 text-gray-700">
                                    <Clock className="w-6 h-6 dark:text-white" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-white">مدت زمان</p>
                                        <p className="font-medium dark:text-white flex gap-1"><span>دقیقه</span>{foundQuiz?.duration} </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 space-x-3 text-gray-700">
                                    <BookOpen className="w-6 h-6 dark:text-white" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-white">تعداد سوالات</p>
                                        <p className="font-medium dark:text-white flex gap-1"> <span>سوال</span>{foundQuiz?.totalQuestions} </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 text-gray-700 gap-2">
                                    <GraduationCap className="w-6 h-6 dark:text-white" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-white"> پایه تحصیلی</p>
                                        <p className="font-medium dark:text-white">{foundQuiz?.grade === 7 ? "هفتم" : foundQuiz?.grade === 8 ? "هشتم" : "نهم"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 space-x-3 text-gray-700">
                                    <BarChart className="w-6 h-6 dark:text-white" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-white">سطح آزمون</p>
                                        <p className="font-medium capitalize dark:text-white">{foundQuiz?.difficulty === 'easy' ? 'آسان' : foundQuiz?.difficulty === 'medium' ? 'متوسط' : 'سخت'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8 rtl">
                                <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4 flex items-center gap-2">
                                    <List className="w-5 h-5 mr-2" />
                                    مباحث پوشش داده شده
                                </h3>
                                <div className="flex flex-wrap mt-2 gap-2">
                                    {foundQuiz?.topics.map((topic, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 dark:text-white bg-gray-100 dark:bg-gray-900 text-gray-700 rounded-full text-sm"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setIsQuizStarted(true)}
                                className="w-full !bg-blue-600 !text-white !py-3 !px-6 rounded-lg font-medium hover:!bg-blue-700 transition-colors"
                            >
                                شروع آزمون
                            </button>

                            <Link href='/select'>
                                <button
                                    className="w-full !mt-2 !bg-red-600 !text-white !py-3 !px-6 rounded-lg font-medium hover:!bg-red-700 transition-colors"
                                >
                                    بازگشت به آزمون ها
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export async function getServerSideProps(params) {

    const databaseDirectory = path.join(process.cwd(), 'data', 'db.json')

    const bufferData = fs.readFileSync(databaseDirectory)
    const data = JSON.parse(bufferData)

    return {
        props: {
            data: data
        }
    }
}