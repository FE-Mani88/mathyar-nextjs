import React from 'react'
import { LogIn, User, Telescope, Search, Flame, Timer, Brain, Wifi } from 'lucide-react'

export default function Header() {
    return (
        <>
            <header class="c307p cvtc3 c0ayg">
                <div class="cbl28 c0g2c coaq6 cb0ik">
                    <div class="chip0 cglp6 c4mnq cd10w cdoit fexample">

                        <div class="cosxg cveoo">
                            <a class="cprq6" href="index.html" aria-label="Cruip">
                                <svg class="cxofs cnujf" viewBox="0 0 32 32">
                                    <defs>
                                        <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%"
                                            gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)"
                                            id="logo1-b">
                                            <stop stop-color="#3B82F6" stop-opacity=".64" offset="0%"></stop>
                                            <stop stop-color="#F472B6" stop-opacity=".876" offset="100%"></stop>
                                        </radialGradient>
                                        <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%"
                                            gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)"
                                            id="logo1-d">
                                            <stop stop-color="#3B82F6" stop-opacity=".64" offset="0%"></stop>
                                            <stop stop-color="#D375C2" stop-opacity=".833" offset="50.358%"></stop>
                                            <stop stop-color="#FBCFE8" stop-opacity=".876" offset="100%"></stop>
                                        </radialGradient>
                                        <path
                                            d="M12 32c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S0 8.373 0 15c0 4.418 4 10.085 12 17Z"
                                            id="logo1-a"></path>
                                        <path
                                            d="M20 29c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S8 5.373 8 12c0 4.418 4 10.085 12 17Z"
                                            id="logo1-c"></path>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <use fill="url(#logo1-b)" opacity=".64" transform="matrix(1 0 0 -1 0 35)"
                                            href="#logo1-a"></use>
                                        <use fill="url(#logo1-d)" opacity=".961" href="#logo1-c"></use>
                                    </g>
                                </svg>
                            </a>
                        </div>

                        <nav class="chip0 cxgjn">

                            <ul class="chip0 cxgjn cutr6 c4mnq cbv5p">
                                <li className='c8h5l'>
                                    <a class="sm:!px-4 !px-2 chip0 c4mnq c5mpl chs2t cazq3 ckdyj cdm1x c6m7s ckwz7 cysah cua40 make-btn"
                                        href="#">
                                        <p className='txt-margin !text-[11.1px] sm:!text-[18px] '> ساخت اکانت  </p>
                                        <User />
                                    </a>
                                </li>
                                <li class="c8h5l flex items-center">
                                    <a class="sm:!px-4 !px-2 !text-[11.2px] sm:!text-[18px] c2pi2 c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn" href="#">
                                        ورود به اکانت <span class="cfe40 cr1tk c56im cv73b c6m7s ckwz7 ccx8x"><LogIn /></span>
                                    </a>
                                </li>
                            </ul>

                        </nav>

                    </div>
                </div>
            </header>
        </>
    )
}
