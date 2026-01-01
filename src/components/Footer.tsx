import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>


            <div className="border-t border-gray-200 dark:border-gray-800 pt-8">

                <div className="text-center mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Made with <span className="text-red-500">❤️</span> by{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">Ayush Bhagat</span>
                    </p>
                </div>


                <div className="text-center text-sm text-gray-500 dark:text-gray-500">
                    <p>&copy; {currentYear} Remote Interview Platform. All rights reserved.</p>
                </div>
            </div>

        </footer>
    )
}
