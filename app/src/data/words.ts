export type Element = 'fire' | 'water' | 'wind' | 'earth' | 'light' | 'dark' | 'life' | 'time' | 'mind' | 'void'

export interface WordCard {
  id: string
  name: string
  emoji: string
  element: Element
  description: string
  tier: number // 1=初期, 2=合成品, 3=レア
}

export interface Recipe {
  input1: string // card id
  input2: string // card id
  output: string // card id
}

// 初期解放カード（tier 1）
export const INITIAL_CARDS: WordCard[] = [
  { id: 'fire', name: '炎', emoji: '🔥', element: 'fire', description: '全てを燃やす原初の力', tier: 1 },
  { id: 'water', name: '水', emoji: '💧', element: 'water', description: '流れる命の源', tier: 1 },
  { id: 'wind', name: '風', emoji: '🌬️', element: 'wind', description: '形なき自由の象徴', tier: 1 },
  { id: 'earth', name: '土', emoji: '🌍', element: 'earth', description: '万物を育む大地', tier: 1 },
  { id: 'light', name: '光', emoji: '✨', element: 'light', description: '闇を照らす真実の輝き', tier: 1 },
  { id: 'dark', name: '闇', emoji: '🌑', element: 'dark', description: '深淵に潜む静寂', tier: 1 },
]

// 合成で解放されるカード（tier 2, 3）
export const CRAFTABLE_CARDS: WordCard[] = [
  // tier 2
  { id: 'steam', name: '蒸気', emoji: '♨️', element: 'wind', description: '炎と水の交わりが生む白い吐息', tier: 2 },
  { id: 'magma', name: 'マグマ', emoji: '🌋', element: 'fire', description: '大地の奥底で煮えたぎる灼熱', tier: 2 },
  { id: 'storm', name: '嵐', emoji: '⛈️', element: 'wind', description: '風と水が踊り狂う自然の怒り', tier: 2 },
  { id: 'dust', name: '塵', emoji: '🌫️', element: 'earth', description: '風が舞い上げる記憶の断片', tier: 2 },
  { id: 'aurora', name: 'オーロラ', emoji: '🌌', element: 'light', description: '光と風が織りなす天の幕', tier: 2 },
  { id: 'shadow', name: '影', emoji: '🌒', element: 'dark', description: '光があるから生まれる存在', tier: 2 },
  { id: 'life', name: '生命', emoji: '🌱', element: 'life', description: '水と土から芽吹く奇跡', tier: 2 },
  { id: 'void', name: '虚無', emoji: '⚫', element: 'void', description: '光も闇も消えた空白', tier: 2 },
  { id: 'lightning', name: '雷', emoji: '⚡', element: 'fire', description: '風と光が衝突して生まれる閃光', tier: 2 },
  { id: 'ice', name: '氷', emoji: '🧊', element: 'water', description: '時間が止まった水の結晶', tier: 2 },
  { id: 'mud', name: '泥', emoji: '🟤', element: 'earth', description: '水と土が溶け合った原初の素材', tier: 2 },
  { id: 'ash', name: '灰', emoji: '🌪️', element: 'earth', description: '炎が残した記憶の痕跡', tier: 2 },
  { id: 'fog', name: '霧', emoji: '🌫️', element: 'water', description: '水と風が混ざり合う境界の場所', tier: 2 },
  { id: 'seed', name: '種', emoji: '🫘', element: 'life', description: '土と光が与える未来への約束', tier: 2 },
  { id: 'nightmare', name: '悪夢', emoji: '👁️', element: 'dark', description: '闇と心が交わる恐怖の迷宮', tier: 2 },
  { id: 'time', name: '時間', emoji: '⏳', element: 'time', description: '光と闇が交互に刻む宇宙の鼓動', tier: 2 },
  { id: 'mind', name: '精神', emoji: '🧠', element: 'mind', description: '光と生命が生み出す内なる宇宙', tier: 2 },
  { id: 'crystal', name: '結晶', emoji: '💎', element: 'earth', description: '時間をかけて完成する大地の芸術', tier: 2 },
  // tier 3
  { id: 'phoenix', name: 'フェニックス', emoji: '🦅', element: 'fire', description: '炎と生命が融合した不死の象徴', tier: 3 },
  { id: 'dragon', name: 'ドラゴン', emoji: '🐉', element: 'fire', description: 'マグマと嵐が結晶化した伝説の存在', tier: 3 },
  { id: 'cosmos', name: '宇宙', emoji: '🌠', element: 'void', description: '虚無と光が広がる無限の可能性', tier: 3 },
  { id: 'soul', name: '魂', emoji: '👻', element: 'mind', description: '精神と時間が紡ぎ出した永遠の本質', tier: 3 },
  { id: 'alchemy', name: '錬金術', emoji: '⚗️', element: 'mind', description: '精神と結晶が解き明かす万物変換の秘法', tier: 3 },
  { id: 'eclipse', name: '蝕', emoji: '🌘', element: 'time', description: '影と時間が重なる宇宙の瞬間', tier: 3 },
  { id: 'paradise', name: '楽園', emoji: '🌴', element: 'life', description: '生命と光が作り上げた理想の場所', tier: 3 },
  { id: 'abyss', name: '深淵', emoji: '🕳️', element: 'void', description: '虚無と闇が果てしなく続く底なしの場所', tier: 3 },
  { id: 'divinity', name: '神性', emoji: '👁️‍🗨️', element: 'light', description: '宇宙と魂が結晶化した最高の存在', tier: 3 },
  { id: 'entropy', name: 'エントロピー', emoji: '🌀', element: 'time', description: '時間が全てを混沌へと導く宇宙の法則', tier: 3 },
]

export const ALL_CARDS: WordCard[] = [...INITIAL_CARDS, ...CRAFTABLE_CARDS]

// 合成レシピ（order非依存: どちらの順でもOK）
export const RECIPES: Recipe[] = [
  // tier 2 合成
  { input1: 'fire', input2: 'water', output: 'steam' },
  { input1: 'fire', input2: 'earth', output: 'magma' },
  { input1: 'wind', input2: 'water', output: 'storm' },
  { input1: 'wind', input2: 'earth', output: 'dust' },
  { input1: 'light', input2: 'wind', output: 'aurora' },
  { input1: 'light', input2: 'dark', output: 'shadow' },
  { input1: 'water', input2: 'earth', output: 'mud' },
  { input1: 'water', input2: 'earth', output: 'life' }, // mudと同じだが別ルート
  { input1: 'earth', input2: 'light', output: 'seed' },
  { input1: 'dark', input2: 'light', output: 'void' },
  { input1: 'wind', input2: 'light', output: 'lightning' },
  { input1: 'water', input2: 'wind', output: 'ice' }, // storm と別ルート
  { input1: 'fire', input2: 'wind', output: 'ash' },
  { input1: 'water', input2: 'dark', output: 'fog' },
  { input1: 'dark', input2: 'wind', output: 'nightmare' },
  { input1: 'light', input2: 'dark', output: 'time' },
  { input1: 'light', input2: 'life', output: 'mind' },
  { input1: 'earth', input2: 'time', output: 'crystal' },
  // tier 3 合成
  { input1: 'fire', input2: 'life', output: 'phoenix' },
  { input1: 'magma', input2: 'storm', output: 'dragon' },
  { input1: 'void', input2: 'light', output: 'cosmos' },
  { input1: 'mind', input2: 'time', output: 'soul' },
  { input1: 'mind', input2: 'crystal', output: 'alchemy' },
  { input1: 'shadow', input2: 'time', output: 'eclipse' },
  { input1: 'life', input2: 'light', output: 'paradise' },
  { input1: 'void', input2: 'dark', output: 'abyss' },
  { input1: 'cosmos', input2: 'soul', output: 'divinity' },
  { input1: 'time', input2: 'chaos', output: 'entropy' },
  { input1: 'abyss', input2: 'time', output: 'entropy' },
]

export function findRecipe(id1: string, id2: string): string | null {
  for (const recipe of RECIPES) {
    if (
      (recipe.input1 === id1 && recipe.input2 === id2) ||
      (recipe.input1 === id2 && recipe.input2 === id1)
    ) {
      return recipe.output
    }
  }
  return null
}

export function getCard(id: string): WordCard | undefined {
  return ALL_CARDS.find(c => c.id === id)
}

// 今日のお題チャレンジ
export const DAILY_CHALLENGES: { target: string; hint: string }[] = [
  { target: 'phoenix', hint: '炎と生命を組み合わせよ' },
  { target: 'dragon', hint: 'マグマと嵐から生まれる伝説' },
  { target: 'cosmos', hint: '虚無に光を当てると？' },
  { target: 'alchemy', hint: '精神と結晶が解き明かす秘法' },
  { target: 'divinity', hint: '宇宙と魂が結晶化した最高存在' },
  { target: 'soul', hint: '精神と時間の産物' },
  { target: 'eclipse', hint: '影と時間が重なる瞬間' },
  { target: 'entropy', hint: '時間が全てを飲み込む法則' },
]
