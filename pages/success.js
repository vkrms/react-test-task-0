import styles from '../styles/success.module.scss'

export default function Success() {
  return (
    <div>
      {/* <div className={styles.character}></div> */}

      <div>
        <h1 className={styles.heading}>
          <div>Got it</div>
          <div className={styles.large}>Equator is near!</div>
        </h1>
      </div>
    </div>
  )
}
