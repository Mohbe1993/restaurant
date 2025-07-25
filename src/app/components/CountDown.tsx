'use client'
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'

const endDate = new Date('2030-12-31T23:59:59')

export default function CountDown() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <Countdown
        className="font-bold text-5xl text-yellow-300"
        date={endDate}
      />
    </div>
  )
}
