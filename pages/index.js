import Socials from '../components/socials'
import Form from '../components/form'

import styles from '../styles/home.module.scss'

import { useEffect } from 'react'
import API from '../libs/api-calls'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../redux/userSlice'
import { useRouter } from 'next/router';

export default function Home() {
  const dispatch = useDispatch()

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

  const shared = useSelector(state => state.socials.shared)
  const submitted = useSelector(state => state.form.submitted)

  if (shared && submitted) {
    router.replace('/success')
  }

  return (
    <div className={styles.home}>

      <h1 className={styles.the_title}>To win a prize</h1>

      <div className={styles.step} disabled={shared}>
        <div className={styles.step__text}>Share it with your friends:</div>

        <Socials />
      </div>

      <div className={styles.step} disabled={submitted}>
        <div className={styles.step__text}>Leave your email:</div>
        <Form />
      </div>

    </div>
  )
}
