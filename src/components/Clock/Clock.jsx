import { useEffect, useState } from 'react'
import { ClockWrapper } from './Clock.styles'

export const Clock = () => {

  const [ time, setTime ] = useState(new Date())
  const [ showColon, setShowColon ] = useState(true)

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    const colonInterval = setInterval(() => {
      setShowColon( prev => !prev )
    }, 1000)

    return () => {
      clearInterval(clockInterval)
      clearInterval(colonInterval)
    }
  }, [])

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0")

  return (
    <ClockWrapper>
      { hours }
      { showColon ? ":" : " "}
      { minutes }
    </ClockWrapper>      
  )
}