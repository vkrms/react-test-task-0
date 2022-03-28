import Socials from '../components/socials'
import Form from '../components/form'
import styles from '../styles/home.module.scss'
import { useState, useEffect } from 'react'
import { createUser, updateUser } from '../libs/api-calls'

export default function Home() {
  const [token, setToken]         = useState(null)
  const [shareDone, setShareDone] = useState(false)
  const [emailDone, setEmailDone] = useState(false)

  useEffect(() => {
    (function createUserOnFirstVisit() {
      const token = window.localStorage.getItem('testTaskToken')

      if (!token) {
        createUser()
          .then(data => {
            window.localStorage.setItem('testTaskToken', data.token)
            setToken(data.token)
          })
        return
      }

      setToken(token)
    })()
  })

  async function handleShare() {
    await updateUser(token, { shared: true })
    setShareDone(true)
  }

  function handleSubmit(e) {
    e.preventDefault()

    updateUser(token, { email: e.target.email.value })
      .then(() => {
        setEmailDone(true)
      
        // maybe collect more emails from the same browser
        window.localStorage.removeItem('testTaskToken')
      })
}

  return (
      <div className={styles.home}>

        <h1 className={styles.the_title}>Чтобы выиграть путешествие</h1>

        <div className={styles.step} disabled={shareDone}>
          <div className={styles.step__text}>Поделись с друзьями:</div>

          <Socials onComplete={handleShare}/>
        </div>

        <div className={styles.step} disabled={emailDone}>
          <div className={styles.step__text}>Оставь почту:</div>

          <Form onSubmit={handleSubmit}/>
        </div>

      </div>
  )
}
