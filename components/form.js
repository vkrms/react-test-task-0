import styles from './form.module.scss'
import { useState } from 'react'

console.log({styles})

export default function Form(props) {
  const [validity, setValidity] = useState(false)

  function changeHandler(e) {
    setValidity(e.target.validity.valid)
  }

  return (
    <form className="form" onSubmit={props.onSubmit}>

      <input type="email" name="email" className={styles.input} onChange={changeHandler} required/>

      <button className={styles.submit} disabled={!validity}>Отправить</button>

      <pre>{validity.toString()}</pre>

    </form>
  )
}
