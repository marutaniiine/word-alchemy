import type { WordCard } from '../data/words'
import WordCardComponent from './WordCard'
import styles from './CraftingSlot.module.css'

interface Props {
  slot1: WordCard | null
  slot2: WordCard | null
  result: WordCard | null
  isCrafting: boolean
  onCraft: () => void
  onClear: () => void
}

export default function CraftingSlot({ slot1, slot2, result, isCrafting, onCraft, onClear }: Props) {
  const canCraft = slot1 && slot2

  return (
    <div className={styles.container}>
      <div className={styles.slots}>
        <div className={[styles.slot, slot1 ? styles.filled : ''].join(' ')}>
          {slot1
            ? <WordCardComponent card={slot1} size="small" />
            : <span className={styles.placeholder}>カード1<br/><small>タップして選択</small></span>
          }
        </div>

        <div className={styles.plus}>＋</div>

        <div className={[styles.slot, slot2 ? styles.filled : ''].join(' ')}>
          {slot2
            ? <WordCardComponent card={slot2} size="small" />
            : <span className={styles.placeholder}>カード2<br/><small>タップして選択</small></span>
          }
        </div>

        <div className={styles.arrow}>→</div>

        <div className={[styles.slot, styles.resultSlot, result ? styles.resultFilled : ''].join(' ')}>
          {result
            ? <WordCardComponent card={result} size="small" isNew={!isCrafting} />
            : isCrafting
              ? <div className={styles.crafting}><span className={styles.spinner}>⚗️</span></div>
              : <span className={styles.placeholder}>結果</span>
          }
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          className={[styles.craftBtn, canCraft ? styles.active : ''].join(' ')}
          onClick={onCraft}
          disabled={!canCraft || isCrafting}
          aria-label="錬金術を実行"
        >
          {isCrafting ? '錬成中...' : '⚗️ 錬成する'}
        </button>
        <button className={styles.clearBtn} onClick={onClear} aria-label="スロットをクリア">
          クリア
        </button>
      </div>
    </div>
  )
}
