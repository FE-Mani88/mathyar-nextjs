import React from 'react'
// import { Link } from 'react-router-dom'
import Link from 'next/link'

export default function Erroe404() {
    return (
        <>
            <div>
                <div className="h-[100vh] bg-white items-center flex justify-center px-5 lg:px-0">
                    <div className="w-[415px] text-center flex-col items-center justify-center mx-auto gap-[100px]">
                        <div className="mb-8 md:mb-[56px]">
                            <div className="max-w-[312px] w-full h-[160px] relative flex justify-center items-center mx-auto">
                                <img
                                    alt={404}
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent"
                                    }}
                                    sizes="100vw"
                                    srcSet="https://www.tailwindtap.com/_next/image?url=%2Fassets%2Fcomponents%2F404%2F404-green.png&w=1920&q=75"
                                    src="https://www.tailwindtap.com/_next/image?url=%2Fassets%2Fcomponents%2F404%2F404-green.png&w=1920&q=75"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="!text-4xl md:text-[56px] leading-[64px] text-[#1A1C16]">
                                Page Not Found
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6 mt-3">
                            <div className="text-center">
                                <p className="!text-base leading-6 tracking-wider !font-sans">
                                    !صفحه مورد نظر شما یافت نشد
                                </p>
                            </div>
                            <div>
                                <button className="!bg-[#8AC732] !text-white font-sans max-w-[146px] w-full h-[48px] rounded-[100px] font-medium text-sm">
                                    <Link href="/">
                                        صفحه اصلی
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
