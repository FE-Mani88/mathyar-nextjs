import React, { useEffect } from 'react'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'
// import './Landing.css'


export default function Landing() {

    useEffect(() => {
        document.body.classList.add('cnplf')
    }, [])

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
