'use client'

import { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-6 right-6 z-50 rounded-full bg-red-600 text-white p-3 shadow-lg hover:bg-red-500 cursor-pointer transition'
      aria-label='Scroll to top'
    >
      <FaChevronUp />
    </button>
  )
}
