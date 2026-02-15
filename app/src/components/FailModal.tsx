import styles from './FailModal.module.css'

interface Props {
  onClose: () => void
}

const FAIL_MESSAGES = [
  '組み合わせが合わなかった…別の組み合わせを試してみよう',
  'その組み合わせでは何も生まれなかった。まだ見ぬ法則があるはず',
  '錬金術は難しい。この素材の相性は悪いようだ',
  '深淵は答えてくれなかった。別の道を探せ',
]

export default function FailModal({ onClose }: Props) {
  const msg = FAIL_MESSAGES[Math.floor(Math.random() * FAIL_MESSAGES.length)]

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.icon}>💨</div>
        <div className={styles.title}>錬成失敗</div>
        <div className={styles.message}>{msg}</div>
        <button className={styles.btn} onClick={onClose} autoFocus>
          もう一度試す
        </button>
      </div>
    </div>
  )
}
