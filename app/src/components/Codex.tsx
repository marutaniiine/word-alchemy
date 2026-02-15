import type { WordCard } from '../data/words'
import { ALL_CARDS } from '../data/words'
import WordCardComponent from './WordCard'
import styles from './Codex.module.css'

interface Props {
  unlocked: Set<string>
}

const ELEMENT_LABELS: Record<string, string> = {
  fire: '🔥 炎系', water: '💧 水系', wind: '🌬️ 風系', earth: '🌍 土系',
  light: '✨ 光系', dark: '🌑 闇系', life: '🌱 生命系', time: '⏳ 時間系',
  mind: '🧠 精神系', void: '⚫ 虚無系',
}

export default function Codex({ unlocked }: Props) {
  const total = ALL_CARDS.length
  const unlockedCount = unlocked.size

  // 要素別グループ
  const byElement = ALL_CARDS.reduce<Record<string, WordCard[]>>((acc, card) => {
    if (!acc[card.element]) acc[card.element] = []
    acc[card.element].push(card)
    return acc
  }, {})

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div className={styles.progressText}>
          発見済み: <span className={styles.count}>{unlockedCount}</span> / {total}
        </div>
        <div className={styles.bar}>
          <div
            className={styles.barFill}
            style={{ width: `${(unlockedCount / total) * 100}%` }}
          />
        </div>
      </div>

      {Object.entries(byElement).map(([element, cards]) => (
        <div key={element} className={styles.group}>
          <h3 className={styles.groupTitle}>{ELEMENT_LABELS[element] || element}</h3>
          <div className={styles.grid}>
            {cards.map(card => (
              <div key={card.id} className={styles.cardWrap}>
                {unlocked.has(card.id)
                  ? <WordCardComponent card={card} size="small" />
                  : <div className={styles.locked}>
                      <span className={styles.lockedEmoji}>🔒</span>
                      <span className={styles.lockedName}>???</span>
                    </div>
                }
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
