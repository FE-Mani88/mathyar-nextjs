import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { Clock, BookOpen, BarChart, CheckCircle } from 'lucide-react';
import { DIFFICULTY_COLORS } from '../../utils/constants';
import { motion } from 'framer-motion';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
// import { quizStorage } from '../../utils/quizStorage';

export default function QuizCard({ id, title, description, difficulty, duration, totalQuestions, image }) {

    // const isCompleted = quizStorage.isQuizCompleted(id);
    // console.log(isCompleted);

    // useEffect(() => {
    //     if (isDark) {
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //     }
    //     localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // }, [isDark]);

    const variants = {
        hidden: { x: '100%', opacity: 0 }, // حالت پنهان: خارج از صفحه و شفافیت 0
        visible: { x: 0, opacity: 1 }, // حالت قابل مشاهده: در موقعیت اصلی و شفافیت 1
        transition: {
            easeInOut: 'linear'
        }
    };

    return (
        <>
            {/* <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} /> */}
            <Link href={`/quiz/${id}`} className="block transform translate-y-[100px] transition-all !duration-300">
                <motion.div initial="hidden" // شروع با حالت پنهان
                    animate="visible" // انیمیشن به حالت قابل مشاهده
                    variants={variants} // تعیین حالت‌ها
                    transition={{ duration: 0.5 }} className="bg-white dark:bg-[#293546] rounded-xl shadow-lg overflow-hidden"
                >

                    <div className="h-48 overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-3 rtl">
                            <h3 className="!text-xl !font-bold text-gray-900 dark:text-gray-200">{title}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${DIFFICULTY_COLORS[difficulty]}`}>
                                {difficulty === 'hard' ? 'سخت' : difficulty === 'medium' ? 'متوسط' : 'آسان'}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2 dark:text-gray-300 rtl">{description}</p>
                        <div className="flex items-center justify-between text-gray-500 mt-4 !z-10">
                            <div className="flex items-center space-x-2 gap-1 dark:text-white">
                                <Clock className="w-4 h-4" />
                                <span className='flex gap-1'>
                                    <p>دقیقه</p>
                                    {duration}
                                </span>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-white gap-1">
                                <BookOpen className="w-4 h-4" />
                                <span className='flex gap-1'> <p>سوال</p> {totalQuestions} </span>
                            </div>
                            <div className="flex items-center gap-1 space-x-2 dark:text-white">
                                <BarChart className="w-4 h-4" />
                                <span>{difficulty === 'hard' ? 'سخت' : difficulty === 'medium' ? 'متوسط' : 'آسان'}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </>
    )
}
