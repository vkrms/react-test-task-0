import Socials from '../components/socials'
import Form from '../components/form'

import styles from '../styles/home.module.scss'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

let token = null
import API from '../libs/api-calls'
import { updateUser } from '../redux/userSlice'
import { useRouter } from 'next/router';

export default function Home() {
  const [emailDone, setEmailDone] = useState(false)

  const router = useRouter()

  useEffect(() => {
    (function userGetOrCreate() {
      API.newUser()
        .then(user => {
          // store user in redux
          dispatch(updateUser(user))

          window.localStorage.setItem('testTaskToken', user.token)
        })
    })()
  }, [dispatch]) // only run on first render

    updateUser(token, { email: e.target.email.value })
      .then(() => {
        setEmailDone(true)

        // maybe collect more emails from the same browser
        window.localStorage.removeItem('testTaskToken')
      })
  if (shared && submitted) {
    router.replace('/success')
  }

  return (
      <div className={styles.home}>

        <h1 className={styles.the_title}>Чтобы выиграть путешествие</h1>

        <div className={styles.step} disabled={shared}>
          <div className={styles.step__text}>Поделись с друзьями:</div>

          <Socials/>
        </div>

        <div className={styles.step} disabled={emailDone}>
          <div className={styles.step__text}>Оставь почту:</div>

          <Form onSubmit={handleSubmit}/>
        </div>

      </div>
  )
}
