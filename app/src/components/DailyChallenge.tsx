import { DAILY_CHALLENGES, getCard } from '../data/words'
import styles from './DailyChallenge.module.css'

interface Props {
  unlocked: Set<string>
}

export default function DailyChallenge({ unlocked }: Props) {
  // 今日の日付をシードにしてチャレンジを選ぶ
  const today = new Date()
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
  const challenge = DAILY_CHALLENGES[seed % DAILY_CHALLENGES.length]
  const targetCard = getCard(challenge.target)
  const cleared = unlocked.has(challenge.target)

  if (!targetCard) return null

  return (
    <div className={[styles.container, cleared ? styles.cleared : ''].join(' ')}>
      <div className={styles.header}>
        <span className={styles.icon}>📅</span>
        <span className={styles.title}>今日のお題</span>
        {cleared && <span className={styles.badge}>✓ クリア済み！</span>}
      </div>

      <div className={styles.body}>
        <div className={styles.target}>
          {cleared
            ? <>
                <span className={styles.emoji}>{targetCard.emoji}</span>
                <span className={styles.name}>{targetCard.name}</span>
              </>
            : <>
                <span className={styles.emoji}>🔮</span>
                <span className={styles.name}>???</span>
              </>
          }
        </div>
        <div className={styles.hint}>ヒント: {challenge.hint}</div>
      </div>
    </div>
  )
}
