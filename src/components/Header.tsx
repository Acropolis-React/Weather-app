import { useState, useEffect } from "react";

export function Header() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved ? JSON.parse(saved) : 'light';
    })

    function ThemeChange() {
        setTheme((prev: string) => (prev === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
            localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },[theme])

    return(
        <header className="relative w-full bg-blue-50 dark:rounded-none dark:bg-gray-800 shadow-md py-4 md:px-6 px-3 flex items-center justify-between rounded-b-2xl">
            <button
                onClick={ThemeChange}
                className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
                Переключить тему
            </button>
            <h1 className="md:absolute left-1/2 md:-translate-x-1/2 text-sm w-35 sm:w-auto md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                Погода в Санкт-Петербурге
            </h1>
        </header>
    )
}