import { useState, useCallback } from 'react'
import type { WordCard } from './data/words'
import {
  INITIAL_CARDS,
  ALL_CARDS,
  findRecipe,
  getCard,
} from './data/words'
import WordCardComponent from './components/WordCard'
import CraftingSlot from './components/CraftingSlot'
import Codex from './components/Codex'
import DailyChallenge from './components/DailyChallenge'
import ResultModal from './components/ResultModal'
import FailModal from './components/FailModal'
import './App.css'

const STORAGE_KEY = 'word-alchemy-unlocked'

type Tab = 'craft' | 'codex'

function loadUnlocked(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return new Set(JSON.parse(raw))
  } catch {}
  return new Set(INITIAL_CARDS.map(c => c.id))
}

function saveUnlocked(set: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]))
}

export default function App() {
  const [unlocked, setUnlocked] = useState<Set<string>>(loadUnlocked)
  const [slot1, setSlot1] = useState<WordCard | null>(null)
  const [slot2, setSlot2] = useState<WordCard | null>(null)
  const [resultCard, setResultCard] = useState<WordCard | null>(null)
  const [resultIsNew, setResultIsNew] = useState(false)
  const [isCrafting, setIsCrafting] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [showFail, setShowFail] = useState(false)
  const [newlyUnlocked, setNewlyUnlocked] = useState<Set<string>>(new Set())
  const [tab, setTab] = useState<Tab>('craft')

  // 解放済みカード（初期+合成済み）
  const unlockedCards = ALL_CARDS.filter(c => unlocked.has(c.id))

  const handleCardSelect = useCallback((card: WordCard) => {
    if (!slot1) {
      setSlot1(card)
    } else if (!slot2) {
      if (card.id === slot1.id) return // 同じカードは不可
      setSlot2(card)
    } else {
      // 両方埋まっていたらslot1を差し替え
      setSlot1(card)
      setSlot2(null)
    }
  }, [slot1, slot2])

  const handleCraft = useCallback(() => {
    if (!slot1 || !slot2) return
    setIsCrafting(true)

    setTimeout(() => {
      const outputId = findRecipe(slot1.id, slot2.id)
      setIsCrafting(false)

      if (!outputId) {
        setShowFail(true)
        return
      }

      const card = getCard(outputId)
      if (!card) return

      const isNew = !unlocked.has(outputId)

      if (isNew) {
        const newSet = new Set(unlocked)
        newSet.add(outputId)
        setUnlocked(newSet)
        saveUnlocked(newSet)
        setNewlyUnlocked(prev => new Set([...prev, outputId]))
      }

      setResultCard(card)
      setResultIsNew(isNew)
      setShowResult(true)
    }, 900)
  }, [slot1, slot2, unlocked])

  const handleClear = () => {
    setSlot1(null)
    setSlot2(null)
    setResultCard(null)
  }

  const handleCloseResult = () => {
    setShowResult(false)
    setResultCard(null)
    setSlot1(null)
    setSlot2(null)
  }

  const handleCloseFail = () => {
    setShowFail(false)
  }

  // resetボタン（デバッグ用として非表示: productionでは外す）
  const handleReset = () => {
    const fresh = new Set(INITIAL_CARDS.map(c => c.id))
    setUnlocked(fresh)
    saveUnlocked(fresh)
    setNewlyUnlocked(new Set())
    setSlot1(null)
    setSlot2(null)
  }

  return (
    <div className="app">
      {/* 背景パーティクル */}
      <div className="bg-particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="bg-particle" style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>

      <header className="header">
        <h1 className="logo-title">
          <span className="logo-icon">⚗️</span>
          Word Alchemy
        </h1>
        <p className="tagline">言葉を錬金術で合成し、新たな概念を発見せよ</p>
        <div className="stats">
          <span className="stat">
            📖 {unlocked.size} / {ALL_CARDS.length} 発見
          </span>
        </div>
      </header>

      <nav className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === 'craft'}
          className={['tab-btn', tab === 'craft' ? 'active' : ''].join(' ')}
          onClick={() => setTab('craft')}
        >
          ⚗️ 錬成
        </button>
        <button
          role="tab"
          aria-selected={tab === 'codex'}
          className={['tab-btn', tab === 'codex' ? 'active' : ''].join(' ')}
          onClick={() => setTab('codex')}
        >
          📖 図鑑
        </button>
      </nav>

      <main className="main">
        {tab === 'craft' && (
          <div className="craft-layout">
            <section className="section" aria-label="今日のお題">
              <DailyChallenge unlocked={unlocked} />
            </section>

            <section className="section" aria-label="錬成スロット">
              <h2 className="section-title">錬成スロット</h2>
              <CraftingSlot
                slot1={slot1}
                slot2={slot2}
                result={resultCard}
                isCrafting={isCrafting}
                onCraft={handleCraft}
                onClear={handleClear}
              />
            </section>

            <section className="section" aria-label="所持カード">
              <h2 className="section-title">
                所持カード
                <span className="section-sub">（タップしてスロットにセット）</span>
              </h2>
              <div className="card-grid">
                {unlockedCards.map(card => (
                  <WordCardComponent
                    key={card.id}
                    card={card}
                    onClick={() => handleCardSelect(card)}
                    selected={slot1?.id === card.id || slot2?.id === card.id}
                    isNew={newlyUnlocked.has(card.id)}
                  />
                ))}
              </div>
            </section>

            <button className="reset-btn" onClick={handleReset} aria-label="データリセット">
              🔄 リセット
            </button>
          </div>
        )}

        {tab === 'codex' && (
          <div className="codex-layout">
            <section className="section" aria-label="発見図鑑">
              <h2 className="section-title">発見図鑑</h2>
              <Codex unlocked={unlocked} />
            </section>
          </div>
        )}
      </main>

      {showResult && resultCard && (
        <ResultModal
          card={resultCard}
          isNew={resultIsNew}
          onClose={handleCloseResult}
        />
      )}

      {showFail && (
        <FailModal onClose={handleCloseFail} />
      )}
    </div>
  )
}
