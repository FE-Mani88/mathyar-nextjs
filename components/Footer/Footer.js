import React from 'react'

export default function Footer({isNeedDark}) {
    return (
        <footer>
            <div class={isNeedDark ? "flex flex-wrap items-center md:justify-between justify-center w-full bg-gray-300 dark:bg-gray-800 py-5 dark:text-white" : "flex flex-wrap items-center md:justify-between justify-center w-full bg-gray-800 py-5 text-white"}>
                <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div class="text-sm text-blueGray-500 py-1">
                        Copyright © <span id="get-current-year">2025</span> MathYar Created By Dev Mani
                    </div>
                </div>
            </div>
        </footer>
    )
}
