import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { scheduleData } from '../data/scheduleData'
import { daysMap } from '../data/constants'

const OpenStatusContext = createContext(null)

function getMinutes(time) {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function getTodayKey() {
  const dayNames = Object.keys(daysMap)
  return dayNames.find(d => daysMap[d] === new Date().getDay())
}

export function OpenStatusProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const check = useCallback(() => {
    const todayName = getTodayKey()
    if (!todayName) return
    const todaySchedule = scheduleData[todayName]
    if (!todaySchedule) return

    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()
    const openMinutes = getMinutes(todaySchedule.open)
    const closeMinutes = getMinutes(todaySchedule.close)

    if (closeMinutes > openMinutes) {
      setIsOpen(currentMinutes >= openMinutes && currentMinutes < closeMinutes)
    } else {
      setIsOpen(currentMinutes >= openMinutes || currentMinutes < closeMinutes)
    }
  }, [])

  useEffect(() => {
    check()
    const interval = setInterval(check, 60000)
    const onVisibility = () => { if (!document.hidden) check() }
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [check])

  return (
    <OpenStatusContext.Provider value={isOpen}>
      {children}
    </OpenStatusContext.Provider>
  )
}

export function useOpenStatus() {
  const ctx = useContext(OpenStatusContext)
  if (ctx === null) {
    throw new Error('useOpenStatus must be used within an OpenStatusProvider')
  }
  return ctx
}
