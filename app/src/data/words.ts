export type Element =
  | 'fire' | 'water' | 'wind' | 'earth' | 'light' | 'dark'
  | 'life' | 'time' | 'mind' | 'void' | 'metal' | 'nature'
  | 'chaos' | 'order' | 'dream' | 'death'

export interface WordCard {
  id: string
  name: string
  emoji: string
  element: Element
  description: string
  tier: number // 1=初期, 2=合成品, 3=レア, 4=究極
}

export interface Recipe {
  input1: string
  input2: string
  output: string
}

// ─────────────────────────────────────────
// Tier 1: 初期解放カード（8枚）
// ─────────────────────────────────────────
export const INITIAL_CARDS: WordCard[] = [
  { id: 'fire',  name: '炎',  emoji: '🔥', element: 'fire',  description: '全てを燃やす原初の力',       tier: 1 },
  { id: 'water', name: '水',  emoji: '💧', element: 'water', description: '流れる命の源',               tier: 1 },
  { id: 'wind',  name: '風',  emoji: '🌬️', element: 'wind',  description: '形なき自由の象徴',           tier: 1 },
  { id: 'earth', name: '土',  emoji: '🌍', element: 'earth', description: '万物を育む大地',             tier: 1 },
  { id: 'light', name: '光',  emoji: '✨', element: 'light', description: '闇を照らす真実の輝き',       tier: 1 },
  { id: 'dark',  name: '闇',  emoji: '🌑', element: 'dark',  description: '深淵に潜む静寂',             tier: 1 },
  { id: 'metal', name: '金属', emoji: '⚙️', element: 'metal', description: '大地から生まれた硬き意志', tier: 1 },
  { id: 'wood',  name: '木',  emoji: '🌿', element: 'nature', description: '大地と光が育む生の柱',     tier: 1 },
]

// ─────────────────────────────────────────
// Tier 2: 合成カード（約40枚）
// ─────────────────────────────────────────
export const TIER2_CARDS: WordCard[] = [
  // 自然現象
  { id: 'steam',     name: '蒸気',       emoji: '♨️',  element: 'wind',   description: '炎と水の交わりが生む白い吐息',         tier: 2 },
  { id: 'magma',     name: 'マグマ',     emoji: '🌋',  element: 'fire',   description: '大地の奥底で煮えたぎる灼熱',           tier: 2 },
  { id: 'storm',     name: '嵐',         emoji: '⛈️',  element: 'wind',   description: '風と水が踊り狂う自然の怒り',           tier: 2 },
  { id: 'dust',      name: '塵',         emoji: '🌫️',  element: 'earth',  description: '風が舞い上げる記憶の断片',             tier: 2 },
  { id: 'aurora',    name: 'オーロラ',   emoji: '🌌',  element: 'light',  description: '光と風が織りなす天の幕',               tier: 2 },
  { id: 'shadow',    name: '影',         emoji: '🌒',  element: 'dark',   description: '光があるから生まれる存在',             tier: 2 },
  { id: 'lightning', name: '雷',         emoji: '⚡',  element: 'fire',   description: '風と光が衝突して生まれる閃光',         tier: 2 },
  { id: 'ice',       name: '氷',         emoji: '🧊',  element: 'water',  description: '時間が止まった水の結晶',               tier: 2 },
  { id: 'mud',       name: '泥',         emoji: '🟤',  element: 'earth',  description: '水と土が溶け合った原初の素材',         tier: 2 },
  { id: 'ash',       name: '灰',         emoji: '🌪️',  element: 'earth',  description: '炎が残した記憶の痕跡',                 tier: 2 },
  { id: 'fog',       name: '霧',         emoji: '🌫️',  element: 'water',  description: '水と風が混ざり合う境界の場所',         tier: 2 },
  { id: 'lava',      name: '溶岩',       emoji: '🔴',  element: 'fire',   description: 'マグマが地表へ噴き出した炎の川',       tier: 2 },
  { id: 'snow',      name: '雪',         emoji: '❄️',  element: 'water',  description: '空から降り積もる純白の静寂',           tier: 2 },
  { id: 'rainbow',   name: '虹',         emoji: '🌈',  element: 'light',  description: '雨と光が紡ぐ七色の橋',                 tier: 2 },
  { id: 'tornado',   name: '竜巻',       emoji: '🌪️',  element: 'wind',   description: '風が渦を巻き、全てを飲み込む',         tier: 2 },
  { id: 'sand',      name: '砂',         emoji: '🏜️',  element: 'earth',  description: '風と土が粉砕した大地の破片',           tier: 2 },
  { id: 'smoke',     name: '煙',         emoji: '💨',  element: 'wind',   description: '炎と風が生む曖昧な境界',               tier: 2 },
  { id: 'dew',       name: '露',         emoji: '💦',  element: 'water',  description: '夜と水が触れ合う一瞬の産物',           tier: 2 },
  { id: 'acid',      name: '酸',         emoji: '🧪',  element: 'water',  description: '水と金属が反応した鋭き液体',           tier: 2 },
  // 物質・素材
  { id: 'stone',     name: '石',         emoji: '🪨',  element: 'earth',  description: '大地が圧縮された揺るぎない存在',       tier: 2 },
  { id: 'glass',     name: 'ガラス',     emoji: '🔮',  element: 'earth',  description: '砂が炎の洗礼を受けて生まれた透明',     tier: 2 },
  { id: 'rust',      name: '錆',         emoji: '🔩',  element: 'metal',  description: '金属が時間に侵食された証',             tier: 2 },
  { id: 'steel',     name: '鋼',         emoji: '⚔️',  element: 'metal',  description: '炎が金属を鍛え上げた最高の硬さ',       tier: 2 },
  { id: 'coal',      name: '石炭',       emoji: '🖤',  element: 'earth',  description: '木が大地に眠り続けた結果',             tier: 2 },
  { id: 'oil',       name: '油',         emoji: '🛢️',  element: 'earth',  description: '大地の深部に蓄積された太古の命',       tier: 2 },
  { id: 'gem',       name: '宝石',       emoji: '💍',  element: 'earth',  description: '圧力と時間が生んだ輝ける奇跡',         tier: 2 },
  { id: 'crystal',   name: '結晶',       emoji: '💎',  element: 'earth',  description: '時間をかけて完成する大地の芸術',       tier: 2 },
  // 生命・自然
  { id: 'life',      name: '生命',       emoji: '🌱',  element: 'life',   description: '水と土から芽吹く奇跡',                 tier: 2 },
  { id: 'seed',      name: '種',         emoji: '🫘',  element: 'nature', description: '土と光が与える未来への約束',           tier: 2 },
  { id: 'flower',    name: '花',         emoji: '🌸',  element: 'nature', description: '生命と光が咲かせた美の瞬間',           tier: 2 },
  { id: 'forest',    name: '森',         emoji: '🌲',  element: 'nature', description: '木と時間が積み重ねた命の王国',         tier: 2 },
  { id: 'mushroom',  name: 'キノコ',     emoji: '🍄',  element: 'nature', description: '闇と土と水の奇妙な共存',               tier: 2 },
  { id: 'vine',      name: '蔦',         emoji: '🍃',  element: 'nature', description: '木と風が生む縛るものと自由の矛盾',     tier: 2 },
  { id: 'coral',     name: '珊瑚',       emoji: '🪸',  element: 'life',   description: '海と生命が作り上げた海底の都市',       tier: 2 },
  // 概念・抽象
  { id: 'void',      name: '虚無',       emoji: '⚫',  element: 'void',   description: '光も闇も消えた空白',                   tier: 2 },
  { id: 'time',      name: '時間',       emoji: '⏳',  element: 'time',   description: '光と闇が交互に刻む宇宙の鼓動',         tier: 2 },
  { id: 'mind',      name: '精神',       emoji: '🧠',  element: 'mind',   description: '光と生命が生み出す内なる宇宙',         tier: 2 },
  { id: 'nightmare', name: '悪夢',       emoji: '👁️',  element: 'dark',   description: '闇と精神が交わる恐怖の迷宮',           tier: 2 },
  { id: 'dream',     name: '夢',         emoji: '💭',  element: 'dream',  description: '精神と闇の狭間に生まれる幻',           tier: 2 },
  { id: 'memory',    name: '記憶',       emoji: '📿',  element: 'mind',   description: '時間と精神が蓄える過去の欠片',         tier: 2 },
  { id: 'chaos',     name: '混沌',       emoji: '🌀',  element: 'chaos',  description: 'あらゆるものが秩序なく渦巻く原初',     tier: 2 },
  { id: 'order',     name: '秩序',       emoji: '📐',  element: 'order',  description: '混沌に形を与え法則を生む力',           tier: 2 },
  { id: 'death',     name: '死',         emoji: '💀',  element: 'death',  description: '生命の反側に静かに佇む終焉',           tier: 2 },
  { id: 'blood',     name: '血',         emoji: '🩸',  element: 'life',   description: '生命が流れる赤き川',                   tier: 2 },
  { id: 'bone',      name: '骨',         emoji: '🦴',  element: 'death',  description: '生命が去った後に残る形の記憶',         tier: 2 },
  { id: 'curse',     name: '呪い',       emoji: '🔮',  element: 'dark',   description: '闇と精神が結びつく見えない鎖',         tier: 2 },
  { id: 'music',     name: '音楽',       emoji: '🎵',  element: 'wind',   description: '風と精神が共鳴して生まれる波',         tier: 2 },
  { id: 'mirror',    name: '鏡',         emoji: '🪞',  element: 'light',  description: '光と金属が作る現実の複製',             tier: 2 },
  { id: 'fire2',     name: '炎上',       emoji: '🔥',  element: 'fire',   description: 'いったん何かが燃え始めたら止められない',tier: 2 },
]

// ─────────────────────────────────────────
// Tier 3: レアカード（約25枚）
// ─────────────────────────────────────────
export const TIER3_CARDS: WordCard[] = [
  { id: 'phoenix',    name: 'フェニックス', emoji: '🦅',  element: 'fire',   description: '炎と生命が融合した不死の象徴',             tier: 3 },
  { id: 'dragon',     name: 'ドラゴン',   emoji: '🐉',  element: 'fire',   description: 'マグマと嵐が結晶化した伝説の存在',         tier: 3 },
  { id: 'cosmos',     name: '宇宙',       emoji: '🌠',  element: 'void',   description: '虚無と光が広がる無限の可能性',             tier: 3 },
  { id: 'soul',       name: '魂',         emoji: '👻',  element: 'mind',   description: '精神と時間が紡ぎ出した永遠の本質',         tier: 3 },
  { id: 'alchemy',    name: '錬金術',     emoji: '⚗️',  element: 'mind',   description: '精神と結晶が解き明かす万物変換の秘法',     tier: 3 },
  { id: 'eclipse',    name: '蝕',         emoji: '🌘',  element: 'time',   description: '影と時間が重なる宇宙の瞬間',               tier: 3 },
  { id: 'paradise',   name: '楽園',       emoji: '🌴',  element: 'life',   description: '生命と光が作り上げた理想の場所',           tier: 3 },
  { id: 'abyss',      name: '深淵',       emoji: '🕳️',  element: 'void',   description: '虚無と闇が果てしなく続く底なしの場所',     tier: 3 },
  { id: 'entropy',    name: 'エントロピー', emoji: '🌀', element: 'time',   description: '時間が全てを混沌へと導く宇宙の法則',       tier: 3 },
  { id: 'golem',      name: 'ゴーレム',   emoji: '🗿',  element: 'earth',  description: '泥と精神が宿った大地の守護者',             tier: 3 },
  { id: 'leviathan',  name: 'リヴァイアサン', emoji: '🐋', element: 'water', description: '嵐と深淵が生んだ海の覇者',             tier: 3 },
  { id: 'angel',      name: '天使',       emoji: '👼',  element: 'light',  description: '光と魂が融合した天空の使者',               tier: 3 },
  { id: 'demon',      name: '悪魔',       emoji: '😈',  element: 'dark',   description: '闇と魂が堕落して生まれた誘惑者',           tier: 3 },
  { id: 'singularity',name: '特異点',     emoji: '🌟',  element: 'void',   description: '全ての可能性が一点に収束する瞬間',         tier: 3 },
  { id: 'labyrinth',  name: '迷宮',       emoji: '🏛️',  element: 'mind',   description: '記憶と石が組み上げた出口なき思考',         tier: 3 },
  { id: 'apocalypse', name: '終末',       emoji: '💥',  element: 'chaos',  description: '混沌と炎が世界の終わりを告げる',           tier: 3 },
  { id: 'genesis',    name: '創世',       emoji: '🌅',  element: 'light',  description: '秩序と生命が最初の朝を作った瞬間',         tier: 3 },
  { id: 'unicorn',    name: 'ユニコーン', emoji: '🦄',  element: 'nature', description: '森と夢が生んだ純白の奇跡',                 tier: 3 },
  { id: 'mermaid',    name: '人魚',       emoji: '🧜',  element: 'water',  description: '海と夢が境界で生んだ存在',                 tier: 3 },
  { id: 'blackhole',  name: 'ブラックホール', emoji: '⚫', element: 'void', description: '深淵と重力が時空を飲み込む終点',           tier: 3 },
  { id: 'karma',      name: 'カルマ',     emoji: '☯️',  element: 'time',   description: '過去の行いが現在に波紋を広げる法則',       tier: 3 },
  { id: 'nirvana',    name: '涅槃',       emoji: '🕊️',  element: 'void',   description: '全ての執着が消えた完全な静寂',             tier: 3 },
  { id: 'philosopher_stone', name: '賢者の石', emoji: '🟡', element: 'metal', description: '錬金術が到達した全変換の頂点',        tier: 3 },
  { id: 'pandora',    name: 'パンドラの箱', emoji: '📦', element: 'chaos',  description: '希望と災いを同時に封じた秘密の器',         tier: 3 },
  { id: 'ouroboros',  name: 'ウロボロス', emoji: '🐍',  element: 'time',   description: '自らを食む蛇——終わりと始まりの一致',       tier: 3 },
]

// ─────────────────────────────────────────
// Tier 4: 究極カード（5枚）
// ─────────────────────────────────────────
export const TIER4_CARDS: WordCard[] = [
  { id: 'divinity',   name: '神性',       emoji: '👁️‍🗨️', element: 'light',  description: '宇宙と魂が結晶化した最高の存在',           tier: 4 },
  { id: 'oblivion',   name: '忘却',       emoji: '🌌',  element: 'void',   description: '深淵と時間が記憶を完全に消し去った果て',   tier: 4 },
  { id: 'big_bang',   name: 'ビッグバン', emoji: '💫',  element: 'chaos',  description: '混沌と虚無が爆発し宇宙が誕生した瞬間',     tier: 4 },
  { id: 'akashic',    name: 'アカシックレコード', emoji: '📖', element: 'mind', description: '全ての記憶と時間が刻まれた宇宙の書',     tier: 4 },
  { id: 'god',        name: '神',         emoji: '🌟',  element: 'light',  description: '全てを超越し全てを包む究極の存在',           tier: 4 },
]

export const ALL_CARDS: WordCard[] = [
  ...INITIAL_CARDS,
  ...TIER2_CARDS,
  ...TIER3_CARDS,
  ...TIER4_CARDS,
]

export const CRAFTABLE_CARDS: WordCard[] = [
  ...TIER2_CARDS,
  ...TIER3_CARDS,
  ...TIER4_CARDS,
]

// ─────────────────────────────────────────
// レシピ（120件超）
// ─────────────────────────────────────────
export const RECIPES: Recipe[] = [
  // ── 初期カード同士 → tier2 ──────────────────
  { input1: 'fire',  input2: 'water',  output: 'steam' },
  { input1: 'fire',  input2: 'earth',  output: 'magma' },
  { input1: 'fire',  input2: 'wind',   output: 'smoke' },
  { input1: 'fire',  input2: 'light',  output: 'lightning' },
  { input1: 'fire',  input2: 'dark',   output: 'ash' },
  { input1: 'fire',  input2: 'metal',  output: 'steel' },
  { input1: 'fire',  input2: 'wood',   output: 'coal' },
  { input1: 'water', input2: 'wind',   output: 'storm' },
  { input1: 'water', input2: 'earth',  output: 'mud' },
  { input1: 'water', input2: 'light',  output: 'rainbow' },
  { input1: 'water', input2: 'dark',   output: 'fog' },
  { input1: 'water', input2: 'metal',  output: 'rust' },
  { input1: 'water', input2: 'wood',   output: 'life' },
  { input1: 'wind',  input2: 'earth',  output: 'dust' },
  { input1: 'wind',  input2: 'light',  output: 'aurora' },
  { input1: 'wind',  input2: 'dark',   output: 'nightmare' },
  { input1: 'wind',  input2: 'metal',  output: 'music' },
  { input1: 'wind',  input2: 'wood',   output: 'vine' },
  { input1: 'earth', input2: 'light',  output: 'seed' },
  { input1: 'earth', input2: 'dark',   output: 'mushroom' },
  { input1: 'earth', input2: 'metal',  output: 'stone' },
  { input1: 'earth', input2: 'wood',   output: 'forest' },
  { input1: 'light', input2: 'dark',   output: 'shadow' },
  { input1: 'light', input2: 'metal',  output: 'mirror' },
  { input1: 'light', input2: 'wood',   output: 'flower' },
  { input1: 'dark',  input2: 'metal',  output: 'curse' },
  { input1: 'dark',  input2: 'wood',   output: 'nightmare' },
  { input1: 'metal', input2: 'wood',   output: 'gem' },
  // ── 初期カード同士 → 特殊 ──────────────────
  { input1: 'light', input2: 'dark',   output: 'time' },
  { input1: 'fire',  input2: 'water',  output: 'chaos' }, // 別ルート
  { input1: 'wind',  input2: 'dark',   output: 'void' },
  { input1: 'water', input2: 'dark',   output: 'death' },
  { input1: 'earth', input2: 'water',  output: 'oil' },
  { input1: 'wind',  input2: 'water',  output: 'ice' },
  { input1: 'earth', input2: 'time',   output: 'crystal' },

  // ── tier2 × 初期カード → tier2 ──────────────
  { input1: 'magma',  input2: 'water',  output: 'stone' },
  { input1: 'magma',  input2: 'wind',   output: 'ash' },
  { input1: 'steam',  input2: 'wind',   output: 'tornado' },
  { input1: 'storm',  input2: 'earth',  output: 'sand' },
  { input1: 'storm',  input2: 'fire',   output: 'lightning' },
  { input1: 'ice',    input2: 'fire',   output: 'steam' },
  { input1: 'ice',    input2: 'light',  output: 'crystal' },
  { input1: 'mud',    input2: 'fire',   output: 'stone' },
  { input1: 'sand',   input2: 'fire',   output: 'glass' },
  { input1: 'sand',   input2: 'wind',   output: 'tornado' },
  { input1: 'ash',    input2: 'water',  output: 'mud' },
  { input1: 'stone',  input2: 'fire',   output: 'magma' },
  { input1: 'stone',  input2: 'water',  output: 'gem' },
  { input1: 'steel',  input2: 'water',  output: 'rust' },
  { input1: 'steel',  input2: 'wind',   output: 'music' },
  { input1: 'coal',   input2: 'fire',   output: 'ash' },
  { input1: 'coal',   input2: 'earth',  output: 'oil' },
  { input1: 'oil',    input2: 'fire',   output: 'lava' },
  { input1: 'lava',   input2: 'water',  output: 'stone' },
  { input1: 'rust',   input2: 'earth',  output: 'dust' },
  { input1: 'glass',  input2: 'light',  output: 'rainbow' },
  { input1: 'glass',  input2: 'dark',   output: 'mirror' },
  { input1: 'gem',    input2: 'light',  output: 'crystal' },
  { input1: 'life',   input2: 'light',  output: 'mind' },
  { input1: 'life',   input2: 'water',  output: 'coral' },
  { input1: 'life',   input2: 'dark',   output: 'blood' },
  { input1: 'life',   input2: 'death',  output: 'bone' },
  { input1: 'seed',   input2: 'water',  output: 'flower' },
  { input1: 'seed',   input2: 'earth',  output: 'forest' },
  { input1: 'flower', input2: 'wind',   output: 'dew' },
  { input1: 'forest', input2: 'dark',   output: 'mushroom' },
  { input1: 'forest', input2: 'water',  output: 'vine' },
  { input1: 'void',   input2: 'light',  output: 'time' },
  { input1: 'void',   input2: 'dark',   output: 'abyss' }, // tier3ルート
  { input1: 'time',   input2: 'metal',  output: 'rust' },
  { input1: 'time',   input2: 'life',   output: 'death' },
  { input1: 'time',   input2: 'dark',   output: 'nightmare' },
  { input1: 'time',   input2: 'mind',   output: 'memory' },
  { input1: 'mind',   input2: 'dark',   output: 'nightmare' },
  { input1: 'mind',   input2: 'fire',   output: 'chaos' },
  { input1: 'mind',   input2: 'light',  output: 'order' },
  { input1: 'mind',   input2: 'water',  output: 'dream' },
  { input1: 'mind',   input2: 'wind',   output: 'music' },
  { input1: 'chaos',  input2: 'earth',  output: 'mud' },
  { input1: 'chaos',  input2: 'light',  output: 'order' },
  { input1: 'order',  input2: 'earth',  output: 'stone' },
  { input1: 'order',  input2: 'metal',  output: 'crystal' },
  { input1: 'death',  input2: 'fire',   output: 'ash' },
  { input1: 'death',  input2: 'earth',  output: 'bone' },
  { input1: 'death',  input2: 'dark',   output: 'void' },
  { input1: 'curse',  input2: 'water',  output: 'fog' },
  { input1: 'curse',  input2: 'mind',   output: 'nightmare' },
  { input1: 'dream',  input2: 'dark',   output: 'nightmare' },
  { input1: 'dream',  input2: 'light',  output: 'memory' },
  { input1: 'music',  input2: 'water',  output: 'coral' },
  { input1: 'blood',  input2: 'earth',  output: 'mud' },
  { input1: 'blood',  input2: 'fire',   output: 'ash' },
  { input1: 'acid',   input2: 'metal',  output: 'rust' },
  { input1: 'acid',   input2: 'stone',  output: 'sand' },
  { input1: 'mirror', input2: 'dark',   output: 'shadow' },
  { input1: 'snow',   input2: 'fire',   output: 'steam' },
  { input1: 'snow',   input2: 'wind',   output: 'ice' },

  // ── tier2 同士 → tier3 ──────────────────────
  { input1: 'life',      input2: 'fire',       output: 'phoenix' },
  { input1: 'magma',     input2: 'storm',      output: 'dragon' },
  { input1: 'void',      input2: 'light',      output: 'cosmos' },
  { input1: 'mind',      input2: 'time',       output: 'soul' },
  { input1: 'mind',      input2: 'crystal',    output: 'alchemy' },
  { input1: 'shadow',    input2: 'time',       output: 'eclipse' },
  { input1: 'life',      input2: 'seed',       output: 'paradise' },
  { input1: 'void',      input2: 'dark',       output: 'abyss' },
  { input1: 'abyss',     input2: 'time',       output: 'entropy' },
  { input1: 'chaos',     input2: 'time',       output: 'entropy' },
  { input1: 'mud',       input2: 'mind',       output: 'golem' },
  { input1: 'storm',     input2: 'abyss',      output: 'leviathan' },
  { input1: 'soul',      input2: 'light',      output: 'angel' },
  { input1: 'soul',      input2: 'dark',       output: 'demon' },
  { input1: 'void',      input2: 'cosmos',     output: 'singularity' },
  { input1: 'memory',    input2: 'crystal',    output: 'labyrinth' },
  { input1: 'chaos',     input2: 'fire',       output: 'apocalypse' },
  { input1: 'order',     input2: 'light',      output: 'genesis' },
  { input1: 'dream',     input2: 'forest',     output: 'unicorn' },
  { input1: 'dream',     input2: 'coral',      output: 'mermaid' },
  { input1: 'abyss',     input2: 'void',       output: 'blackhole' },
  { input1: 'time',      input2: 'death',      output: 'karma' },
  { input1: 'death',     input2: 'void',       output: 'nirvana' },
  { input1: 'alchemy',   input2: 'metal',      output: 'philosopher_stone' },
  { input1: 'chaos',     input2: 'void',       output: 'pandora' },
  { input1: 'time',      input2: 'ouroboros',  output: 'entropy' },
  { input1: 'death',     input2: 'life',       output: 'ouroboros' },
  { input1: 'steel',     input2: 'alchemy',    output: 'philosopher_stone' },
  { input1: 'lightning', input2: 'storm',      output: 'dragon' },
  { input1: 'flower',    input2: 'dream',      output: 'paradise' },
  { input1: 'curse',     input2: 'death',      output: 'demon' },
  { input1: 'light',     input2: 'soul',       output: 'angel' },
  { input1: 'mirror',    input2: 'soul',       output: 'abyss' },
  { input1: 'music',     input2: 'dream',      output: 'soul' },
  { input1: 'bone',      input2: 'curse',      output: 'demon' },

  // ── tier3 同士・tier3+初期 → tier4 ─────────
  { input1: 'cosmos',    input2: 'soul',       output: 'divinity' },
  { input1: 'angel',     input2: 'cosmos',     output: 'divinity' },
  { input1: 'abyss',     input2: 'entropy',    output: 'oblivion' },
  { input1: 'blackhole', input2: 'void',       output: 'oblivion' },
  { input1: 'apocalypse',input2: 'genesis',    output: 'big_bang' },
  { input1: 'chaos',     input2: 'singularity',output: 'big_bang' },
  { input1: 'labyrinth', input2: 'akashic',    output: 'god' },
  { input1: 'memory',    input2: 'cosmos',     output: 'akashic' },
  { input1: 'soul',      input2: 'karma',      output: 'akashic' },
  { input1: 'divinity',  input2: 'big_bang',   output: 'god' },
  { input1: 'nirvana',   input2: 'divinity',   output: 'god' },
  { input1: 'philosopher_stone', input2: 'soul', output: 'divinity' },
  { input1: 'ouroboros', input2: 'cosmos',     output: 'akashic' },
  { input1: 'entropy',   input2: 'genesis',    output: 'big_bang' },
]

/** 同一組み合わせに対する全レシピ結果を返す */
export function findAllRecipes(id1: string, id2: string): string[] {
  return RECIPES
    .filter(r =>
      (r.input1 === id1 && r.input2 === id2) ||
      (r.input1 === id2 && r.input2 === id1)
    )
    .map(r => r.output)
}

/** 未解放カードを優先して1つ返す（全て既知なら最初のものを返す） */
export function findRecipe(id1: string, id2: string, unlocked?: Set<string>): string | null {
  const outputs = findAllRecipes(id1, id2)
  if (outputs.length === 0) return null
  if (!unlocked) return outputs[0]
  const newOne = outputs.find(o => !unlocked.has(o))
  return newOne ?? outputs[0]
}

export function getCard(id: string): WordCard | undefined {
  return ALL_CARDS.find(c => c.id === id)
}

// ─────────────────────────────────────────
// 今日のお題チャレンジ（20件）
// ─────────────────────────────────────────
export const DAILY_CHALLENGES: { target: string; hint: string }[] = [
  { target: 'phoenix',    hint: '炎と生命を組み合わせよ' },
  { target: 'dragon',     hint: 'マグマと嵐から生まれる伝説' },
  { target: 'cosmos',     hint: '虚無に光を当てると？' },
  { target: 'alchemy',    hint: '精神と結晶が解き明かす秘法' },
  { target: 'divinity',   hint: '宇宙と魂が結晶化した最高存在' },
  { target: 'soul',       hint: '精神と時間の産物' },
  { target: 'eclipse',    hint: '影と時間が重なる瞬間' },
  { target: 'entropy',    hint: '深淵と時間が生む法則' },
  { target: 'golem',      hint: '泥に精神を宿せ' },
  { target: 'angel',      hint: '魂と光が昇華する' },
  { target: 'demon',      hint: '魂が闇に堕ちると？' },
  { target: 'genesis',    hint: '秩序と光が生む最初の朝' },
  { target: 'apocalypse', hint: '混沌と炎が世界を終わらせる' },
  { target: 'unicorn',    hint: '森と夢が生む純白の奇跡' },
  { target: 'blackhole',  hint: '深淵と虚無が時空を飲む' },
  { target: 'ouroboros',  hint: '死と生命が一つになると？' },
  { target: 'big_bang',   hint: '終末と創世が重なる瞬間' },
  { target: 'akashic',    hint: '記憶と宇宙が刻む書' },
  { target: 'god',        hint: '全ての究極の先に在るもの' },
  { target: 'nirvana',    hint: '死と虚無が辿る静寂' },
]
