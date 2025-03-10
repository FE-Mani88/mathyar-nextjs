import React, { useState, useEffect } from 'react'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'
// import Cookies from 'js-cookie'
// import { useRouter } from 'next/router'


export default function Landing() {

    // const router = useRouter()

    // if (Cookies.get('user')) {
    //     router.push('/dashboard')
    // }

    return (
        <>
            <div class="dir cnplf" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="0">
                <div class="chip0 cbk2v cuk8q clv5h  cz8nf c9loe cum4w cwh80">
                    <Header />
                    <Main />
                    <Footer isNeedDark={false} />
                </div>
            </div>
        </>
    )
}
