import styles from '../styles/success.module.scss'

export default function Success() {
  return (
    <div>
      <div className={styles.character}></div>

      <div>
        <h1 className={styles.heading}>
          <s className={styles.s}>выборы</s>
          <div>путешествие</div>
          <div className={styles.large}>близко!</div>
        </h1>
      </div>
    </div>      
  )
}
