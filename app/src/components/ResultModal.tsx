import type { WordCard } from '../data/words'
import WordCardComponent from './WordCard'
import styles from './ResultModal.module.css'

interface Props {
  card: WordCard | null
  isNew: boolean
  onClose: () => void
}

export default function ResultModal({ card, isNew, onClose }: Props) {
  if (!card) return null

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="錬成結果">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.particles}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={styles.particle} style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>

        {isNew ? (
          <>
            <div className={styles.title}>✨ 新たな概念を発見！</div>
            <div className={styles.subtitle}>錬金術が成功しました</div>
          </>
        ) : (
          <>
            <div className={styles.title}>⚗️ 錬成完了</div>
            <div className={styles.subtitle}>すでに知っている概念です</div>
          </>
        )}

        <div className={styles.cardWrap}>
          <WordCardComponent card={card} isNew={isNew} />
        </div>

        <div className={styles.desc}>{card.description}</div>

        <button className={styles.closeBtn} onClick={onClose} autoFocus>
          {isNew ? '図鑑に追加！' : '閉じる'}
        </button>
      </div>
    </div>
  )
}
