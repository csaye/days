import styles from '@/styles/pages/Index.module.scss'
import { useEffect, useState } from 'react'

const start = {
  activity: 'Ramp',
  date: new Date(2023, 4, 15),
}

export default function Index() {
  const [seconds, setSeconds] = useState(getSeconds())

  const days = seconds / 60 / 60 / 24

  useEffect(() => {
    const interval = setInterval(() => setSeconds(getSeconds()), 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <h2>{start.activity}</h2>
        <h1>Day {Math.floor(days)}</h1>
        <p>{Math.round(days * 1000000) / 1000000}</p>
      </div>
    </div>
  )

  function getSeconds() {
    const ms = Date.now() - start.date.getTime()
    return ms / 1000
  }
}
