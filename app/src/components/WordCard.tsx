import type { WordCard as WordCardType } from '../data/words'
import styles from './WordCard.module.css'

interface Props {
  card: WordCardType
  onClick?: () => void
  selected?: boolean
  isNew?: boolean
  size?: 'normal' | 'small'
}

export default function WordCard({ card, onClick, selected, isNew, size = 'normal' }: Props) {
  return (
    <div
      className={[
        styles.card,
        styles[`element-${card.element}`],
        styles[`tier-${card.tier}`],
        selected ? styles.selected : '',
        isNew ? styles.new : '',
        size === 'small' ? styles.small : '',
        onClick ? styles.clickable : '',
      ].join(' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      aria-pressed={selected}
      aria-label={`${card.name} - ${card.description}`}
    >
      <div className={styles.glow} />
      <div className={styles.emoji}>{card.emoji}</div>
      <div className={styles.name}>{card.name}</div>
      {size === 'normal' && (
        <div className={styles.desc}>{card.description}</div>
      )}
      {card.tier >= 2 && <div className={styles.tierBadge}>★{card.tier}</div>}
      {isNew && <div className={styles.newBadge}>NEW!</div>}
    </div>
  )
}
