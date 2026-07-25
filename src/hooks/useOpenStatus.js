import { useState, useEffect } from 'react'
import { scheduleData } from '../data/menuData'

const daysMap = {
  sunday: 0, monday: 1, tuesday: 2, wednesday: 3,
  thursday: 4, friday: 5, saturday: 6,
}

function getMinutes(time) {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function useOpenStatus() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function check() {
      const now = new Date()
      const dayNames = Object.keys(daysMap)
      const todayName = dayNames.find(d => daysMap[d] === now.getDay())
      if (!todayName) return
      const todaySchedule = scheduleData[todayName]
      if (!todaySchedule) return

      const currentMinutes = now.getHours() * 60 + now.getMinutes()
      const openMinutes = getMinutes(todaySchedule.open)
      const closeMinutes = getMinutes(todaySchedule.close)

      if (closeMinutes > openMinutes) {
        setIsOpen(currentMinutes >= openMinutes && currentMinutes < closeMinutes)
      } else {
        setIsOpen(currentMinutes >= openMinutes || currentMinutes < closeMinutes)
      }
    }

    check()
    const interval = setInterval(check, 60000)
    return () => clearInterval(interval)
  }, [])

  return isOpen
}

export default useOpenStatus
