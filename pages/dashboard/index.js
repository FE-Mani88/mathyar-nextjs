import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function dashboard() {

    const [userData, setUserData] = useState(null)
    const router = useRouter()


    useEffect(() => {
        // if (!Cookies.get('user')) {
        //     router.push('/')
        // }

        const fetchHandler = async () => {
            try {
                const userDataJson = Cookies.get('user')

                const userData = await JSON.parse(userDataJson)

                setUserData(userData)
            } catch {
                router.push('/login')
            }
        }

        fetchHandler()
    }, [])

    return (
        <div>
            {userData?.name}
            <br />
            {userData?.email}

            <Link href="/">back to home</Link>
        </div>
    )
}
