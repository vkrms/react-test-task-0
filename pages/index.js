import Socials from '../components/socials'
import Form from '../components/form'
import styles from '../styles/home.module.scss'
import { useState, useEffect } from 'react'

export default function Home() {
  const [shareDone, setShareDone] = useState(false)
  const [emailDone, setEmailDone] = useState(false)

  useEffect(() => {
    // create user on page load if there's no token in the localstorage

    (function createUserOnFirstVisit() {
      const token = window.localStorage.getItem('testTaskToken')

      if (!token) {
        fetch('/api/create-user')
          .then((res) => {
            return res.json()
          })
          .then(data => {
            window.localStorage.setItem('testTaskToken', data.token)
          })
      }
    })()

  })

  return (
      <div className={styles.home}>

        <h1 className={styles.the_title}>Чтобы выиграть путешествие</h1>

        <div className={styles.step} disabled={shareDone}>
          <div className={styles.step__text}>Поделись с друзьями:</div>

          <Socials onComplete={() => { setShareDone(true) }}/>
        </div>

        <div className={styles.step} disabled={emailDone}>
          <div className={styles.step__text}>Оставь почту:</div>

          <Form onComplete={() => { setEmailDone(true) }}/>
        </div>

      </div>
  )
}
