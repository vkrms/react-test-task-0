import styles from './form.module.scss'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { submit } from '../redux/formSlice'
import { updateUser } from '../redux/userSlice'
import API from '../libs/api-calls'

export default function Form() {
  const [validity, setValidity] = useState(false)

  function changeHandler(e) {
    setValidity(e.target.validity.valid)
  }

  const dispatch = useDispatch()
  const id = useSelector(state => state.user.id)

  async function handleSubmit(e) {
    e.preventDefault()

    const user = await API.updateUser({
      id,
      email: e.target.email.value
    })

    if (user) {
      dispatch(submit())
      dispatch(updateUser(user))
      // allows to collect more emails from the same browser
      window.localStorage.removeItem('testTaskToken')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>

      <input type="email" name="email" className={styles.input} onChange={changeHandler} required/>

      <button className={styles.submit} disabled={!validity}>Отправить</button>
    </form>
  )
}
