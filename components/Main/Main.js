import React from 'react'
// import { Link } from 'react-router-dom'
import Link from 'next/link';
// import Typewriter from 'typewriter-effect';
import { LogIn, User, Telescope, Search, Flame, Timer, Brain, Wifi } from 'lucide-react'

export default function Main() {
    return (
        <>
            <main className="cxgjn">
                {/* Hero */}
                <section className="c8a4e clv5h">
                    {/* Bg gradient */}
                    <div className="c5sfa c307p c8igq cpg49 c5n0y cavhb cigfq c4wey ckoll cn6f7 cma1x" aria-hidden="true">
                    </div>
                    {/* Illustration */}
                    <div className="c5sfa c307p c1sv4 cavhb cnmzr" aria-hidden="true">
                        <img src="https://preview.cruip.com/neon/images/hero-illustration.svg" className="cy2lr" width={2143} height={737} alt="Hero Illustration" />
                    </div>
                    <div className="c8a4e cbl28 c0g2c coaq6 cb0ik">
                        <div className="cv5m6 czfa1 cg2ig c2e3f">
                            {/* Hero content */}
                            <div className="cbl28 czcad ckxd8 c4qns czwux cohxx">
                                <div data-aos="zoom-out" className="aos-init aos-animate">
                                    <div className="c8a4e ciljg cmgtq czrr8 c4a1n coaq6 cld06 cimbm clnec cm1n3 cv4y4 cjzl6 cfgdq cfqr8 ctz45 cyb34 c6760 cs42d ca9no">
                                        <div className="flex gap-1.5 ckdyj items-center">
                                            <Link className="hover:text-blue-300 cpfyo c4mnq cazq3 ce7rf cdm1x c6m7s ckwz7 c76qn" href="/about">
                                                درباره ما
                                                بیشتر بدانید
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="sm:!text-7xl !text-[30px] cx0om ciljg cejd3 aos-init aos-animate" data-aos="zoom-out" data-aos-delay={100}>
                                    پلتفرم آموزش ریاضی
                                </h1>
                                <p className="cyl8w cbqc4 ckdyj aos-init aos-animate" data-aos="zoom-out" data-aos-delay={200}>
                                    .نرم افزار کوییز ریاضی، یک نرم افزار لورم ایپسوم متن تستی است
                                </p>
                                <div className="cbl28 cn9oi cu0vn cdjip c4t8e c9mpo cvuia cqmlm cjwgj aos-init aos-animate" data-aos="zoom-out" data-aos-delay={300}>
                                    <div>
                                        <Link className="gap-[2px] cxykh c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn" href="/select">
                                            <Flame />
                                            <p>!بزن بریم برای اولین آزمون</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <a className="flex gap-1.5 cxykh c0ayg c4wey ckoll c2xk9 clnec cxmkl crzek" href="#">
                                            <Search />
                                            <p>در مقالات کاوش کنید </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Press logos */}
                <section>
                    <div className="cbl28 c0g2c coaq6 cb0ik">
                        <div className="c25y8 cydxx ckewl">
                        </div>
                    </div>
                </section>
                {/* Features */}
                <section>
                    <div className="cbl28 c0g2c coaq6 cb0ik">
                        <div className="cyo0e c2n62">
                            {/* Section header */}
                            <div className="czfa1 ckxd8 c2e3f">
                                <h2 className="c4cmz cejd3 aos-init aos-animate" data-aos="zoom-out">
                                    بر روی مسئله ها تمرکز کنید
                                </h2>
                            </div>
                            <div className="c2to7 aos-init aos-animate" data-aos="zoom-out">
                                <img src="./images/image.png" width={1104} height={512} alt="Features" />
                            </div>
                            {/* Items */}
                            <div className="cbl28 c8bbi c4ebt c4v1u cpkit cckpn ct4ea c5a57">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center mb-4">
                                        <Timer className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-white text-xl font-semibold mb-2">حواست به زمان باشه</h2>
                                    <p className="text-gray-400">
                                        هر آزمون زمان مشخصی داره، قبل از شروع آزمون بهش دقت کن
                                    </p>
                                </div>

                                {/* Second Card */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center mb-4">
                                        <Brain className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-white text-xl font-semibold mb-2">!خیلی تمرکز کن</h2>
                                    <p className="text-gray-400">
                                        خیلی از سوالات نکات ریزی دارن، پس با تمرکز برو سراغ حل سوالات
                                    </p>
                                </div>

                                {/* Third Card */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center mb-4">
                                        <Wifi className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-white text-xl font-semibold mb-2">از وصل بودن به اینترنت مطمئن باش</h2>
                                    <p className="text-gray-400">
                                        اختلال توی اینترنت ممکنه توی فرآیند آزمون مشکلاتی به وجود بیاره
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Features #2 */}
                <section className="c8a4e">
                    {/* Bg gradient */}
                    <div className="c5sfa c307p cpg49 c5n0y cqa37 cavhb cigfq cltl0 ckoll cn6f7 cma1x" aria-hidden="true">
                    </div>
                    {/* Bg illustration */}
                    <div className="c307p c1sv4 cqa37 cavhb ck5f6" aria-hidden="true">
                        <img src="https://preview.cruip.com/neon/images/features-illustration.svg" className="cy2lr" width={608} height={305} alt="Illustration" />
                    </div>
                    <div className="cbl28 c0g2c coaq6 cb0ik">
                        <div className="cyo0e c2n62">
                            {/* Section header */}
                            <div className="cbl28 cqg01 czfa1 ckxd8 c2e3f">
                                <h2 className="c4cmz cvx4v cejd3">
                                    {/* <Typewriter
                                        options={{
                                            strings: 'MathYar - پلتفرم آموزش ریاضی',
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    /> */}
                                </h2>
                                <div className="cbl28 cms5w">
                                    <p className="cbqc4 ckdyj">
                                        ســــاده، ســـریع، مــطمــئن
                                    </p>
                                </div>
                            </div>
                            {/* Section content */}
                            <div className="xl:space-x-18 cbl28 chip0 czcad cuk8q cc36m cq0c0 cckpn cmmfs cy3qu c5l51 c40z8 cbb29">
                                {/* Content */}
                                <div className="cs4o7 mt-6 sm: cm9ng cphra c6ovz aos-init aos-animate" data-aos="zoom-out" data-aos-delay={200}>
                                    <div className="ckxd8 cohxx">
                                        <h3 className="ci6dt cvx4v cejd3 c6shg rtl text-start !text-xl text-center flex justify-center sm:!text-4xl">برخی مزایای استفاده از این پلتفرم:</h3>
                                        <p className="ciljg cbqc4 ckdyj !flex rtl !text-center sm:!text-start">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است که بدانند.
                                        </p>
                                        <ul className="cpfyo cuk8q ch3s0 cblub ckdyj !flex rtl">
                                            <li className="chip0 c4mnq flex gap-2 flex text-start">
                                                <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                                    </path>
                                                </svg>
                                                <span>طراحی مناسب سوالات</span>
                                            </li>
                                            <li className="chip0 c4mnq flex gap-2 !text-[17.7px]">
                                                <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                                    </path>
                                                </svg>
                                                <span>سطح بندی سوالات در سه سطح متفاوت</span>
                                            </li>
                                            <li className="chip0 c4mnq flex gap-2">
                                                <svg className="cejbf c8u3n cn0vf cveoo c6f9y cmb3e" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z">
                                                    </path>
                                                </svg>
                                                <span>قابلیت مشاهده کارنامه خود</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Image */}
                                <div className="ciy0g c6ovz aos-init aos-animate" data-aos="zoom-out">
                                    <img className="cbl28 cckpn" src="./images/testLogo.png" width={540} height={581} alt="Features" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Pricing */}
                <section className="c8a4e">
                    {/* Illustration */}
                    <div className="c5sfa c307p c8igq c1sv4 cavhb c7z7s cnmzr cvu0u" aria-hidden="true">
                        <img src="https://preview.cruip.com/neon/images/features-illustration.svg" className="cy2lr" width={618} height={468} alt="Pricing Illustration" />
                    </div>
                </section>
            </main>
        </>
    )
}
