/**
 * 國中九年級形音義複習系統 - 核心資料庫 (data.js)
 * 資料來源：教師提供之 Google Sheet TSV，並經人工校正選項。
 * 共 325 題，分為十三回，每回 25 題。
 */

const RAW_SHEET_DATA =
[
  {
    "round": 1,
    "type": "shape",
    "question": "大「ㄎㄨㄞˋ」朵頤",
    "answer": "快",
    "options": [
      "快",
      "塊",
      "筷",
      "膾"
    ],
    "note": "「大「ㄎㄨㄞˋ」朵頤」的正確答案是「快」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "番「ㄑㄧㄝˊ」炒蛋",
    "answer": "茄",
    "options": [
      "協",
      "伽",
      "笳",
      "茄"
    ],
    "note": "「番「ㄑㄧㄝˊ」炒蛋」的正確答案是「茄」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "刀「ㄒㄧㄠ」麵",
    "answer": "削",
    "options": [
      "消",
      "霄",
      "削",
      "宵"
    ],
    "note": "「刀「ㄒㄧㄠ」麵」的正確答案是「削」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "「ㄊㄨˇ」魠魚",
    "answer": "𩵚",
    "options": [
      "兔",
      "𩵚",
      "土",
      "吐"
    ],
    "note": "「「ㄊㄨˇ」魠魚」的正確答案是「𩵚」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "小米「ㄓㄡ」",
    "answer": "粥",
    "options": [
      "粥",
      "州",
      "洲",
      "週"
    ],
    "note": "「小米「ㄓㄡ」」的正確答案是「粥」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "人參枸「ㄑㄧˇ」",
    "answer": "杞",
    "options": [
      "起",
      "己",
      "紀",
      "杞"
    ],
    "note": "「人參枸「ㄑㄧˇ」」的正確答案是「杞」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "雞「ㄖㄨㄥˊ」玉米濃湯",
    "answer": "茸",
    "options": [
      "絨",
      "容",
      "茸",
      "融"
    ],
    "note": "「雞「ㄖㄨㄥˊ」玉米濃湯」的正確答案是「茸」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "香酥排「ㄌㄜˋ」",
    "answer": "肋",
    "options": [
      "脅",
      "肋",
      "勒",
      "助"
    ],
    "note": "「香酥排「ㄌㄜˋ」」的正確答案是「肋」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "北京「ㄌㄠˋ」餅",
    "answer": "烙",
    "options": [
      "烙",
      "落",
      "洛",
      "絡"
    ],
    "note": "「北京「ㄌㄠˋ」餅」的正確答案是「烙」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "豆「ㄔˇ」牡蠣",
    "answer": "豉",
    "options": [
      "鼓",
      "豆",
      "皷",
      "豉"
    ],
    "note": "「豆「ㄔˇ」牡蠣」的正確答案是「豉」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "「ㄋㄨㄛˋ」米飯",
    "answer": "糯",
    "options": [
      "儒",
      "濡",
      "糯",
      "懦"
    ],
    "note": "「「ㄋㄨㄛˋ」米飯」的正確答案是「糯」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "「ㄘㄠ」米飯",
    "answer": "糙",
    "options": [
      "躁",
      "糙",
      "操",
      "燥"
    ],
    "note": "「「ㄘㄠ」米飯」的正確答案是「糙」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "「ㄐㄩˊ」烤飯",
    "answer": "焗",
    "options": [
      "焗",
      "局",
      "鋦",
      "拘"
    ],
    "note": "「「ㄐㄩˊ」烤飯」的正確答案是「焗」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "涼拌牛「ㄅㄤˋ」",
    "answer": "蒡",
    "options": [
      "旁",
      "榜",
      "膀",
      "蒡"
    ],
    "note": "「涼拌牛「ㄅㄤˋ」」的正確答案是「蒡」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "滷雞「ㄓㄣ」",
    "answer": "胗",
    "options": [
      "針",
      "診",
      "胗",
      "珍"
    ],
    "note": "「滷雞「ㄓㄣ」」的正確答案是「胗」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "紅豆「ㄘㄨㄛˋ」冰",
    "answer": "剉",
    "options": [
      "坐",
      "剉",
      "挫",
      "銼"
    ],
    "note": "「紅豆「ㄘㄨㄛˋ」冰」的正確答案是「剉」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "「ㄧㄢ」芭樂",
    "answer": "醃",
    "options": [
      "醃",
      "淹",
      "掩",
      "奄"
    ],
    "note": "「「ㄧㄢ」芭樂」的正確答案是「醃」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "蒸「ㄌㄧㄡˋ」水",
    "answer": "餾",
    "options": [
      "流",
      "留",
      "榴",
      "餾"
    ],
    "note": "「蒸「ㄌㄧㄡˋ」水」的正確答案是「餾」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "「ㄓㄣ」果拿鐵",
    "answer": "榛",
    "options": [
      "蓁",
      "臻",
      "榛",
      "珍"
    ],
    "note": "「「ㄓㄣ」果拿鐵」的正確答案是「榛」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "歐「ㄌㄟˇ」咖啡",
    "answer": "蕾",
    "options": [
      "壘",
      "蕾",
      "雷",
      "儡"
    ],
    "note": "「歐「ㄌㄟˇ」咖啡」的正確答案是「蕾」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "「ㄐㄩˇ」弱果凍",
    "answer": "蒟",
    "options": [
      "蒟",
      "弱",
      "苟",
      "句"
    ],
    "note": "「「ㄐㄩˇ」弱果凍」的正確答案是「蒟」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "紅燒牛「ㄋㄢˇ」",
    "answer": "腩",
    "options": [
      "南",
      "楠",
      "喃",
      "腩"
    ],
    "note": "「紅燒牛「ㄋㄢˇ」」的正確答案是「腩」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "「ㄌㄨˇ」肉飯",
    "answer": "滷",
    "options": [
      "鹵",
      "擄",
      "滷",
      "魯"
    ],
    "note": "「「ㄌㄨˇ」肉飯」的正確答案是「滷」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "清「ㄉㄨㄣˋ」牛肉",
    "answer": "燉",
    "options": [
      "鈍",
      "燉",
      "頓",
      "噸"
    ],
    "note": "「清「ㄉㄨㄣˋ」牛肉」的正確答案是「燉」。"
  },
  {
    "round": 1,
    "type": "shape",
    "question": "牛「ㄐㄧㄢˋ」切片",
    "answer": "腱",
    "options": [
      "腱",
      "健",
      "鍵",
      "建"
    ],
    "note": "「牛「ㄐㄧㄢˋ」切片」的正確答案是「腱」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「莧」菜小魚的讀音",
    "answer": "ㄒㄧㄢˋ",
    "options": [
      "ㄒㄧㄢ",
      "ㄐㄧㄢˋ",
      "ㄒㄧㄢˊ",
      "ㄒㄧㄢˋ"
    ],
    "note": "「「莧」菜小魚的讀音」的正確答案是「ㄒㄧㄢˋ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "金「桔」檸檬的讀音",
    "answer": "ㄐㄩˊ",
    "options": [
      "ㄐㄩˊ",
      "ㄐㄧㄝˊ",
      "ㄐㄧˊ",
      "ㄐㄩˇ"
    ],
    "note": "「金「桔」檸檬的讀音」的正確答案是「ㄐㄩˊ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "豬「肚」湯的讀音",
    "answer": "ㄉㄨˇ",
    "options": [
      "ㄉㄨ",
      "ㄉㄨˇ",
      "ㄉㄨˋ",
      "ㄊㄨˇ"
    ],
    "note": "「豬「肚」湯的讀音」的正確答案是「ㄉㄨˇ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "牛肉「煲」湯的讀音",
    "answer": "ㄅㄠ",
    "options": [
      "ㄅㄠˋ",
      "ㄆㄠ",
      "ㄅㄠ",
      "ㄅㄠˇ"
    ],
    "note": "「牛肉「煲」湯的讀音」的正確答案是「ㄅㄠ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "元「盅」雞湯的讀音",
    "answer": "ㄓㄨㄥ",
    "options": [
      "ㄓㄨㄥˊ",
      "ㄓㄨㄥ",
      "ㄓㄨㄥˋ",
      "ㄔㄨㄥ"
    ],
    "note": "「元「盅」雞湯的讀音」的正確答案是「ㄓㄨㄥ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "菜「脯」蛋的讀音",
    "answer": "ㄈㄨˇ",
    "options": [
      "ㄈㄨˇ",
      "ㄆㄨˇ",
      "ㄅㄨˇ",
      "ㄅㄨˋ"
    ],
    "note": "「菜「脯」蛋的讀音」的正確答案是「ㄈㄨˇ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "鼎邊「銼」的讀音",
    "answer": "ㄘㄨㄛˋ",
    "options": [
      "ㄘㄨㄛˋ",
      "ㄙㄨㄛ",
      "ㄘㄨㄛ",
      "ㄘㄨㄛˇ"
    ],
    "note": "「鼎邊「銼」的讀音」的正確答案是「ㄘㄨㄛˋ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「腓」力牛排的讀音",
    "answer": "ㄈㄟˊ",
    "options": [
      "ㄈㄟˊ",
      "ㄈㄟ",
      "ㄆㄟˊ",
      "ㄈㄟˇ"
    ],
    "note": "「腓力牛排」的「腓」讀作「ㄈㄟˊ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「煨」牛肉的讀音",
    "answer": "ㄨㄟ",
    "options": [
      "ㄨㄟˋ",
      "ㄨㄟˊ",
      "ㄨㄟˇ",
      "ㄨㄟ"
    ],
    "note": "「「煨」牛肉的讀音」的正確答案是「ㄨㄟ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "新港「飴」的讀音",
    "answer": "ㄧˊ",
    "options": [
      "ㄧˊ",
      "ㄧˋ",
      "ㄊㄞˊ",
      "ㄧˇ"
    ],
    "note": "「新港「飴」的讀音」的正確答案是「ㄧˊ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "草仔「粿」的讀音",
    "answer": "ㄍㄨㄛˇ",
    "options": [
      "ㄍㄨㄛˇ",
      "ㄎㄨㄟˋ",
      "ㄍㄨㄟˇ",
      "ㄎㄨㄛˋ"
    ],
    "note": "「草仔「粿」的讀音」的正確答案是「ㄍㄨㄛˇ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "紅燒蹄「膀」的讀音",
    "answer": "ㄅㄤˇ",
    "options": [
      "ㄆㄤˊ",
      "ㄅㄤ",
      "ㄅㄤˇ",
      "ㄅㄤˋ"
    ],
    "note": "「紅燒蹄「膀」的讀音」的正確答案是「ㄅㄤˇ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "味「噌」湯的讀音",
    "answer": "ㄘㄥ",
    "options": [
      "ㄘㄥ",
      "ㄔㄥˊ",
      "ㄗㄥ",
      "ㄙㄥ"
    ],
    "note": "「味噌湯」的「噌」讀作「ㄘㄥ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「蚵」仔煎的讀音",
    "answer": "ㄜˊ",
    "options": [
      "ㄜˊ",
      "ㄎㄜ",
      "ㄜˋ",
      "ㄏㄜˊ"
    ],
    "note": "「「蚵」仔煎的讀音」的正確答案是「ㄜˊ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "綜「合」果汁的讀音",
    "answer": "ㄏㄜˊ",
    "options": [
      "ㄍㄜˊ",
      "ㄏㄜˋ",
      "ㄜˊ",
      "ㄏㄜˊ"
    ],
    "note": "「綜「合」果汁的讀音」的正確答案是「ㄏㄜˊ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「涮」牛肉的讀音",
    "answer": "ㄕㄨㄢˋ",
    "options": [
      "ㄕㄨㄢˋ",
      "ㄕㄨㄚˋ",
      "ㄕㄨㄚ",
      "ㄙㄨㄢˋ"
    ],
    "note": "「「涮」牛肉的讀音」的正確答案是「ㄕㄨㄢˋ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "牛肉「燴」飯的讀音",
    "answer": "ㄏㄨㄟˋ",
    "options": [
      "ㄏㄨㄟˊ",
      "ㄎㄨㄟˋ",
      "ㄏㄨㄟ",
      "ㄏㄨㄟˋ"
    ],
    "note": "「牛肉「燴」飯的讀音」的正確答案是「ㄏㄨㄟˋ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「餛」飩湯的讀音",
    "answer": "ㄏㄨㄣˊ",
    "options": [
      "ㄏㄨㄣ",
      "ㄏㄨㄥˊ",
      "ㄏㄨㄣˊ",
      "ㄏㄨㄣˋ"
    ],
    "note": "「「餛」飩湯的讀音」的正確答案是「ㄏㄨㄣˊ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「咖」哩飯的讀音",
    "answer": "ㄎㄚ",
    "options": [
      "ㄎㄚˇ",
      "ㄎㄚ",
      "ㄐㄧㄚ",
      "ㄍㄚ"
    ],
    "note": "「「咖」哩飯的讀音」的正確答案是「ㄎㄚ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "蛤「蜊」濃湯的讀音",
    "answer": "ㄌㄧˊ",
    "options": [
      "ㄌㄧˊ",
      "ㄌㄧˋ",
      "ㄌㄧ",
      "ㄍㄚ"
    ],
    "note": "「蛤「蜊」濃湯的讀音」的正確答案是「ㄌㄧˊ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "勾「芡」料理的讀音",
    "answer": "ㄑㄧㄢˋ",
    "options": [
      "ㄑㄧㄥˋ",
      "ㄑㄧㄢˋ",
      "ㄑㄧㄢ",
      "ㄒㄧㄢˋ"
    ],
    "note": "「勾「芡」料理的讀音」的正確答案是「ㄑㄧㄢˋ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「汆」燙肉片的讀音",
    "answer": "ㄘㄨㄢ",
    "options": [
      "ㄘㄨㄢ",
      "ㄔㄨㄢ",
      "ㄘㄨㄢˋ",
      "ㄙㄨㄢ"
    ],
    "note": "「「汆」燙肉片的讀音」的正確答案是「ㄘㄨㄢ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「炸」醬麵的讀音",
    "answer": "ㄓㄚˊ",
    "options": [
      "ㄓㄚˊ",
      "ㄓㄚˋ",
      "ㄓㄚ",
      "ㄗㄚˋ"
    ],
    "note": "「「炸」醬麵的讀音」的正確答案是「ㄓㄚˊ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "肉「燥」飯的讀音",
    "answer": "ㄙㄠˋ",
    "options": [
      "ㄙㄠˋ",
      "ㄗㄠˋ",
      "ㄘㄠˋ",
      "ㄙㄠ"
    ],
    "note": "「肉燥飯」的「燥」讀作「ㄙㄠˋ」。"
  },
  {
    "round": 2,
    "type": "pronunciation",
    "question": "「什」錦炒麵的讀音",
    "answer": "ㄕˊ",
    "options": [
      "ㄕ",
      "ㄕˋ",
      "ㄙˊ",
      "ㄕˊ"
    ],
    "note": "「「什」錦炒麵的讀音」的正確答案是「ㄕˊ」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "水池乾「ㄏㄜˊ」",
    "answer": "涸",
    "options": [
      "固",
      "沽",
      "涸",
      "錮"
    ],
    "note": "「水池乾「ㄏㄜˊ」」的正確答案是「涸」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "「ㄔˋ」吒風雲",
    "answer": "叱",
    "options": [
      "吒",
      "叱",
      "吃",
      "斥"
    ],
    "note": "「「ㄔˋ」吒風雲」的正確答案是「叱」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "「ㄏㄤˋ」瀣一氣",
    "answer": "沆",
    "options": [
      "沆",
      "航",
      "杭",
      "抗"
    ],
    "note": "「「ㄏㄤˋ」瀣一氣」的正確答案是「沆」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "「ㄐㄧㄥ」渭分明",
    "answer": "涇",
    "options": [
      "徑",
      "經",
      "莖",
      "涇"
    ],
    "note": "「「ㄐㄧㄥ」渭分明」的正確答案是「涇」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "正值「ㄕㄤˇ」午",
    "answer": "晌",
    "options": [
      "響",
      "晃",
      "晌",
      "餉"
    ],
    "note": "「正值「ㄕㄤˇ」午」的正確答案是「晌」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "寒「ㄒㄩㄢ」問候",
    "answer": "暄",
    "options": [
      "煊",
      "暄",
      "喧",
      "宣"
    ],
    "note": "「寒「ㄒㄩㄢ」問候」的正確答案是「暄」。"
  },
  {
    "round": 3,
    "type": "pronunciation",
    "question": "落日餘「暉」的讀音",
    "answer": "ㄏㄨㄟ",
    "options": [
      "ㄏㄨㄟ",
      "ㄏㄨㄟˊ",
      "ㄏㄨㄟˇ",
      "ㄏㄨㄟˋ"
    ],
    "note": "「落日餘「暉」的讀音」的正確答案是「ㄏㄨㄟ」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "颯「ㄙㄚˋ」風響",
    "answer": "颯",
    "options": [
      "薩",
      "灑",
      "煞",
      "颯"
    ],
    "note": "「颯「ㄙㄚˋ」風響」的正確答案是「颯」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "廣闊蒼「ㄑㄩㄥ」",
    "answer": "穹",
    "options": [
      "芎",
      "選4",
      "穹",
      "窮"
    ],
    "note": "「廣闊蒼「ㄑㄩㄥ」」的正確答案是「穹」。"
  },
  {
    "round": 3,
    "type": "pronunciation",
    "question": "「曙」光乍現的讀音",
    "answer": "ㄕㄨˋ",
    "options": [
      "ㄕㄨˋ",
      "ㄕㄨˇ",
      "ㄕㄨ",
      "ㄙㄨˋ"
    ],
    "note": "「「曙」光乍現的讀音」的正確答案是「ㄕㄨˋ」。"
  },
  {
    "round": 3,
    "type": "pronunciation",
    "question": "冬溫夏「凊」的讀音",
    "answer": "ㄐㄧㄥˋ",
    "options": [
      "ㄐㄧㄥˋ",
      "ㄑㄧㄥˋ",
      "ㄐㄧㄥ",
      "ㄑㄧㄥ"
    ],
    "note": "「冬溫夏「凊」的讀音」的正確答案是「ㄐㄧㄥˋ」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "夜觀星「ㄒㄧㄡˋ」",
    "answer": "宿",
    "options": [
      "秀",
      "袖",
      "繡",
      "宿"
    ],
    "note": "「夜觀星「ㄒㄧㄡˋ」」的正確答案是「宿」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "「ㄙㄨㄥ」山少林",
    "answer": "嵩",
    "options": [
      "松",
      "崧",
      "嵩",
      "聳"
    ],
    "note": "「「ㄙㄨㄥ」山少林」的正確答案是「嵩」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "「ㄙㄨˋ」夜匪懈",
    "answer": "夙",
    "options": [
      "速",
      "夙",
      "宿",
      "肅"
    ],
    "note": "「「ㄙㄨˋ」夜匪懈」的正確答案是「夙」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "花東「ㄗㄨㄥ」谷",
    "answer": "縱",
    "options": [
      "縱",
      "總",
      "綜",
      "宗"
    ],
    "note": "「花東「ㄗㄨㄥ」谷」的正確答案是「縱」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "餐松飲「ㄐㄧㄢˋ」",
    "answer": "澗",
    "options": [
      "簡",
      "間",
      "漸",
      "澗"
    ],
    "note": "「餐松飲「ㄐㄧㄢˋ」」的正確答案是「澗」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "陷入泥「ㄋㄠˋ」",
    "answer": "淖",
    "options": [
      "綽",
      "罩",
      "淖",
      "悼"
    ],
    "note": "「陷入泥「ㄋㄠˋ」」的正確答案是「淖」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "險要「ㄞˋ」口",
    "answer": "隘",
    "options": [
      "嗌",
      "隘",
      "溢",
      "縊"
    ],
    "note": "「險要「ㄞˋ」口」的正確答案是「隘」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "驚「ㄊㄠˊ」駭浪",
    "answer": "濤",
    "options": [
      "濤",
      "滔",
      "淘",
      "掏"
    ],
    "note": "「驚「ㄊㄠˊ」駭浪」的正確答案是「濤」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "萬「ㄌㄞˋ」俱寂",
    "answer": "籟",
    "options": [
      "賴",
      "瀨",
      "獺",
      "籟"
    ],
    "note": "「萬「ㄌㄞˋ」俱寂」的正確答案是「籟」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "天氣「ㄩˋ」熱",
    "answer": "燠",
    "options": [
      "懊",
      "澳",
      "燠",
      "奧"
    ],
    "note": "「天氣「ㄩˋ」熱」的正確答案是「燠」。"
  },
  {
    "round": 3,
    "type": "pronunciation",
    "question": "未雨綢「繆」的讀音",
    "answer": "ㄇㄡˊ",
    "options": [
      "ㄇㄡˊ",
      "ㄇㄧㄡˋ",
      "ㄌㄧㄠˊ",
      "ㄇㄧㄠˋ"
    ],
    "note": "「未雨綢「繆」的讀音」的正確答案是「ㄇㄡˊ」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "光風「ㄐㄧˋ」月",
    "answer": "霽",
    "options": [
      "霽",
      "濟",
      "際",
      "齊"
    ],
    "note": "「光風「ㄐㄧˋ」月」的正確答案是「霽」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "下起冰「ㄅㄠˊ」",
    "answer": "雹",
    "options": [
      "飽",
      "孢",
      "苞",
      "雹"
    ],
    "note": "「下起冰「ㄅㄠˊ」」的正確答案是「雹」。"
  },
  {
    "round": 3,
    "type": "shape",
    "question": "掃除陰「ㄇㄞˊ」",
    "answer": "霾",
    "options": [
      "邁",
      "釐",
      "霾",
      "埋"
    ],
    "note": "「掃除陰「ㄇㄞˊ」」的正確答案是「霾」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "物腐生「蛆」的讀音",
    "answer": "ㄑㄩ",
    "options": [
      "ㄑㄩ",
      "ㄗㄠˇ",
      "ㄖㄨㄟˋ",
      "ㄐㄩㄝˊ"
    ],
    "note": "「物腐生「蛆」的讀音」的正確答案是「ㄑㄩ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "跳「蚤」市場的讀音",
    "answer": "ㄗㄠˇ",
    "options": [
      "ㄗㄠˇ",
      "ㄖㄨㄟˋ",
      "ㄐㄩㄝˊ",
      "ㄆㄧㄠˊ"
    ],
    "note": "「跳「蚤」市場的讀音」的正確答案是「ㄗㄠˇ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "蚊「蚋」的讀音",
    "answer": "ㄖㄨㄟˋ",
    "options": [
      "ㄖㄨㄟˋ",
      "ㄐㄩㄝˊ",
      "ㄆㄧㄠˊ",
      "ㄍㄨ"
    ],
    "note": "「蚊「蚋」的讀音」的正確答案是「ㄖㄨㄟˋ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "子「孓」的讀音",
    "answer": "ㄐㄩㄝˊ",
    "options": [
      "ㄐㄩㄝˊ",
      "ㄆㄧㄠˊ",
      "ㄍㄨ",
      "ㄋㄠˊ"
    ],
    "note": "「子「孓」的讀音」的正確答案是「ㄐㄩㄝˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "七星「瓢」蟲的讀音",
    "answer": "ㄆㄧㄠˊ",
    "options": [
      "ㄆㄧㄠˊ",
      "ㄍㄨ",
      "ㄋㄠˊ",
      "ㄊㄠ"
    ],
    "note": "「七星「瓢」蟲的讀音」的正確答案是「ㄆㄧㄠˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "螻「蛄」的讀音",
    "answer": "ㄍㄨ",
    "options": [
      "ㄍㄨ",
      "ㄋㄠˊ",
      "ㄊㄠ",
      "ㄧㄤˋ"
    ],
    "note": "「螻「蛄」的讀音」的正確答案是「ㄍㄨ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "「蟯」蟲的讀音",
    "answer": "ㄋㄠˊ",
    "options": [
      "ㄋㄠˊ",
      "ㄊㄠ",
      "ㄧㄤˋ",
      "ㄋㄩㄝˋ"
    ],
    "note": "「「蟯」蟲的讀音」的正確答案是「ㄋㄠˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "有鉤「絛」蟲的讀音",
    "answer": "ㄊㄠ",
    "options": [
      "ㄊㄠ",
      "ㄧㄤˋ",
      "ㄋㄩㄝˋ",
      "ㄉㄨˋ"
    ],
    "note": "「有鉤「絛」蟲的讀音」的正確答案是「ㄊㄠ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "「恙」蟲的讀音",
    "answer": "ㄧㄤˋ",
    "options": [
      "ㄧㄤˋ",
      "ㄋㄩㄝˋ",
      "ㄉㄨˋ",
      "ㄆㄧˊ"
    ],
    "note": "「「恙」蟲的讀音」的正確答案是「ㄧㄤˋ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "「瘧」蚊的讀音",
    "answer": "ㄋㄩㄝˋ",
    "options": [
      "ㄋㄩㄝˋ",
      "ㄉㄨˋ",
      "ㄆㄧˊ",
      "ㄕ"
    ],
    "note": "「「瘧」蚊的讀音」的正確答案是「ㄋㄩㄝˋ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "戶樞不「蠹」的讀音",
    "answer": "ㄉㄨˋ",
    "options": [
      "ㄉㄨˋ",
      "ㄆㄧˊ",
      "ㄕ",
      "ㄇㄥˊ"
    ],
    "note": "「戶樞不「蠹」的讀音」的正確答案是「ㄉㄨˋ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "「蚍」蜉撼樹的讀音",
    "answer": "ㄆㄧˊ",
    "options": [
      "ㄆㄧˊ",
      "ㄕ",
      "ㄇㄥˊ",
      "ㄓㄨㄥ"
    ],
    "note": "「「蚍」蜉撼樹的讀音」的正確答案是「ㄆㄧˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "捫「蝨」而言的讀音",
    "answer": "ㄕ",
    "options": [
      "ㄕ",
      "ㄇㄥˊ",
      "ㄓㄨㄥ",
      "ㄍㄨˇ"
    ],
    "note": "「捫「蝨」而言的讀音」的正確答案是「ㄕ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "蚊「虻」之勞的讀音",
    "answer": "ㄇㄥˊ",
    "options": [
      "ㄇㄥˊ",
      "ㄓㄨㄥ",
      "ㄍㄨˇ",
      "ㄈㄟˇ"
    ],
    "note": "「蚊「虻」之勞的讀音」的正確答案是「ㄇㄥˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "草「螽」的讀音",
    "answer": "ㄓㄨㄥ",
    "options": [
      "ㄓㄨㄥ",
      "ㄍㄨˇ",
      "ㄈㄟˇ",
      "ㄑㄩㄥˊ"
    ],
    "note": "「草「螽」的讀音」的正確答案是「ㄓㄨㄥ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "下「蠱」害人的讀音",
    "answer": "ㄍㄨˇ",
    "options": [
      "ㄍㄨˇ",
      "ㄈㄟˇ",
      "ㄑㄩㄥˊ",
      "ㄇㄚˋ"
    ],
    "note": "「下「蠱」害人的讀音」的正確答案是「ㄍㄨˇ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "「蜚」蠊的讀音",
    "answer": "ㄈㄟˇ",
    "options": [
      "ㄈㄟˇ",
      "ㄑㄩㄥˊ",
      "ㄇㄚˋ",
      "ㄌㄧㄥˊ"
    ],
    "note": "「「蜚」蠊的讀音」的正確答案是「ㄈㄟˇ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "寒「蛩」的讀音",
    "answer": "ㄑㄩㄥˊ",
    "options": [
      "ㄑㄩㄥˊ",
      "ㄇㄚˋ",
      "ㄌㄧㄥˊ",
      "ㄊㄧㄠˊ"
    ],
    "note": "「寒「蛩」的讀音」的正確答案是「ㄑㄩㄥˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "「螞」蚱的讀音",
    "answer": "ㄇㄚˋ",
    "options": [
      "ㄇㄚˋ",
      "ㄌㄧㄥˊ",
      "ㄊㄧㄠˊ",
      "ㄏㄨㄛˋ"
    ],
    "note": "「「螞」蚱的讀音」的正確答案是「ㄇㄚˋ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "螟「蛉」的讀音",
    "answer": "ㄌㄧㄥˊ",
    "options": [
      "ㄌㄧㄥˊ",
      "ㄊㄧㄠˊ",
      "ㄏㄨㄛˋ",
      "ㄇㄠˊ"
    ],
    "note": "「螟「蛉」的讀音」的正確答案是「ㄌㄧㄥˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "螗「蜩」的讀音",
    "answer": "ㄊㄧㄠˊ",
    "options": [
      "ㄊㄧㄠˊ",
      "ㄏㄨㄛˋ",
      "ㄇㄠˊ",
      "ㄑㄧㄡˊ"
    ],
    "note": "「螗「蜩」的讀音」的正確答案是「ㄊㄧㄠˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "尺「蠖」之屈的讀音",
    "answer": "ㄏㄨㄛˋ",
    "options": [
      "ㄏㄨㄛˋ",
      "ㄇㄠˊ",
      "ㄑㄧㄡˊ",
      "ㄑㄧㄣˊ"
    ],
    "note": "「尺「蠖」之屈的讀音」的正確答案是「ㄏㄨㄛˋ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "「蟊」賊的讀音",
    "answer": "ㄇㄠˊ",
    "options": [
      "ㄇㄠˊ",
      "ㄑㄧㄡˊ",
      "ㄑㄧㄣˊ",
      "ㄑㄩ"
    ],
    "note": "「「蟊」賊的讀音」的正確答案是「ㄇㄠˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "領如「蝤」蠐的讀音",
    "answer": "ㄑㄧㄡˊ",
    "options": [
      "ㄑㄧㄡˊ",
      "ㄑㄧㄣˊ",
      "ㄑㄩ",
      "ㄗㄠˇ"
    ],
    "note": "「領如「蝤」蠐的讀音」的正確答案是「ㄑㄧㄡˊ」。"
  },
  {
    "round": 4,
    "type": "pronunciation",
    "question": "「螓」首蛾眉的讀音",
    "answer": "ㄑㄧㄣˊ",
    "options": [
      "ㄑㄧㄣˊ",
      "ㄑㄩ",
      "ㄗㄠˇ",
      "ㄖㄨㄟˋ"
    ],
    "note": "「「螓」首蛾眉的讀音」的正確答案是「ㄑㄧㄣˊ」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "橫「衝」直撞的字義",
    "answer": "急速前進",
    "options": [
      "急速前進",
      "突擊",
      "直著向上頂",
      "交通要道"
    ],
    "note": "「橫「衝」直撞的字義」的正確字義是「急速前進」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「衝」鋒陷陣的字義",
    "answer": "突擊",
    "options": [
      "突擊",
      "急速前進",
      "直著向上頂",
      "交通要道"
    ],
    "note": "「「衝」鋒陷陣的字義」的正確字義是「突擊」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "人「事」全非的字義",
    "answer": "人類所作所為",
    "options": [
      "人類所作所為",
      "侍奉",
      "變故",
      "從事"
    ],
    "note": "「人「事」全非的字義」的正確字義是「人類所作所為」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "取之不「盡」的字義",
    "answer": "完結、終止",
    "options": [
      "完結、終止",
      "全部取出",
      "全部、都",
      "隱沒"
    ],
    "note": "「取之不「盡」的字義」的正確字義是「完結、終止」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "不「盡」相同的字義",
    "answer": "全部、都",
    "options": [
      "全部、都",
      "全部取出",
      "完結、終止",
      "隱沒"
    ],
    "note": "「不「盡」相同的字義」的正確字義是「全部、都」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "怒髮「衝」冠的字義",
    "answer": "直著向上頂",
    "options": [
      "直著向上頂",
      "突擊",
      "急速前進",
      "交通要道"
    ],
    "note": "「怒髮「衝」冠的字義」的正確字義是「直著向上頂」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "無所「事」事的字義",
    "answer": "從事",
    "options": [
      "從事",
      "侍奉",
      "人類所作所為",
      "變故"
    ],
    "note": "「無所「事」事的字義」的正確字義是「從事」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "多「事」之秋的字義",
    "answer": "變故",
    "options": [
      "變故",
      "侍奉",
      "人類所作所為",
      "從事"
    ],
    "note": "「多「事」之秋的字義」的正確字義是「變故」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "敲鑼打「鼓」的字義",
    "answer": "樂器名",
    "options": [
      "樂器名",
      "振動",
      "漲起",
      "振作、激勵"
    ],
    "note": "「敲鑼打「鼓」的字義」的正確字義是「樂器名」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「事」之以禮的字義",
    "answer": "侍奉",
    "options": [
      "侍奉",
      "人類所作所為",
      "變故",
      "從事"
    ],
    "note": "「「事」之以禮的字義」的正確字義是「侍奉」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「鼓」起勇氣的字義",
    "answer": "振作、激勵",
    "options": [
      "振作、激勵",
      "振動",
      "漲起",
      "樂器名"
    ],
    "note": "「「鼓」起勇氣的字義」的正確字義是「振作、激勵」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「盡」力而為的字義",
    "answer": "全部取出",
    "options": [
      "全部取出",
      "全部、都",
      "完結、終止",
      "隱沒"
    ],
    "note": "「「盡」力而為的字義」的正確字義是「全部取出」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「鼓」動翅膀的字義",
    "answer": "振動",
    "options": [
      "振動",
      "漲起",
      "振作、激勵",
      "樂器名"
    ],
    "note": "「「鼓」動翅膀的字義」的正確字義是「振動」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "綠衣「使」者的字義",
    "answer": "奉命到外國執行任務或留駐的人員",
    "options": [
      "奉命到外國執行任務或留駐的人員",
      "放縱、放任",
      "派用、任用",
      "讓、以致於"
    ],
    "note": "「綠衣「使」者的字義」的正確字義是「奉命到外國執行任務或留駐的人員」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「使」性子的字義",
    "answer": "放縱、放任",
    "options": [
      "放縱、放任",
      "派用、任用",
      "讓、以致於",
      "出使"
    ],
    "note": "「「使」性子的字義」的正確字義是「放縱、放任」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "言之有「物」的字義",
    "answer": "內容",
    "options": [
      "內容",
      "尋找",
      "物體",
      "人、事、境界"
    ],
    "note": "「言之有「物」的字義」的正確字義是「內容」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「物」色人選的字義",
    "answer": "尋找",
    "options": [
      "尋找",
      "內容",
      "物體",
      "人、事、境界"
    ],
    "note": "「「物」色人選的字義」的正確字義是「尋找」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「物」外之趣的字義",
    "answer": "物體",
    "options": [
      "物體",
      "內容",
      "尋找",
      "人、事、境界"
    ],
    "note": "「「物」外之趣的字義」的正確字義是「物體」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "道路要「衝」的字義",
    "answer": "交通要道",
    "options": [
      "交通要道",
      "突擊",
      "急速前進",
      "直著向上頂"
    ],
    "note": "「道路要「衝」的字義」的正確字義是「交通要道」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「鼓」著腮幫子的字義",
    "answer": "漲起",
    "options": [
      "漲起",
      "振動",
      "振作、激勵",
      "樂器名"
    ],
    "note": "「「鼓」著腮幫子的字義」的正確字義是「漲起」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "孤帆遠影碧山「盡」的字義",
    "answer": "隱沒",
    "options": [
      "隱沒",
      "全部取出",
      "全部、都",
      "完結、終止"
    ],
    "note": "「孤帆遠影碧山「盡」的字義」的正確字義是「隱沒」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "待人接「物」的字義",
    "answer": "人、事、境界",
    "options": [
      "人、事、境界",
      "內容",
      "物體",
      "尋找"
    ],
    "note": "「待人接「物」的字義」的正確字義是「人、事、境界」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "長「使」英雄淚滿襟的字義",
    "answer": "讓、以致於",
    "options": [
      "讓、以致於",
      "出使",
      "派用、任用",
      "放縱、放任"
    ],
    "note": "「長「使」英雄淚滿襟的字義」的正確字義是「讓、以致於」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "晏子「使」楚的字義",
    "answer": "出使",
    "options": [
      "出使",
      "放縱、放任",
      "派用、任用",
      "讓、以致於"
    ],
    "note": "「晏子「使」楚的字義」的正確字義是「出使」。"
  },
  {
    "round": 5,
    "type": "meaning",
    "question": "「使」功不如使過的字義",
    "answer": "派用、任用",
    "options": [
      "派用、任用",
      "放縱、放任",
      "讓、以致於",
      "出使"
    ],
    "note": "「「使」功不如使過的字義」的正確字義是「派用、任用」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "植物花「ㄖㄨㄟˇ」",
    "answer": "蕊",
    "options": [
      "蕊",
      "芯",
      "蘂",
      "蕋"
    ],
    "note": "「植物花「ㄖㄨㄟˇ」」的正確答案是「蕊」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "良「ㄧㄡˋ」不齊",
    "answer": "莠",
    "options": [
      "莠",
      "誘",
      "秀",
      "銹"
    ],
    "note": "「良「ㄧㄡˋ」不齊」的正確答案是「莠」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "千年紅「ㄎㄨㄞˋ」",
    "answer": "槐",
    "options": [
      "槐",
      "愧",
      "瑰",
      "魁"
    ],
    "note": "「千年紅「ㄎㄨㄞˋ」」的正確答案是「槐」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "蔥「ㄙㄨㄢˋ」",
    "answer": "蒜",
    "options": [
      "蒜",
      "算",
      "酸",
      "祘"
    ],
    "note": "「蔥「ㄙㄨㄢˋ」」的正確答案是「蒜」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "雨後春「ㄙㄨㄣˇ」",
    "answer": "筍",
    "options": [
      "筍",
      "笋",
      "損",
      "荀"
    ],
    "note": "「雨後春「ㄙㄨㄣˇ」」的正確答案是「筍」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "「ㄔㄨㄣ」萱並茂",
    "answer": "椿",
    "options": [
      "椿",
      "春",
      "樁",
      "蓁"
    ],
    "note": "「「ㄔㄨㄣ」萱並茂」的正確答案是「椿」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "高「ㄌㄧㄤˊ」酒",
    "answer": "粱",
    "options": [
      "粱",
      "梁",
      "糧",
      "良"
    ],
    "note": "「高「ㄌㄧㄤˊ」酒」的正確答案是「粱」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "冒雨剪「ㄐㄧㄡˇ」",
    "answer": "韭",
    "options": [
      "韭",
      "久",
      "玖",
      "灸"
    ],
    "note": "「冒雨剪「ㄐㄧㄡˇ」」的正確答案是「韭」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "績麻拈「ㄓㄨˋ」",
    "answer": "苧",
    "options": [
      "苧",
      "佇",
      "貯",
      "杼"
    ],
    "note": "「績麻拈「ㄓㄨˋ」」的正確答案是「苧」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "草「ㄐㄧㄢ」人命",
    "answer": "菅",
    "options": [
      "菅",
      "管",
      "箋",
      "奸"
    ],
    "note": "「草「ㄐㄧㄢ」人命」的正確答案是「菅」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "田間「ㄅㄞˋ」草",
    "answer": "稗",
    "options": [
      "稗",
      "敗",
      "拜",
      "粺"
    ],
    "note": "「田間「ㄅㄞˋ」草」的正確答案是「稗」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "如火如「ㄊㄨˊ」",
    "answer": "荼",
    "options": [
      "荼",
      "茶",
      "塗",
      "途"
    ],
    "note": "「如火如「ㄊㄨˊ」」的正確答案是「荼」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "河畔青「ㄨˊ」",
    "answer": "蕪",
    "options": [
      "蕪",
      "無",
      "巫",
      "梧"
    ],
    "note": "「河畔青「ㄨˊ」」的正確答案是「蕪」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "青「ㄎㄜ」",
    "answer": "稞",
    "options": [
      "稞",
      "棵",
      "科",
      "顆"
    ],
    "note": "「青「ㄎㄜ」」的正確答案是「稞」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "「ㄓ」子花開",
    "answer": "梔",
    "options": [
      "梔",
      "枝",
      "脂",
      "肢"
    ],
    "note": "「「ㄓ」子花開」的正確答案是「梔」。"
  },
  {
    "round": 6,
    "type": "pronunciation",
    "question": "桑「榆」晚景的讀音",
    "answer": "ㄩˊ",
    "options": [
      "ㄩˊ",
      "ㄩˇ",
      "ㄩˋ",
      "ㄩ"
    ],
    "note": "「桑榆晚景」的「榆」讀作「ㄩˊ」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "「ㄡˇ」斷絲連",
    "answer": "藕",
    "options": [
      "藕",
      "偶",
      "耦",
      "嘔"
    ],
    "note": "「「ㄡˇ」斷絲連」的正確答案是「藕」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "一「ㄒㄩㄣ」一蕕",
    "answer": "薰",
    "options": [
      "薰",
      "熏",
      "勳",
      "醺"
    ],
    "note": "「一「ㄒㄩㄣ」一蕕」的正確答案是「薰」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "「ㄘㄨˋ」漿草",
    "answer": "酢",
    "options": [
      "酢",
      "醋",
      "錯",
      "措"
    ],
    "note": "「「ㄘㄨˋ」漿草」的正確答案是「酢」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "「ㄏㄨˋ」瓞綿綿",
    "answer": "瓠",
    "options": [
      "瓠",
      "互",
      "戶",
      "護"
    ],
    "note": "「「ㄏㄨˋ」瓞綿綿」的正確答案是「瓠」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "「ㄊㄢˊ」花一現",
    "answer": "曇",
    "options": [
      "曇",
      "壇",
      "檀",
      "談"
    ],
    "note": "「「ㄊㄢˊ」花一現」的正確答案是「曇」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "棕「ㄌㄩˊ」",
    "answer": "櫚",
    "options": [
      "櫚",
      "閭",
      "驢",
      "呂"
    ],
    "note": "「棕「ㄌㄩˊ」」的正確答案是「櫚」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "臺灣「ㄌㄨㄢˊ」樹",
    "answer": "欒",
    "options": [
      "欒",
      "巒",
      "孿",
      "攣"
    ],
    "note": "「臺灣「ㄌㄨㄢˊ」樹」的正確答案是「欒」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "朝鮮「ㄐㄧˋ」",
    "answer": "薊",
    "options": [
      "薊",
      "計",
      "際",
      "寄"
    ],
    "note": "「朝鮮「ㄐㄧˋ」」的正確答案是「薊」。"
  },
  {
    "round": 6,
    "type": "shape",
    "question": "「ㄒㄧㄢ」維植物",
    "answer": "纖",
    "options": [
      "纖",
      "鮮",
      "仙",
      "先"
    ],
    "note": "「「ㄒㄧㄢ」維植物」的正確答案是「纖」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "「芋」頭的讀音",
    "answer": "ㄩˋ",
    "options": [
      "ㄩˋ",
      "ㄌㄧˋ",
      "ㄌㄧㄡˊ",
      "ㄐㄧㄠ"
    ],
    "note": "「「芋」頭的讀音」的正確答案是「ㄩˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "馬拉巴「栗」的讀音",
    "answer": "ㄌㄧˋ",
    "options": [
      "ㄌㄧˋ",
      "ㄌㄧㄡˊ",
      "ㄐㄧㄠ",
      "ㄜˋ"
    ],
    "note": "「馬拉巴「栗」的讀音」的正確答案是「ㄌㄧˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "番石「榴」的讀音",
    "answer": "ㄌㄧㄡˊ",
    "options": [
      "ㄌㄧㄡˊ",
      "ㄐㄧㄠ",
      "ㄜˋ",
      "ㄙㄨˋ"
    ],
    "note": "「番石「榴」的讀音」的正確答案是「ㄌㄧㄡˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "「筊」白筍的讀音",
    "answer": "ㄐㄧㄠ",
    "options": [
      "ㄐㄧㄠ",
      "ㄜˋ",
      "ㄙㄨˋ",
      "ㄌㄢˇ"
    ],
    "note": "「「筊」白筍的讀音」的正確答案是「ㄐㄧㄠ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "花「萼」的讀音",
    "answer": "ㄜˋ",
    "options": [
      "ㄜˋ",
      "ㄙㄨˋ",
      "ㄌㄢˇ",
      "ㄏㄠ"
    ],
    "note": "「花「萼」的讀音」的正確答案是「ㄜˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "滄海一「粟」的讀音",
    "answer": "ㄙㄨˋ",
    "options": [
      "ㄙㄨˋ",
      "ㄌㄢˇ",
      "ㄏㄠ",
      "ㄍㄜˊ"
    ],
    "note": "「滄海一「粟」的讀音」的正確答案是「ㄙㄨˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "橄「欖」的讀音",
    "answer": "ㄌㄢˇ",
    "options": [
      "ㄌㄢˇ",
      "ㄏㄠ",
      "ㄍㄜˊ",
      "ㄓㄨˊ"
    ],
    "note": "「橄「欖」的讀音」的正確答案是「ㄌㄢˇ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "茼「蒿」的讀音",
    "answer": "ㄏㄠ",
    "options": [
      "ㄏㄠ",
      "ㄍㄜˊ",
      "ㄓㄨˊ",
      "ㄏㄨㄞˊ"
    ],
    "note": "「茼「蒿」的讀音」的正確答案是「ㄏㄠ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "黃金「葛」的讀音",
    "answer": "ㄍㄜˊ",
    "options": [
      "ㄍㄜˊ",
      "ㄓㄨˊ",
      "ㄏㄨㄞˊ",
      "ㄐㄧˋ"
    ],
    "note": "「黃金「葛」的讀音」的正確答案是「ㄍㄜˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "白「朮」的讀音",
    "answer": "ㄓㄨˊ",
    "options": [
      "ㄓㄨˊ",
      "ㄏㄨㄞˊ",
      "ㄐㄧˋ",
      "ㄆㄠˊ"
    ],
    "note": "「白「朮」的讀音」的正確答案是「ㄓㄨˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "指桑罵「槐」的讀音",
    "answer": "ㄏㄨㄞˊ",
    "options": [
      "ㄏㄨㄞˊ",
      "ㄐㄧˋ",
      "ㄆㄠˊ",
      "ㄉㄢˋ"
    ],
    "note": "「指桑罵「槐」的讀音」的正確答案是「ㄏㄨㄞˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "稻梁黍「稷」的讀音",
    "answer": "ㄐㄧˋ",
    "options": [
      "ㄐㄧˋ",
      "ㄆㄠˊ",
      "ㄉㄢˋ",
      "ㄩˊ"
    ],
    "note": "「稻梁黍「稷」的讀音」的正確答案是「ㄐㄧˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "「匏」瓜空懸的讀音",
    "answer": "ㄆㄠˊ",
    "options": [
      "ㄆㄠˊ",
      "ㄉㄢˋ",
      "ㄩˊ",
      "ㄅㄧˊ"
    ],
    "note": "「「匏」瓜空懸的讀音」的正確答案是「ㄆㄠˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "菡「萏」香銷的讀音",
    "answer": "ㄉㄢˋ",
    "options": [
      "ㄉㄢˋ",
      "ㄩˊ",
      "ㄅㄧˊ",
      "ㄅㄧˋ"
    ],
    "note": "「菡「萏」香銷的讀音」的正確答案是「ㄉㄢˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "遍插茱「萸」的讀音",
    "answer": "ㄩˊ",
    "options": [
      "ㄩˊ",
      "ㄅㄧˊ",
      "ㄅㄧˋ",
      "ㄏㄨㄚˋ"
    ],
    "note": "「遍插茱「萸」的讀音」的正確答案是「ㄩˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "「荸」薺的讀音",
    "answer": "ㄅㄧˊ",
    "options": [
      "ㄅㄧˊ",
      "ㄅㄧˋ",
      "ㄏㄨㄚˋ",
      "ㄏㄨˊ"
    ],
    "note": "「「荸」薺的讀音」的正確答案是「ㄅㄧˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "「蓖」麻的讀音",
    "answer": "ㄅㄧˋ",
    "options": [
      "ㄅㄧˋ",
      "ㄏㄨㄚˋ",
      "ㄏㄨˊ",
      "ㄒㄧㄢˋ"
    ],
    "note": "「「蓖」麻的讀音」的正確答案是「ㄅㄧˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "白「樺」的讀音",
    "answer": "ㄏㄨㄚˋ",
    "options": [
      "ㄏㄨㄚˋ",
      "ㄏㄨˊ",
      "ㄒㄧㄢˋ",
      "ㄆㄨˊ"
    ],
    "note": "「白「樺」的讀音」的正確答案是「ㄏㄨㄚˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "「槲」寄生的讀音",
    "answer": "ㄏㄨˊ",
    "options": [
      "ㄏㄨˊ",
      "ㄒㄧㄢˋ",
      "ㄆㄨˊ",
      "ㄌㄧㄣˋ"
    ],
    "note": "「「槲」寄生的讀音」的正確答案是「ㄏㄨˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "馬齒「莧」的讀音",
    "answer": "ㄒㄧㄢˋ",
    "options": [
      "ㄒㄧㄢˋ",
      "ㄆㄨˊ",
      "ㄌㄧㄣˋ",
      "ㄌㄧㄠˇ"
    ],
    "note": "「馬齒「莧」的讀音」的正確答案是「ㄒㄧㄢˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "菖「蒲」的讀音",
    "answer": "ㄆㄨˊ",
    "options": [
      "ㄆㄨˊ",
      "ㄌㄧㄣˋ",
      "ㄌㄧㄠˇ",
      "ㄔㄨㄣˊ"
    ],
    "note": "「菖「蒲」的讀音」的正確答案是「ㄆㄨˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "「藺」草的讀音",
    "answer": "ㄌㄧㄣˋ",
    "options": [
      "ㄌㄧㄣˋ",
      "ㄌㄧㄠˇ",
      "ㄔㄨㄣˊ",
      "ㄓˇ"
    ],
    "note": "「「藺」草的讀音」的正確答案是「ㄌㄧㄣˋ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "含「蓼」問疾的讀音",
    "answer": "ㄌㄧㄠˇ",
    "options": [
      "ㄌㄧㄠˇ",
      "ㄔㄨㄣˊ",
      "ㄓˇ",
      "ㄩˋ"
    ],
    "note": "「含「蓼」問疾的讀音」的正確答案是「ㄌㄧㄠˇ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "「蓴」羹鱸膾的讀音",
    "answer": "ㄔㄨㄣˊ",
    "options": [
      "ㄔㄨㄣˊ",
      "ㄓˇ",
      "ㄩˋ",
      "ㄌㄧˋ"
    ],
    "note": "「「蓴」羹鱸膾的讀音」的正確答案是「ㄔㄨㄣˊ」。"
  },
  {
    "round": 7,
    "type": "pronunciation",
    "question": "芳「蕤」的讀音",
    "answer": "ㄖㄨㄟˊ",
    "options": [
      "ㄖㄨㄟˊ",
      "ㄩˋ",
      "ㄌㄧˋ",
      "ㄌㄧㄡˊ"
    ],
    "note": "「芳「蕤」的讀音」的正確答案是「ㄖㄨㄟˊ」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "白「ㄌㄨˋ」鷺",
    "answer": "鷺",
    "options": [
      "鷺",
      "鵲",
      "鳩",
      "鳶"
    ],
    "note": "「白「ㄌㄨˋ」鷺」的正確答案是「鷺」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "喜「ㄑㄩㄝˋ」叫吉",
    "answer": "鵲",
    "options": [
      "鵲",
      "鳩",
      "鳶",
      "鵠"
    ],
    "note": "「喜「ㄑㄩㄝˋ」叫吉」的正確答案是「鵲」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "斑「ㄐㄧㄡ」跌彈",
    "answer": "鳩",
    "options": [
      "鳩",
      "鳶",
      "鵠",
      "雛"
    ],
    "note": "「斑「ㄐㄧㄡ」跌彈」的正確答案是「鳩」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄩㄢ」飛魚躍",
    "answer": "鳶",
    "options": [
      "鳶",
      "鵠",
      "雛",
      "鵡"
    ],
    "note": "「「ㄩㄢ」飛魚躍」的正確答案是「鳶」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄍㄨˇ」立瞻望",
    "answer": "鵠",
    "options": [
      "鵠",
      "雛",
      "鵡",
      "鶯"
    ],
    "note": "「「ㄍㄨˇ」立瞻望」的正確答案是「鵠」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "鳳「ㄔㄨˊ」麟子",
    "answer": "雛",
    "options": [
      "雛",
      "鵡",
      "鶯",
      "鴛"
    ],
    "note": "「鳳「ㄔㄨˊ」麟子」的正確答案是「雛」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "鸚「ㄨˇ」學舌",
    "answer": "鵡",
    "options": [
      "鵡",
      "鶯",
      "鴛",
      "鸛"
    ],
    "note": "「鸚「ㄨˇ」學舌」的正確答案是「鵡」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄧㄥ」飛草長",
    "answer": "鶯",
    "options": [
      "鶯",
      "鴛",
      "鸛",
      "鶼"
    ],
    "note": "「「ㄧㄥ」飛草長」的正確答案是「鶯」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "同命「ㄩㄢ」鴦",
    "answer": "鴛",
    "options": [
      "鴛",
      "鸛",
      "鶼",
      "鷸"
    ],
    "note": "「同命「ㄩㄢ」鴦」的正確答案是「鴛」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "白「ㄍㄨㄢˋ」",
    "answer": "鸛",
    "options": [
      "鸛",
      "鶼",
      "鷸",
      "鴟"
    ],
    "note": "「白「ㄍㄨㄢˋ」」的正確答案是「鸛」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄐㄧㄢ」鰈情深",
    "answer": "鶼",
    "options": [
      "鶼",
      "鷸",
      "鴟",
      "鴞"
    ],
    "note": "「「ㄐㄧㄢ」鰈情深」的正確答案是「鶼」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄩˋ」蚌相爭",
    "answer": "鷸",
    "options": [
      "鷸",
      "鴟",
      "鴞",
      "鴆"
    ],
    "note": "「「ㄩˋ」蚌相爭」的正確答案是「鷸」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄔ」鴞",
    "answer": "鴟",
    "options": [
      "鴟",
      "鴞",
      "鴆",
      "鶉"
    ],
    "note": "「「ㄔ」鴞」的正確答案是「鴟」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "長耳「ㄒㄧㄠ」",
    "answer": "鴞",
    "options": [
      "鴞",
      "鴆",
      "鶉",
      "鶩"
    ],
    "note": "「長耳「ㄒㄧㄠ」」的正確答案是「鴞」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "飲「ㄓㄣˋ」止渴",
    "answer": "鴆",
    "options": [
      "鴆",
      "鶉",
      "鶩",
      "鴻"
    ],
    "note": "「飲「ㄓㄣˋ」止渴」的正確答案是「鴆」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄔㄨㄣˊ」衣百結",
    "answer": "鶉",
    "options": [
      "鶉",
      "鶩",
      "鴻",
      "鵬"
    ],
    "note": "「「ㄔㄨㄣˊ」衣百結」的正確答案是「鶉」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "趨之若「ㄨˋ」",
    "answer": "鶩",
    "options": [
      "鶩",
      "鴻",
      "鵬",
      "鸞"
    ],
    "note": "「趨之若「ㄨˋ」」的正確答案是「鶩」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "飛「ㄏㄨㄥˊ」踏雪",
    "answer": "鴻",
    "options": [
      "鴻",
      "鵬",
      "鸞",
      "鷲"
    ],
    "note": "「飛「ㄏㄨㄥˊ」踏雪」的正確答案是「鴻」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄆㄥˊ」程萬里",
    "answer": "鵬",
    "options": [
      "鵬",
      "鸞",
      "鷲",
      "鷂"
    ],
    "note": "「「ㄆㄥˊ」程萬里」的正確答案是「鵬」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄌㄨㄢˊ」鳳和鳴",
    "answer": "鸞",
    "options": [
      "鸞",
      "鷲",
      "鷂",
      "鷓"
    ],
    "note": "「「ㄌㄨㄢˊ」鳳和鳴」的正確答案是「鸞」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "灰面「ㄐㄧㄡˋ」",
    "answer": "鷲",
    "options": [
      "鷲",
      "鷂",
      "鷓",
      "鷦"
    ],
    "note": "「灰面「ㄐㄧㄡˋ」」的正確答案是「鷲」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄧㄠˋ」鷹",
    "answer": "鷂",
    "options": [
      "鷂",
      "鷓",
      "鷦",
      "鶻"
    ],
    "note": "「「ㄧㄠˋ」鷹」的正確答案是「鷂」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "火「ㄓㄜˋ」鴣鳥",
    "answer": "鷓",
    "options": [
      "鷓",
      "鷦",
      "鶻",
      "鷺"
    ],
    "note": "「火「ㄓㄜˋ」鴣鳥」的正確答案是「鷓」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "「ㄐㄧㄠ」鷯一枝",
    "answer": "鷦",
    "options": [
      "鷦",
      "鶻",
      "鷺",
      "鵲"
    ],
    "note": "「「ㄐㄧㄠ」鷯一枝」的正確答案是「鷦」。"
  },
  {
    "round": 8,
    "type": "shape",
    "question": "兔起「ㄏㄨˊ」落",
    "answer": "鶻",
    "options": [
      "鶻",
      "鷺",
      "鵲",
      "鳩"
    ],
    "note": "「兔起「ㄏㄨˊ」落」的正確答案是「鶻」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「鱟」魚的讀音",
    "answer": "ㄏㄡˋ",
    "options": [
      "ㄏㄡˋ",
      "ㄨㄟˇ",
      "ㄒㄩㄣˊ",
      "ㄕ"
    ],
    "note": "「「鱟」魚的讀音」的正確答案是「ㄏㄡˋ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「鮪」魚的讀音",
    "answer": "ㄨㄟˇ",
    "options": [
      "ㄨㄟˇ",
      "ㄒㄩㄣˊ",
      "ㄕ",
      "ㄒㄧ"
    ],
    "note": "「「鮪」魚的讀音」的正確答案是「ㄨㄟˇ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "紅「蟳」的讀音",
    "answer": "ㄒㄩㄣˊ",
    "options": [
      "ㄒㄩㄣˊ",
      "ㄕ",
      "ㄒㄧ",
      "ㄐㄧㄥ"
    ],
    "note": "「紅「蟳」的讀音」的正確答案是「ㄒㄩㄣˊ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「虱」目魚的讀音",
    "answer": "ㄕ",
    "options": [
      "ㄕ",
      "ㄒㄧ",
      "ㄐㄧㄥ",
      "ㄅㄠˋ"
    ],
    "note": "「「虱」目魚的讀音」的正確答案是「ㄕ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "水「螅」的讀音",
    "answer": "ㄒㄧ",
    "options": [
      "ㄒㄧ",
      "ㄐㄧㄥ",
      "ㄅㄠˋ",
      "ㄐㄧˋ"
    ],
    "note": "「水「螅」的讀音」的正確答案是「ㄒㄧ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "蠶食「鯨」吞的讀音",
    "answer": "ㄐㄧㄥ",
    "options": [
      "ㄐㄧㄥ",
      "ㄅㄠˋ",
      "ㄐㄧˋ",
      "ㄒㄧㄢˇ"
    ],
    "note": "「蠶食「鯨」吞的讀音」的正確答案是「ㄐㄧㄥ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「鮑」魚之肆的讀音",
    "answer": "ㄅㄠˋ",
    "options": [
      "ㄅㄠˋ",
      "ㄐㄧˋ",
      "ㄒㄧㄢˇ",
      "ㄐㄧㄠ"
    ],
    "note": "「「鮑」魚之肆的讀音」的正確答案是「ㄅㄠˋ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "過江之「鯽」的讀音",
    "answer": "ㄐㄧˋ",
    "options": [
      "ㄐㄧˋ",
      "ㄒㄧㄢˇ",
      "ㄐㄧㄠ",
      "ㄏㄨㄥˊ"
    ],
    "note": "「過江之「鯽」的讀音」的正確答案是「ㄐㄧˋ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "黃金「蜆」精的讀音",
    "answer": "ㄒㄧㄢˇ",
    "options": [
      "ㄒㄧㄢˇ",
      "ㄐㄧㄠ",
      "ㄏㄨㄥˊ",
      "ㄇㄢˊ"
    ],
    "note": "「黃金「蜆」精的讀音」的正確答案是「ㄒㄧㄢˇ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「蛟」龍得水的讀音",
    "answer": "ㄐㄧㄠ",
    "options": [
      "ㄐㄧㄠ",
      "ㄏㄨㄥˊ",
      "ㄇㄢˊ",
      "ㄇㄧㄣˇ"
    ],
    "note": "「「蛟」龍得水的讀音」的正確答案是「ㄐㄧㄠ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「魟」魚的讀音",
    "answer": "ㄏㄨㄥˊ",
    "options": [
      "ㄏㄨㄥˊ",
      "ㄇㄢˊ",
      "ㄇㄧㄣˇ",
      "ㄔㄨˊ"
    ],
    "note": "「「魟」魚的讀音」的正確答案是「ㄏㄨㄥˊ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「鰻」魚的讀音",
    "answer": "ㄇㄢˊ",
    "options": [
      "ㄇㄢˊ",
      "ㄇㄧㄣˇ",
      "ㄔㄨˊ",
      "ㄋㄧㄢˊ"
    ],
    "note": "「「鰻」魚的讀音」的正確答案是「ㄇㄢˊ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "水「黽」的讀音",
    "answer": "ㄇㄧㄣˇ",
    "options": [
      "ㄇㄧㄣˇ",
      "ㄔㄨˊ",
      "ㄋㄧㄢˊ",
      "ㄓˋ"
    ],
    "note": "「水「黽」的讀音」的正確答案是「ㄇㄧㄣˇ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "蟾「蜍」的讀音",
    "answer": "ㄔㄨˊ",
    "options": [
      "ㄔㄨˊ",
      "ㄋㄧㄢˊ",
      "ㄓˋ",
      "ㄔㄞˋ"
    ],
    "note": "「蟾「蜍」的讀音」的正確答案是「ㄔㄨˊ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「鯰」魚的讀音",
    "answer": "ㄋㄧㄢˊ",
    "options": [
      "ㄋㄧㄢˊ",
      "ㄓˋ",
      "ㄔㄞˋ",
      "ㄅㄧㄝ"
    ],
    "note": "「「鯰」魚的讀音」的正確答案是「ㄋㄧㄢˊ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "吸血水「蛭」的讀音",
    "answer": "ㄓˋ",
    "options": [
      "ㄓˋ",
      "ㄔㄞˋ",
      "ㄅㄧㄝ",
      "ㄇㄟˋ"
    ],
    "note": "「吸血水「蛭」的讀音」的正確答案是「ㄓˋ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "水「蠆」的讀音",
    "answer": "ㄔㄞˋ",
    "options": [
      "ㄔㄞˋ",
      "ㄅㄧㄝ",
      "ㄇㄟˋ",
      "ㄈㄟˊ"
    ],
    "note": "「水「蠆」的讀音」的正確答案是「ㄔㄞˋ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "甕中之「鱉」的讀音",
    "answer": "ㄅㄧㄝ",
    "options": [
      "ㄅㄧㄝ",
      "ㄇㄟˋ",
      "ㄈㄟˊ",
      "ㄉㄧㄠ"
    ],
    "note": "「甕中之「鱉」的讀音」的正確答案是「ㄅㄧㄝ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "玳「瑁」的讀音",
    "answer": "ㄇㄟˋ",
    "options": [
      "ㄇㄟˋ",
      "ㄈㄟˊ",
      "ㄉㄧㄠ",
      "ㄍㄣˋ"
    ],
    "note": "「玳「瑁」的讀音」的正確答案是「ㄇㄟˋ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「鯡」魚罐頭的讀音",
    "answer": "ㄈㄟˊ",
    "options": [
      "ㄈㄟˊ",
      "ㄉㄧㄠ",
      "ㄍㄣˋ",
      "ㄅㄧㄠˋ"
    ],
    "note": "「「鯡」魚罐頭的讀音」的正確答案是「ㄈㄟˊ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「鯛」魚的讀音",
    "answer": "ㄉㄧㄠ",
    "options": [
      "ㄉㄧㄠ",
      "ㄍㄣˋ",
      "ㄅㄧㄠˋ",
      "ㄇㄟˊ"
    ],
    "note": "「「鯛」魚的讀音」的正確答案是「ㄉㄧㄠ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "儒「艮」的讀音",
    "answer": "ㄍㄣˋ",
    "options": [
      "ㄍㄣˋ",
      "ㄅㄧㄠˋ",
      "ㄇㄟˊ",
      "ㄏㄡˋ"
    ],
    "note": "「儒「艮」的讀音」的正確答案是「ㄍㄣˋ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "死「鰾」白肚的讀音",
    "answer": "ㄅㄧㄠˋ",
    "options": [
      "ㄅㄧㄠˋ",
      "ㄇㄟˊ",
      "ㄏㄡˋ",
      "ㄨㄟˇ"
    ],
    "note": "「死「鰾」白肚的讀音」的正確答案是「ㄅㄧㄠˋ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「鮴」魚的讀音",
    "answer": "ㄇㄟˊ",
    "options": [
      "ㄇㄟˊ",
      "ㄏㄡˋ",
      "ㄨㄟˇ",
      "ㄒㄩㄣˊ"
    ],
    "note": "「「鮴」魚的讀音」的正確答案是「ㄇㄟˊ」。"
  },
  {
    "round": 9,
    "type": "sound",
    "question": "「鱟」魚的讀音",
    "answer": "ㄏㄡˋ",
    "options": [
      "ㄏㄡˋ",
      "ㄨㄟˇ",
      "ㄒㄩㄣˊ",
      "ㄕ"
    ],
    "note": "「「鱟」魚的讀音」的正確答案是「ㄏㄡˋ」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "「張」目對日的字義",
    "answer": "睜開",
    "options": [
      "睜開",
      "計算平面物品的單位",
      "觀看、窺探",
      "自誇、誇大"
    ],
    "note": "「「張」目對日的字義」的正確答案是「睜開」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "一「張」報紙的字義",
    "answer": "計算平面物品的單位",
    "options": [
      "計算平面物品的單位",
      "睜開",
      "觀看、窺探",
      "自誇、誇大"
    ],
    "note": "「一「張」報紙的字義」的正確答案是「計算平面物品的單位」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "東「張」西望的字義",
    "answer": "觀看、窺探",
    "options": [
      "觀看、窺探",
      "計算平面物品的單位",
      "睜開",
      "自誇、誇大"
    ],
    "note": "「東「張」西望的字義」的正確答案是「觀看、窺探」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "誇「張」其辭的字義",
    "answer": "自誇、誇大",
    "options": [
      "自誇、誇大",
      "計算平面物品的單位",
      "睜開",
      "觀看、窺探"
    ],
    "note": "「誇「張」其辭的字義」的正確答案是「自誇、誇大」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "「就」職典禮的字義",
    "answer": "從事",
    "options": [
      "從事",
      "完成",
      "親近",
      "馬上、立刻"
    ],
    "note": "「「就」職典禮的字義」的正確答案是「從事」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "織「就」一生的字義",
    "answer": "完成",
    "options": [
      "完成",
      "親近",
      "從事",
      "馬上、立刻"
    ],
    "note": "「織「就」一生的字義」的正確答案是「完成」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "拔腿「就」跑的字義",
    "answer": "馬上、立刻",
    "options": [
      "馬上、立刻",
      "完成",
      "親近",
      "從事"
    ],
    "note": "「拔腿「就」跑的字義」的正確答案是「馬上、立刻」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "還來「就」菊花的字義",
    "answer": "親近",
    "options": [
      "親近",
      "完成",
      "從事",
      "馬上、立刻"
    ],
    "note": "「還來「就」菊花的字義」的正確答案是「親近」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "一「道」閃電的字義",
    "answer": "計算條狀物的單位",
    "options": [
      "計算條狀物的單位",
      "路途、途徑",
      "方法、事理",
      "思想、學說"
    ],
    "note": "「一「道」閃電的字義」的正確答案是「計算條狀物的單位」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "能言善「道」的字義",
    "answer": "說、談",
    "options": [
      "說、談",
      "計算條狀物的單位",
      "路途、途徑",
      "方法、事理"
    ],
    "note": "「能言善「道」的字義」的正確答案是「說、談」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "老莊之「道」的字義",
    "answer": "思想、學說",
    "options": [
      "思想、學說",
      "計算條狀物的單位",
      "路途、途徑",
      "方法、事理"
    ],
    "note": "「老莊之「道」的字義」的正確答案是「思想、學說」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "謀生之「道」的字義",
    "answer": "方法、事理",
    "options": [
      "方法、事理",
      "計算條狀物的單位",
      "路途、途徑",
      "思想、學說"
    ],
    "note": "「謀生之「道」的字義」的正確答案是「方法、事理」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "任重「道」遠的字義",
    "answer": "路途、途徑",
    "options": [
      "路途、途徑",
      "計算條狀物的單位",
      "方法、事理",
      "思想、學說"
    ],
    "note": "「任重「道」遠的字義」的正確答案是「路途、途徑」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "「表」彰氣節的字義",
    "answer": "顯揚、獎勵",
    "options": [
      "顯揚、獎勵",
      "事物在外的一面",
      "榜樣",
      "傳達、宣布"
    ],
    "note": "「「表」彰氣節的字義」的正確答案是「顯揚、獎勵」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "聊「表」心意的字義",
    "answer": "傳達、宣布",
    "options": [
      "傳達、宣布",
      "事物在外的一面",
      "榜樣",
      "顯揚、獎勵"
    ],
    "note": "「聊「表」心意的字義」的正確答案是「傳達、宣布」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "出人意「表」的字義",
    "answer": "事物在外的一面",
    "options": [
      "事物在外的一面",
      "榜樣",
      "顯揚、獎勵",
      "傳達、宣布"
    ],
    "note": "「出人意「表」的字義」的正確答案是「事物在外的一面」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "為人師「表」的字義",
    "answer": "榜樣",
    "options": [
      "榜樣",
      "事物在外的一面",
      "顯揚、獎勵",
      "傳達、宣布"
    ],
    "note": "「為人師「表」的字義」的正確答案是「榜樣」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "備「嘗」艱辛的字義",
    "answer": "經歷",
    "options": [
      "經歷",
      "辨別滋味",
      "試探",
      "曾經"
    ],
    "note": "「備「嘗」艱辛的字義」的正確答案是「經歷」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "輕「嘗」一口的字義",
    "answer": "辨別滋味",
    "options": [
      "辨別滋味",
      "試探",
      "經歷",
      "曾經"
    ],
    "note": "「輕「嘗」一口的字義」的正確答案是「辨別滋味」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "淺「嘗」輒止的字義",
    "answer": "試探",
    "options": [
      "試探",
      "辨別滋味",
      "經歷",
      "曾經"
    ],
    "note": "「淺「嘗」輒止的字義」的正確答案是「試探」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "未「嘗」敗過的字義",
    "answer": "曾經",
    "options": [
      "曾經",
      "辨別滋味",
      "試探",
      "經歷"
    ],
    "note": "「未「嘗」敗過的字義」的正確答案是「曾經」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "「爾」後再談的字義",
    "answer": "此、這",
    "options": [
      "此、這",
      "你（第二人稱代詞）",
      "如此、而已",
      "助詞，無義"
    ],
    "note": "「「爾」後再談的字義」的正確答案是「此、這」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "「爾」虞我詐的字義",
    "answer": "你（第二人稱代詞）",
    "options": [
      "你（第二人稱代詞）",
      "此、這",
      "如此、而已",
      "助詞，無義"
    ],
    "note": "「「爾」虞我詐的字義」的正確答案是「你（第二人稱代詞）」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "莞「爾」而笑的字義",
    "answer": "助詞，無義",
    "options": [
      "助詞，無義",
      "你（第二人稱代詞）",
      "此、這",
      "如此、而已"
    ],
    "note": "「莞「爾」而笑的字義」的正確答案是「助詞，無義」。"
  },
  {
    "round": 10,
    "type": "meaning",
    "question": "不過「爾爾」的字義",
    "answer": "如此、而已",
    "options": [
      "如此、而已",
      "你（第二人稱代詞）",
      "此、這",
      "助詞，無義"
    ],
    "note": "「不過「爾爾」的字義」的正確答案是「如此、而已」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "「ㄜ」諛奉承",
    "answer": "阿",
    "options": [
      "阿",
      "刻",
      "究",
      "佻"
    ],
    "note": "「「ㄜ」諛奉承」的正確答案是「阿」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "「ㄎㄜˋ」薄少恩",
    "answer": "刻",
    "options": [
      "刻",
      "阿",
      "究",
      "佻"
    ],
    "note": "「「ㄎㄜˋ」薄少恩」的正確答案是「刻」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "不明「ㄐㄧㄡˋ」裡",
    "answer": "究",
    "options": [
      "究",
      "阿",
      "刻",
      "佻"
    ],
    "note": "「不明「ㄐㄧㄡˋ」裡」的正確答案是「究」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "態度輕「ㄊㄧㄠˊ」",
    "answer": "佻",
    "options": [
      "佻",
      "阿",
      "刻",
      "究"
    ],
    "note": "「態度輕「ㄊㄧㄠˊ」」的正確答案是「佻」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "驕傲狂「ㄗˋ」",
    "answer": "恣",
    "options": [
      "恣",
      "阿",
      "刻",
      "究"
    ],
    "note": "「驕傲狂「ㄗˋ」」的正確答案是「恣」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "「ㄐㄧㄢ」苦卓絕",
    "answer": "艱",
    "options": [
      "艱",
      "阿",
      "刻",
      "究"
    ],
    "note": "「「ㄐㄧㄢ」苦卓絕」的正確答案是「艱」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "神「ㄘㄞˇ」飛揚",
    "answer": "采",
    "options": [
      "采",
      "阿",
      "刻",
      "究"
    ],
    "note": "「神「ㄘㄞˇ」飛揚」的正確答案是「采」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "自怨自「ㄞˋ」",
    "answer": "艾",
    "options": [
      "艾",
      "阿",
      "刻",
      "究"
    ],
    "note": "「自怨自「ㄞˋ」」的正確答案是「艾」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "氣「ㄐㄧˊ」敗壞",
    "answer": "急",
    "options": [
      "急",
      "阿",
      "刻",
      "究"
    ],
    "note": "「氣「ㄐㄧˊ」敗壞」的正確答案是「急」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "長「ㄒㄩ」短嘆",
    "answer": "吁",
    "options": [
      "吁",
      "阿",
      "刻",
      "究"
    ],
    "note": "「長「ㄒㄩ」短嘆」的正確答案是「吁」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "年「ㄑㄧㄥ」氣盛",
    "answer": "輕",
    "options": [
      "輕",
      "阿",
      "刻",
      "究"
    ],
    "note": "「年「ㄑㄧㄥ」氣盛」的正確答案是「輕」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "因循「ㄉㄞˋ」惰",
    "answer": "怠",
    "options": [
      "怠",
      "阿",
      "刻",
      "究"
    ],
    "note": "「因循「ㄉㄞˋ」惰」的正確答案是「怠」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "不「ㄓˋ」不求",
    "answer": "忮",
    "options": [
      "忮",
      "阿",
      "刻",
      "究"
    ],
    "note": "「不「ㄓˋ」不求」的正確答案是「忮」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "忐「ㄊㄜˋ」不安",
    "answer": "忑",
    "options": [
      "忑",
      "阿",
      "刻",
      "究"
    ],
    "note": "「忐「ㄊㄜˋ」不安」的正確答案是「忑」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "怗「ㄋㄧˊ」不安",
    "answer": "怩",
    "options": [
      "怩",
      "阿",
      "刻",
      "究"
    ],
    "note": "「怗「ㄋㄧˊ」不安」的正確答案是「怩」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "痛心「ㄐㄧˊ」首",
    "answer": "疾",
    "options": [
      "疾",
      "阿",
      "刻",
      "究"
    ],
    "note": "「痛心「ㄐㄧˊ」首」的正確答案是「疾」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "纏綿「ㄈㄟˇ」惻",
    "answer": "悱",
    "options": [
      "悱",
      "阿",
      "刻",
      "究"
    ],
    "note": "「纏綿「ㄈㄟˇ」惻」的正確答案是「悱」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "色厲內「ㄖㄣˇ」",
    "answer": "荏",
    "options": [
      "荏",
      "阿",
      "刻",
      "究"
    ],
    "note": "「色厲內「ㄖㄣˇ」」的正確答案是「荏」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "「ㄐㄧˊ」妒別人",
    "answer": "嫉",
    "options": [
      "嫉",
      "阿",
      "刻",
      "究"
    ],
    "note": "「「ㄐㄧˊ」妒別人」的正確答案是「嫉」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "怙「ㄜˋ」不悛",
    "answer": "惡",
    "options": [
      "惡",
      "阿",
      "刻",
      "究"
    ],
    "note": "「怙「ㄜˋ」不悛」的正確答案是「惡」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "百折不「ㄋㄠˊ」",
    "answer": "撓",
    "options": [
      "撓",
      "阿",
      "刻",
      "究"
    ],
    "note": "「百折不「ㄋㄠˊ」」的正確答案是「撓」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "天性狡「ㄒㄧㄚˊ」",
    "answer": "黠",
    "options": [
      "黠",
      "阿",
      "刻",
      "究"
    ],
    "note": "「天性狡「ㄒㄧㄚˊ」」的正確答案是「黠」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "同仇敵「ㄎㄞˋ」",
    "answer": "愾",
    "options": [
      "愾",
      "阿",
      "刻",
      "究"
    ],
    "note": "「同仇敵「ㄎㄞˋ」」的正確答案是「愾」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "「ㄒㄧㄠ」勇善戰",
    "answer": "驍",
    "options": [
      "驍",
      "阿",
      "刻",
      "究"
    ],
    "note": "「「ㄒㄧㄠ」勇善戰」的正確答案是「驍」。"
  },
  {
    "round": 11,
    "type": "shape",
    "question": "心中憤「ㄇㄢˇ」",
    "answer": "懣",
    "options": [
      "懣",
      "阿",
      "刻",
      "究"
    ],
    "note": "「心中憤「ㄇㄢˇ」」的正確答案是「懣」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「塑」膠的讀音",
    "answer": "ㄙㄨˋ",
    "options": [
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ",
      "ㄈㄨˋ"
    ],
    "note": "「「塑」膠的讀音」的正確答案是「ㄙㄨˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「溯」溪的讀音",
    "answer": "ㄙㄨˋ",
    "options": [
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ",
      "ㄈㄨˋ"
    ],
    "note": "「「溯」溪的讀音」的正確答案是「ㄙㄨˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「朔」望的讀音",
    "answer": "ㄕㄨㄛˋ",
    "options": [
      "ㄕㄨㄛˋ",
      "ㄙㄨˋ",
      "ㄅㄨˇ",
      "ㄈㄨˋ"
    ],
    "note": "「「朔」望的讀音」的正確答案是「ㄕㄨㄛˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「卜」卦的讀音",
    "answer": "ㄅㄨˇ",
    "options": [
      "ㄅㄨˇ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄈㄨˋ"
    ],
    "note": "「「卜」卦的讀音」的正確答案是「ㄅㄨˇ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "接到「訃」告的讀音",
    "answer": "ㄈㄨˋ",
    "options": [
      "ㄈㄨˋ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「接到「訃」告的讀音」的正確答案是「ㄈㄨˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「兌」換的讀音",
    "answer": "ㄉㄨㄟˋ",
    "options": [
      "ㄉㄨㄟˋ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「兌」換的讀音」的正確答案是「ㄉㄨㄟˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「蛻」變的讀音",
    "answer": "ㄊㄨㄟˋ",
    "options": [
      "ㄊㄨㄟˋ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「蛻」變的讀音」的正確答案是「ㄊㄨㄟˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「培」養的讀音",
    "answer": "ㄆㄟˊ",
    "options": [
      "ㄆㄟˊ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「培」養的讀音」的正確答案是「ㄆㄟˊ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "烘「焙」的讀音",
    "answer": "ㄅㄟˋ",
    "options": [
      "ㄅㄟˋ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「烘「焙」的讀音」的正確答案是「ㄅㄟˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「圯」上老人的讀音",
    "answer": "ㄧˊ",
    "options": [
      "ㄧˊ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「圯」上老人的讀音」的正確答案是「ㄧˊ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "傾「圮」的讀音",
    "answer": "ㄆㄧˇ",
    "options": [
      "ㄆㄧˇ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「傾「圮」的讀音」的正確答案是「ㄆㄧˇ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「庇」護的讀音",
    "answer": "ㄅㄧˋ",
    "options": [
      "ㄅㄧˋ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「庇」護的讀音」的正確答案是「ㄅㄧˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「仳」離的讀音",
    "answer": "ㄆㄧˇ",
    "options": [
      "ㄆㄧˇ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「仳」離的讀音」的正確答案是「ㄆㄧˇ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "針「灸」的讀音",
    "answer": "ㄐㄧㄡˇ",
    "options": [
      "ㄐㄧㄡˇ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「針「灸」的讀音」的正確答案是「ㄐㄧㄡˇ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "膾「炙」人口的讀音",
    "answer": "ㄓˋ",
    "options": [
      "ㄓˋ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「膾「炙」人口的讀音」的正確答案是「ㄓˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "不「偏」不倚的讀音",
    "answer": "ㄆㄧㄢ",
    "options": [
      "ㄆㄧㄢ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「不「偏」不倚的讀音」的正確答案是「ㄆㄧㄢ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「褊」狹的讀音",
    "answer": "ㄅㄧㄢˇ",
    "options": [
      "ㄅㄧㄢˇ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「褊」狹的讀音」的正確答案是「ㄅㄧㄢˇ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「遍」地的讀音",
    "answer": "ㄅㄧㄢˋ",
    "options": [
      "ㄅㄧㄢˋ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「遍」地的讀音」的正確答案是「ㄅㄧㄢˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「蝙」蝠的讀音",
    "answer": "ㄅㄧㄢ",
    "options": [
      "ㄅㄧㄢ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「蝙」蝠的讀音」的正確答案是「ㄅㄧㄢ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "水泥「樁」的讀音",
    "answer": "ㄓㄨㄤ",
    "options": [
      "ㄓㄨㄤ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「水泥「樁」的讀音」的正確答案是「ㄓㄨㄤ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「舂」米的讀音",
    "answer": "ㄔㄨㄥ",
    "options": [
      "ㄔㄨㄥ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「舂」米的讀音」的正確答案是「ㄔㄨㄥ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "饑「饉」的讀音",
    "answer": "ㄐㄧㄣˇ",
    "options": [
      "ㄐㄧㄣˇ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「饑「饉」的讀音」的正確答案是「ㄐㄧㄣˇ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "朝「覲」的讀音",
    "answer": "ㄐㄧㄣˋ",
    "options": [
      "ㄐㄧㄣˋ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「朝「覲」的讀音」的正確答案是「ㄐㄧㄣˋ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「齲」齒的讀音",
    "answer": "ㄑㄩˇ",
    "options": [
      "ㄑㄩˇ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「齲」齒的讀音」的正確答案是「ㄑㄩˇ」。"
  },
  {
    "round": 12,
    "type": "sound",
    "question": "「踽踽」獨行的讀音",
    "answer": "ㄐㄩˇ",
    "options": [
      "ㄐㄩˇ",
      "ㄙㄨˋ",
      "ㄕㄨㄛˋ",
      "ㄅㄨˇ"
    ],
    "note": "「「踽踽」獨行的讀音」的正確答案是「ㄐㄩˇ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "汙「垢」的讀音",
    "answer": "ㄍㄡˋ",
    "options": [
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ",
      "ㄎㄞˇ"
    ],
    "note": "「汙「垢」的讀音」的正確答案是「ㄍㄡˋ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "邂「逅」的讀音",
    "answer": "ㄏㄡˋ",
    "options": [
      "ㄏㄡˋ",
      "ㄍㄡˋ",
      "ㄍㄞˋ",
      "ㄎㄞˇ"
    ],
    "note": "「邂「逅」的讀音」的正確答案是「ㄏㄡˋ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "英雄氣「概」的讀音",
    "answer": "ㄍㄞˋ",
    "options": [
      "ㄍㄞˋ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄎㄞˇ"
    ],
    "note": "「英雄氣「概」的讀音」的正確答案是「ㄍㄞˋ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "心中感「慨」的讀音",
    "answer": "ㄎㄞˇ",
    "options": [
      "ㄎㄞˇ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「心中感「慨」的讀音」的正確答案是「ㄎㄞˇ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "帝王崩「殂」的讀音",
    "answer": "ㄘㄨˊ",
    "options": [
      "ㄘㄨˊ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「帝王崩「殂」的讀音」的正確答案是「ㄘㄨˊ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "刀「俎」的讀音",
    "answer": "ㄗㄨˇ",
    "options": [
      "ㄗㄨˇ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「刀「俎」的讀音」的正確答案是「ㄗㄨˇ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "急「湍」激流的讀音",
    "answer": "ㄊㄨㄢ",
    "options": [
      "ㄊㄨㄢ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「急「湍」激流的讀音」的正確答案是「ㄊㄨㄢ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "氣「喘」如牛的讀音",
    "answer": "ㄔㄨㄢˇ",
    "options": [
      "ㄔㄨㄢˇ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「氣「喘」如牛的讀音」的正確答案是「ㄔㄨㄢˇ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "「惴」慄難安的讀音",
    "answer": "ㄓㄨㄟˋ",
    "options": [
      "ㄓㄨㄟˋ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「「惴」慄難安的讀音」的正確答案是「ㄓㄨㄟˋ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "「憮」然的讀音",
    "answer": "ㄨˇ",
    "options": [
      "ㄨˇ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「「憮」然的讀音」的正確答案是「ㄨˇ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "「嫵」媚動人的讀音",
    "answer": "ㄨˇ",
    "options": [
      "ㄨˇ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「「嫵」媚動人的讀音」的正確答案是「ㄨˇ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "賄「賂」的讀音",
    "answer": "ㄌㄨˋ",
    "options": [
      "ㄌㄨˋ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「賄「賂」的讀音」的正確答案是「ㄌㄨˋ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "「雒」邑的讀音",
    "answer": "ㄌㄨㄛˋ",
    "options": [
      "ㄌㄨㄛˋ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「「雒」邑的讀音」的正確答案是「ㄌㄨㄛˋ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "妄自「菲」薄的讀音",
    "answer": "ㄈㄟˇ",
    "options": [
      "ㄈㄟˇ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「妄自「菲」薄的讀音」的正確答案是「ㄈㄟˇ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "繾綣「悱」惻的讀音",
    "answer": "ㄈㄟˇ",
    "options": [
      "ㄈㄟˇ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「繾綣「悱」惻的讀音」的正確答案是「ㄈㄟˇ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "「蹣」跚的讀音",
    "answer": "ㄇㄢˊ",
    "options": [
      "ㄇㄢˊ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「「蹣」跚的讀音」的正確答案是「ㄇㄢˊ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "「顢」頇的讀音",
    "answer": "ㄇㄢˊ",
    "options": [
      "ㄇㄢˊ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「「顢」頇的讀音」的正確答案是「ㄇㄢˊ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "義憤填「膺」的讀音",
    "answer": "ㄧㄥ",
    "options": [
      "ㄧㄥ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「義憤填「膺」的讀音」的正確答案是「ㄧㄥ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "販賣「贗」品的讀音",
    "answer": "ㄧㄢˋ",
    "options": [
      "ㄧㄢˋ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「販賣「贗」品的讀音」的正確答案是「ㄧㄢˋ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "一語成「讖」的讀音",
    "answer": "ㄔㄣˋ",
    "options": [
      "ㄔㄣˋ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「一語成「讖」的讀音」的正確答案是「ㄔㄣˋ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "一舉「殲」滅的讀音",
    "answer": "ㄐㄧㄢ",
    "options": [
      "ㄐㄧㄢ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「一舉「殲」滅的讀音」的正確答案是「ㄐㄧㄢ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "不論輸「贏」的讀音",
    "answer": "ㄧㄥˊ",
    "options": [
      "ㄧㄥˊ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「不論輸「贏」的讀音」的正確答案是「ㄧㄥˊ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "秦王「嬴」政的讀音",
    "answer": "ㄧㄥˊ",
    "options": [
      "ㄧㄥˊ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「秦王「嬴」政的讀音」的正確答案是「ㄧㄥˊ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "「攆」走的讀音",
    "answer": "ㄋㄧㄢˇ",
    "options": [
      "ㄋㄧㄢˇ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「「攆」走的讀音」的正確答案是「ㄋㄧㄢˇ」。"
  },
  {
    "round": 13,
    "type": "sound",
    "question": "龍車鳳「輦」的讀音",
    "answer": "ㄋㄧㄢˇ",
    "options": [
      "ㄋㄧㄢˇ",
      "ㄍㄡˋ",
      "ㄏㄡˋ",
      "ㄍㄞˋ"
    ],
    "note": "「龍車鳳「輦」的讀音」的正確答案是「ㄋㄧㄢˇ」。"
  }
]
;

const REVIEW_DATA =
[
  {
    "round": 1,
    "title": "第一回：美食有形",
    "subtitle": "第 1 回複習"
  },
  {
    "round": 2,
    "title": "第二回：美食之音",
    "subtitle": "第 2 回複習"
  },
  {
    "round": 3,
    "title": "第三回：自然景觀",
    "subtitle": "第 3 回複習"
  },
  {
    "round": 4,
    "title": "第四回：蟲蟲危機",
    "subtitle": "第 4 回複習"
  },
  {
    "round": 5,
    "title": "第五回：使物鼓事盡衝",
    "subtitle": "第 5 回複習"
  },
  {
    "round": 6,
    "title": "第六回：種花植草",
    "subtitle": "第 6 回複習"
  },
  {
    "round": 7,
    "title": "第七回：拈花惹草",
    "subtitle": "第 7 回複習"
  },
  {
    "round": 8,
    "title": "第八回：百鳥朝鳳",
    "subtitle": "第 8 回複習"
  },
  {
    "round": 9,
    "title": "第九回：水中世界",
    "subtitle": "第 9 回複習"
  },
  {
    "round": 10,
    "title": "第十回：張就道表嘗爾",
    "subtitle": "第 10 回複習"
  },
  {
    "round": 11,
    "title": "第十一回：情感表現",
    "subtitle": "第 11 回複習"
  },
  {
    "round": 12,
    "title": "第十二回：看形辨音1",
    "subtitle": "第 12 回複習"
  },
  {
    "round": 13,
    "title": "第十三回：看形辨音2",
    "subtitle": "第 13 回複習"
  }
]
;

// 舊版除錯大作戰保留名稱；目前六組打怪模式直接使用 RAW_SHEET_DATA。
const GAME_WORDS_DATABASE = [];
