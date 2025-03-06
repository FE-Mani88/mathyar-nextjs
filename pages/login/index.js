import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="cnplf min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-gray-900 !flex items-center justify-center !p-6">
            <div className="c5sfa c307p c1sv4 cavhb cnmzr" aria-hidden="true">
                <img src="https://preview.cruip.com/neon/images/hero-illustration.svg" className="cy2lr" width={2143} height={737} alt="Hero Illustration" />
            </div>
            <div className="max-w-md w-full bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8 space-y-7 border border-gray-700/50 relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

                <div className="text-center space-y-2">
                    <h1 className="!text-4xl !font-bold !bg-gradient-to-r from-blue-400 to-indigo-400 !bg-clip-text !text-transparent">ورود</h1>
                    <p className="!text-gray-400 !text-lg !mt-1">به حساب کاربری خود وارد شوید</p>
                </div>

                <form className="space-y-5">
                    {/* <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-200" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="block w-full !pl-10 !pr-3 !py-3.5 !bg-gray-700/50 border !border-gray-600 !rounded-xl focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent !text-white !placeholder-gray-400 transition-all duration-200 hover:!bg-gray-700/70"
              required
            />
          </div> */}

                    <div className="relative group">
                        <div className="absolute !inset-y-0 !left-0 !pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-200" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="آدرس ایمیل"
                            className="!placeholder-gray-400 block w-full !pl-10 !pr-3 !py-3.5 !bg-gray-700/50 border !border-gray-600 !rounded-xl focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent !text-white placeholder-gray-400 transition-all duration-200 hover:!bg-gray-700/70"
                            required
                        />
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-200" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="رمز عبور"
                            className="block w-full !pl-10 !pr-12 !py-3.5 !bg-gray-700/50 border !border-gray-600 !rounded-xl focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent !text-white !placeholder-gray-400 !transition-all duration-200 hover:bg-gray-700/70"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 !pr-3 flex items-center"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer" />
                            ) : (
                                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer" />
                            )}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="!transition-all w-full !bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 !text-white !py-3.5 !rounded-xl !font-semibold text-lg hover:scale-[1.02] transform !transition-all !duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-[0.98]"
                    >
                        ورود
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-gray-400 flex justify-center gap-1 rtl">
                        <p className='text-[14px] sm:!text-[16px]'>
                            حساب کاربری ندارید؟
                        </p>
                        <Link href="register" className="!text-blue-400 hover:!text-blue-300 font-semibold transition-colors duration-200 !text-sm sm:!text-md">
                            ثبت نام کنید
                        </Link>
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700/50"></div>
                    </div>
                    <div className="relative flex justify-center !text-sm">
                        <span className="!px-3 !bg-gray-800/80 !text-gray-400 rtl">
                            و یا ادامه دهید با:
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <button className="flex items-center justify-center !p-3 !bg-gray-700/30 !rounded-xl hover:!bg-gray-700/50 transition-all duration-200 hover:!scale-105 group">
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="Google"
                            className="w-6 h-6 group-hover:brightness-110 transition-all duration-200"
                        />
                    </button>
                    <button className="flex items-center justify-center !p-3 !bg-gray-700/30 !rounded-xl hover:!bg-gray-700/50 transition-all duration-200 hover:!scale-105 group">
                        <img
                            src="https://github.com/favicon.ico"
                            alt="GitHub"
                            className="w-6 h-6 group-hover:brightness-110 transition-all duration-200"
                        />
                    </button>
                    <button className="flex items-center justify-center !p-3 !bg-gray-700/30 !rounded-xl hover:!bg-gray-700/50 transition-all duration-200 hover:scale-105 group">
                        <img
                            src="https://www.linkedin.com/favicon.ico"
                            alt="LinkedIn"
                            className="w-6 h-6 group-hover:brightness-110 transition-all duration-200"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;