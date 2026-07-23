/**
 * 國中九年級形音義複習系統 - 核心資料庫 (data.js)
 * 資料來源：教師提供之 Google Sheet TSV，並經人工校正選項。
 * 共 75 題，分為六回，題數依序為 13、12、13、12、13、12 題。
 */

const RAW_SHEET_DATA = [
    {
        "round":  1,
        "type":  "shape",
        "question":  "花「ㄖㄨㄟˇ」",
        "answer":  "蕊",
        "options":  [
                        "芯",
                        "蕊",
                        "蕾",
                        "芮"
                    ],
        "note":  "「花蕊」的正確寫法是「蕊」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "良「ㄧㄡˋ」不齊",
        "answer":  "莠",
        "options":  [
                        "莠",
                        "誘",
                        "秀",
                        "祐"
                    ],
        "note":  "「良莠不齊」的正確寫法是「莠」，比喻好壞混雜。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "千年紅「ㄎㄨㄞˋ」",
        "answer":  "檜",
        "options":  [
                        "膾",
                        "檜",
                        "會",
                        "燴"
                    ],
        "note":  "「紅檜」的正確寫法是「檜」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "蔥「ㄙㄨㄢˋ」不分",
        "answer":  "蒜",
        "options":  [
                        "算",
                        "酸",
                        "蒜",
                        "薹"
                    ],
        "note":  "「蔥蒜不分」的正確寫法是「蒜」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "雨後春「ㄙㄨㄣˇ」",
        "answer":  "筍",
        "options":  [
                        "榫",
                        "隼",
                        "笋",
                        "筍"
                    ],
        "note":  "「雨後春筍」的正確寫法是「筍」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "「ㄔㄨㄣ」萱並茂",
        "answer":  "椿",
        "options":  [
                        "春",
                        "椿",
                        "樁",
                        "榛"
                    ],
        "note":  "「椿萱並茂」的正確寫法是「椿」，用來祝福父母健在。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "高「ㄌㄧㄤˊ」酒",
        "answer":  "粱",
        "options":  [
                        "梁",
                        "糧",
                        "粱",
                        "涼"
                    ],
        "note":  "「高粱酒」的正確寫法是「粱」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "冒雨剪「ㄐㄧㄡˇ」",
        "answer":  "韭",
        "options":  [
                        "韭",
                        "久",
                        "玖",
                        "灸"
                    ],
        "note":  "「韭」讀作 ㄐㄧㄡˇ，是韭菜的韭。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "績麻拈「ㄓㄨˋ」",
        "answer":  "苧",
        "options":  [
                        "貯",
                        "佇",
                        "苧",
                        "杼"
                    ],
        "note":  "「苧」可指苧麻，正確寫法是草字頭的「苧」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "草「ㄐㄧㄢ」人命",
        "answer":  "菅",
        "options":  [
                        "管",
                        "奸",
                        "間",
                        "菅"
                    ],
        "note":  "「草菅人命」的正確寫法是「菅」，指一種草。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "田間「ㄅㄞˋ」草",
        "answer":  "稗",
        "options":  [
                        "稗",
                        "敗",
                        "唄",
                        "裨"
                    ],
        "note":  "「稗草」的正確寫法是「稗」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "如火如「ㄊㄨˊ」",
        "answer":  "荼",
        "options":  [
                        "茶",
                        "塗",
                        "荼",
                        "途"
                    ],
        "note":  "「如火如荼」的正確寫法是「荼」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "河畔青「ㄨˊ」",
        "answer":  "蕪",
        "options":  [
                        "無",
                        "巫",
                        "廡",
                        "蕪"
                    ],
        "note":  "「青蕪」的正確寫法是「蕪」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "青「ㄎㄜ」",
        "answer":  "稞",
        "options":  [
                        "稞",
                        "棵",
                        "顆",
                        "課"
                    ],
        "note":  "「青稞」的正確寫法是「稞」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "「ㄓ」子花開",
        "answer":  "梔",
        "options":  [
                        "枝",
                        "梔",
                        "支",
                        "肢"
                    ],
        "note":  "「梔子花」的正確寫法是「梔」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "桑「ㄩˊ」晚景",
        "answer":  "榆",
        "options":  [
                        "愉",
                        "榆",
                        "愚",
                        "渝"
                    ],
        "note":  "「桑榆晚景」的正確寫法是「榆」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "「ㄡˇ」斷絲連",
        "answer":  "藕",
        "options":  [
                        "偶",
                        "耦",
                        "藕",
                        "嘔"
                    ],
        "note":  "「藕斷絲連」的正確寫法是「藕」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "一「ㄒㄩㄣ」一蕕",
        "answer":  "薰",
        "options":  [
                        "熏",
                        "勳",
                        "燻",
                        "薰"
                    ],
        "note":  "「一薰一蕕」的正確寫法是「薰」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "「ㄘㄨˋ」漿草",
        "answer":  "酢",
        "options":  [
                        "醋",
                        "酢",
                        "促",
                        "觸"
                    ],
        "note":  "「酢漿草」的正確寫法是「酢」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "「ㄏㄨˋ」瓜",
        "answer":  "瓠",
        "options":  [
                        "壺",
                        "滬",
                        "瓠",
                        "互"
                    ],
        "note":  "「瓠瓜」的正確寫法是「瓠」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "「ㄊㄢˊ」花一現",
        "answer":  "曇",
        "options":  [
                        "談",
                        "潭",
                        "檀",
                        "曇"
                    ],
        "note":  "「曇花一現」的正確寫法是「曇」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "棕「ㄌㄩˊ」",
        "answer":  "櫚",
        "options":  [
                        "櫚",
                        "旅",
                        "屢",
                        "鋁"
                    ],
        "note":  "「棕櫚」的正確寫法是「櫚」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "臺灣「ㄌㄨㄢˊ」樹",
        "answer":  "欒",
        "options":  [
                        "鸞",
                        "欒",
                        "巒",
                        "孿"
                    ],
        "note":  "「臺灣欒樹」的正確寫法是「欒」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "朝鮮「ㄐㄧˋ」",
        "answer":  "薊",
        "options":  [
                        "驥",
                        "冀",
                        "薊",
                        "濟"
                    ],
        "note":  "「朝鮮薊」的正確寫法是「薊」。"
    },
    {
        "round":  2,
        "type":  "shape",
        "question":  "「ㄒㄧㄢ」維植物",
        "answer":  "纖",
        "options":  [
                        "鮮",
                        "仙",
                        "籤",
                        "纖"
                    ],
        "note":  "「纖維植物」的正確寫法是「纖」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "牛肉「燴」飯的讀音",
        "answer":  "ㄏㄨㄟˋ",
        "options":  [
                        "ㄏㄨㄟˊ",
                        "ㄎㄨㄟˋ",
                        "ㄏㄨㄟ",
                        "ㄏㄨㄟˋ"
                    ],
        "note":  "「牛肉「燴」飯的讀音」的正確答案是「ㄏㄨㄟˋ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "「餛」飩湯的讀音",
        "answer":  "ㄏㄨㄣˊ",
        "options":  [
                        "ㄏㄨㄣ",
                        "ㄏㄨㄥˊ",
                        "ㄏㄨㄣˊ",
                        "ㄏㄨㄣˋ"
                    ],
        "note":  "「「餛」飩湯的讀音」的正確答案是「ㄏㄨㄣˊ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "「咖」哩飯的讀音",
        "answer":  "ㄎㄚ",
        "options":  [
                        "ㄎㄚˇ",
                        "ㄎㄚ",
                        "ㄐㄧㄚ",
                        "ㄍㄚ"
                    ],
        "note":  "「「咖」哩飯的讀音」的正確答案是「ㄎㄚ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "「蚵」仔煎的讀音",
        "answer":  "ㄜˊ",
        "options":  [
                        "ㄜˊ",
                        "ㄎㄜ",
                        "ㄜˋ",
                        "ㄏㄜˊ"
                    ],
        "note":  "「「蚵」仔煎的讀音」的正確答案是「ㄜˊ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "綜「合」果汁的讀音",
        "answer":  "ㄏㄜˊ",
        "options":  [
                        "ㄍㄜˊ",
                        "ㄏㄜˋ",
                        "ㄜˊ",
                        "ㄏㄜˊ"
                    ],
        "note":  "「綜「合」果汁的讀音」的正確答案是「ㄏㄜˊ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "「涮」羊肉的讀音",
        "answer":  "ㄕㄨㄚ",
        "options":  [
                        "ㄕㄨㄚˋ",
                        "ㄙㄨㄚ",
                        "ㄕㄨㄚ",
                        "ㄕㄨㄢˋ"
                    ],
        "note":  "「「涮」羊肉的讀音」的正確答案是「ㄕㄨㄚ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "「炸」醬麵的讀音",
        "answer":  "ㄓㄚˋ",
        "options":  [
                        "ㄗㄚˋ",
                        "ㄓㄚˋ",
                        "ㄓㄚˊ",
                        "ㄓㄚ"
                    ],
        "note":  "「「炸」醬麵的讀音」的正確答案是「ㄓㄚˋ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "肉「燉」飯的讀音",
        "answer":  "ㄉㄨㄣˋ",
        "options":  [
                        "ㄉㄨㄣˋ",
                        "ㄉㄨㄣ",
                        "ㄊㄨㄣˊ",
                        "ㄉㄨㄢˋ"
                    ],
        "note":  "「肉「燉」飯的讀音」的正確答案是「ㄉㄨㄣˋ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "「什」錦炒麵的讀音",
        "answer":  "ㄕˊ",
        "options":  [
                        "ㄕ",
                        "ㄕˋ",
                        "ㄙˊ",
                        "ㄕˊ"
                    ],
        "note":  "「「什」錦炒麵的讀音」的正確答案是「ㄕˊ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "「蛤」蜊濃湯的讀音",
        "answer":  "ㄍㄚ",
        "options":  [
                        "ㄆㄧㄥˊ",
                        "ㄉㄨˋ",
                        "ㄍㄚ",
                        "ㄅㄚ"
                    ],
        "note":  "「「蛤」蜊濃湯的讀音」的正確答案是「ㄍㄚ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "勾「芡」料理的讀音",
        "answer":  "ㄑㄧㄢˋ",
        "options":  [
                        "ㄑㄧㄥˋ",
                        "ㄑㄧㄢˋ",
                        "ㄑㄧㄢ",
                        "ㄒㄧㄢˋ"
                    ],
        "note":  "「勾「芡」料理的讀音」的正確答案是「ㄑㄧㄢˋ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "「汆」燙肉片的讀音",
        "answer":  "ㄘㄨㄢ",
        "options":  [
                        "ㄘㄨㄢ",
                        "ㄔㄨㄢ",
                        "ㄘㄨㄢˋ",
                        "ㄙㄨㄢ"
                    ],
        "note":  "「「汆」燙肉片的讀音」的正確答案是「ㄘㄨㄢ」。"
    },
    {
        "round":  3,
        "type":  "pronunciation",
        "question":  "味「噌」湯的讀音",
        "answer":  "ㄇㄧˋ",
        "options":  [
                        "ㄅㄚ",
                        "ㄆㄧㄥˊ",
                        "ㄉㄨˋ",
                        "ㄇㄧˋ"
                    ],
        "note":  "「味「噌」湯的讀音」的正確答案是「ㄇㄧˋ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "牛肉「煲」湯的讀音",
        "answer":  "ㄅㄠ",
        "options":  [
                        "ㄅㄠˋ",
                        "ㄆㄠ",
                        "ㄅㄠ",
                        "ㄅㄠˇ"
                    ],
        "note":  "「牛肉「煲」湯的讀音」的正確答案是「ㄅㄠ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "元「盅」雞湯的讀音",
        "answer":  "ㄓㄨㄥ",
        "options":  [
                        "ㄓㄨㄥˊ",
                        "ㄓㄨㄥ",
                        "ㄓㄨㄥˋ",
                        "ㄔㄨㄥ"
                    ],
        "note":  "「元「盅」雞湯的讀音」的正確答案是「ㄓㄨㄥ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "菜「脯」蛋的讀音",
        "answer":  "ㄆㄨˇ",
        "options":  [
                        "ㄆㄨˇ",
                        "ㄅㄚ",
                        "ㄆㄧㄥˊ",
                        "ㄉㄨˋ"
                    ],
        "note":  "「菜「脯」蛋的讀音」的正確答案是「ㄆㄨˇ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "莧「菜」小魚的讀音",
        "answer":  "ㄒㄧㄢˋ",
        "options":  [
                        "ㄒㄧㄢ",
                        "ㄐㄧㄢˋ",
                        "ㄒㄧㄢˊ",
                        "ㄒㄧㄢˋ"
                    ],
        "note":  "「莧「菜」小魚的讀音」的正確答案是「ㄒㄧㄢˋ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "金「桔」檸檬的讀音",
        "answer":  "ㄐㄧˊ",
        "options":  [
                        "ㄐㄧㄝˊ",
                        "ㄐㄧˇ",
                        "ㄐㄧˊ",
                        "ㄐㄧ"
                    ],
        "note":  "「金「桔」檸檬的讀音」的正確答案是「ㄐㄧˊ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "豬「肚」湯的讀音",
        "answer":  "ㄉㄨˇ",
        "options":  [
                        "ㄉㄨ",
                        "ㄉㄨˇ",
                        "ㄉㄨˋ",
                        "ㄊㄨˇ"
                    ],
        "note":  "「豬「肚」湯的讀音」的正確答案是「ㄉㄨˇ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "新港「飴」的讀音",
        "answer":  "ㄧˊ",
        "options":  [
                        "ㄧˊ",
                        "ㄧˋ",
                        "ㄊㄞˊ",
                        "ㄧˇ"
                    ],
        "note":  "「新港「飴」的讀音」的正確答案是「ㄧˊ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "草「仔」粿的讀音",
        "answer":  "ㄗˇ",
        "options":  [
                        "ㄗㄞˇ",
                        "ㄗ",
                        "ㄐㄧˇ",
                        "ㄗˇ"
                    ],
        "note":  "「草「仔」粿的讀音」的正確答案是「ㄗˇ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "紅燒蹄「膀」的讀音",
        "answer":  "ㄅㄤˇ",
        "options":  [
                        "ㄆㄤˊ",
                        "ㄅㄤ",
                        "ㄅㄤˇ",
                        "ㄅㄤˋ"
                    ],
        "note":  "「紅燒蹄「膀」的讀音」的正確答案是「ㄅㄤˇ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "鼎邊「趖」的讀音",
        "answer":  "ㄙㄨㄛ",
        "options":  [
                        "ㄉㄨˋ",
                        "ㄙㄨㄛ",
                        "ㄅㄚ",
                        "ㄆㄧㄥˊ"
                    ],
        "note":  "「鼎邊「趖」的讀音」的正確答案是「ㄙㄨㄛ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "「腓」力牛排的讀音",
        "answer":  "ㄈㄟˊ",
        "options":  [
                        "ㄈㄟˊ",
                        "ㄈㄟ",
                        "ㄆㄟˊ",
                        "ㄈㄟˇ"
                    ],
        "note":  "「「腓」力牛排的讀音」的正確答案是「ㄈㄟˊ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "「煨」牛肉的讀音",
        "answer":  "ㄨㄟ",
        "options":  [
                        "ㄨㄟˋ",
                        "ㄨㄟˊ",
                        "ㄨㄟˇ",
                        "ㄨㄟ"
                    ],
        "note":  "「「煨」牛肉的讀音」的正確答案是「ㄨㄟ」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "水池乾「ㄏㄜˊ」",
        "answer":  "涸",
        "options":  [
                        "固",
                        "沽",
                        "涸",
                        "錮"
                    ],
        "note":  "「水池乾「ㄏㄜˊ」」的正確答案是「涸」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "「ㄔˋ」吒風雲",
        "answer":  "叱",
        "options":  [
                        "吒",
                        "叱",
                        "吃",
                        "斥"
                    ],
        "note":  "「「ㄔˋ」吒風雲」的正確答案是「叱」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "「ㄏㄤˋ」瀣一氣",
        "answer":  "沆",
        "options":  [
                        "沆",
                        "航",
                        "杭",
                        "抗"
                    ],
        "note":  "「「ㄏㄤˋ」瀣一氣」的正確答案是「沆」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "「ㄐㄧㄥ」渭分明",
        "answer":  "涇",
        "options":  [
                        "徑",
                        "經",
                        "莖",
                        "涇"
                    ],
        "note":  "「「ㄐㄧㄥ」渭分明」的正確答案是「涇」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "正值「ㄕㄤˇ」午",
        "answer":  "晌",
        "options":  [
                        "響",
                        "晃",
                        "晌",
                        "餉"
                    ],
        "note":  "「正值「ㄕㄤˇ」午」的正確答案是「晌」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "寒「ㄒㄩㄢ」問候",
        "answer":  "暄",
        "options":  [
                        "煊",
                        "暄",
                        "喧",
                        "宣"
                    ],
        "note":  "「寒「ㄒㄩㄢ」問候」的正確答案是「暄」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "落日餘「ㄒㄧ」",
        "answer":  "晞",
        "options":  [
                        "晞",
                        "希",
                        "稀",
                        "烯"
                    ],
        "note":  "「落日餘「ㄒㄧ」」的正確答案是「晞」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "颯「ㄙㄚˋ」風響",
        "answer":  "颯",
        "options":  [
                        "薩",
                        "灑",
                        "煞",
                        "颯"
                    ],
        "note":  "「颯「ㄙㄚˋ」風響」的正確答案是「颯」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "廣闊蒼「ㄑㄩㄥ」",
        "answer":  "穹",
        "options":  [
                        "芎",
                        "選4",
                        "穹",
                        "窮"
                    ],
        "note":  "「廣闊蒼「ㄑㄩㄥ」」的正確答案是「穹」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "「ㄕㄨˇ」光乍現",
        "answer":  "曙",
        "options":  [
                        "薯",
                        "曙",
                        "暑",
                        "署"
                    ],
        "note":  "「「ㄕㄨˇ」光乍現」的正確答案是「曙」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "冬溫夏「ㄑㄧㄥˋ」",
        "answer":  "凊",
        "options":  [
                        "凊",
                        "清",
                        "晴",
                        "情"
                    ],
        "note":  "「冬溫夏「ㄑㄧㄥˋ」」的正確答案是「凊」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "夜觀星「ㄒㄧㄡˋ」",
        "answer":  "宿",
        "options":  [
                        "秀",
                        "袖",
                        "繡",
                        "宿"
                    ],
        "note":  "「夜觀星「ㄒㄧㄡˋ」」的正確答案是「宿」。"
    },
    {
        "round":  5,
        "type":  "shape",
        "question":  "「ㄙㄨㄥ」山少林",
        "answer":  "嵩",
        "options":  [
                        "松",
                        "崧",
                        "嵩",
                        "聳"
                    ],
        "note":  "「「ㄙㄨㄥ」山少林」的正確答案是「嵩」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "「ㄙㄨˋ」夜匪懈",
        "answer":  "夙",
        "options":  [
                        "速",
                        "夙",
                        "宿",
                        "肅"
                    ],
        "note":  "「「ㄙㄨˋ」夜匪懈」的正確答案是「夙」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "花東「ㄗㄨㄥ」谷",
        "answer":  "縱",
        "options":  [
                        "縱",
                        "總",
                        "綜",
                        "宗"
                    ],
        "note":  "「花東「ㄗㄨㄥ」谷」的正確答案是「縱」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "餐松飲「ㄐㄧㄢˋ」",
        "answer":  "澗",
        "options":  [
                        "簡",
                        "間",
                        "漸",
                        "澗"
                    ],
        "note":  "「餐松飲「ㄐㄧㄢˋ」」的正確答案是「澗」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "陷入泥「ㄋㄠˋ」",
        "answer":  "淖",
        "options":  [
                        "綽",
                        "罩",
                        "淖",
                        "悼"
                    ],
        "note":  "「陷入泥「ㄋㄠˋ」」的正確答案是「淖」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "險要「ㄞˋ」口",
        "answer":  "隘",
        "options":  [
                        "嗌",
                        "隘",
                        "溢",
                        "縊"
                    ],
        "note":  "「險要「ㄞˋ」口」的正確答案是「隘」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "驚「ㄊㄠˊ」駭浪",
        "answer":  "濤",
        "options":  [
                        "濤",
                        "滔",
                        "淘",
                        "掏"
                    ],
        "note":  "「驚「ㄊㄠˊ」駭浪」的正確答案是「濤」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "萬「ㄌㄞˋ」俱寂",
        "answer":  "籟",
        "options":  [
                        "賴",
                        "瀨",
                        "獺",
                        "籟"
                    ],
        "note":  "「萬「ㄌㄞˋ」俱寂」的正確答案是「籟」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "天氣「ㄩˋ」熱",
        "answer":  "燠",
        "options":  [
                        "懊",
                        "澳",
                        "燠",
                        "奧"
                    ],
        "note":  "「天氣「ㄩˋ」熱」的正確答案是「燠」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "未雨綢「ㄇㄧㄡˋ」",
        "answer":  "繆",
        "options":  [
                        "膠",
                        "繆",
                        "謬",
                        "廖"
                    ],
        "note":  "「未雨綢「ㄇㄧㄡˋ」」的正確答案是「繆」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "光風「ㄐㄧˋ」月",
        "answer":  "霽",
        "options":  [
                        "霽",
                        "濟",
                        "際",
                        "齊"
                    ],
        "note":  "「光風「ㄐㄧˋ」月」的正確答案是「霽」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "下起冰「ㄅㄠˊ」",
        "answer":  "雹",
        "options":  [
                        "飽",
                        "孢",
                        "苞",
                        "雹"
                    ],
        "note":  "「下起冰「ㄅㄠˊ」」的正確答案是「雹」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "掃除陰「ㄇㄞˊ」",
        "answer":  "霾",
        "options":  [
                        "邁",
                        "釐",
                        "霾",
                        "埋"
                    ],
        "note":  "「掃除陰「ㄇㄞˊ」」的正確答案是「霾」。"
    }
];

const REVIEW_DATA = [
    {
        "round":  1,
        "title":  "第一回：草木字形上——字形篇",
        "subtitle":  "第 1 回複習"
    },
    {
        "round":  2,
        "title":  "第二回：草木字形下——字形篇",
        "subtitle":  "第 2 回複習"
    },
    {
        "round":  3,
        "title":  "第三回：饕客讀音上——字音篇",
        "subtitle":  "第 3 回複習"
    },
    {
        "round":  4,
        "title":  "第四回：饕客讀音下——字音篇",
        "subtitle":  "第 4 回複習"
    },
    {
        "round":  5,
        "title":  "第五回：萬物字形上——字形篇",
        "subtitle":  "第 5 回複習"
    },
    {
        "round":  6,
        "title":  "第六回：萬物字形下——字形篇",
        "subtitle":  "第 6 回複習"
    }
];

// 舊版除錯大作戰保留名稱；目前六組打怪模式直接使用 RAW_SHEET_DATA。
const GAME_WORDS_DATABASE = [];








