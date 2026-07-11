/**
 * 國中九年級形音義複習系統 - 核心資料庫 (data.js)
 * 資料來源：教師提供之 Google Sheet TSV。
 * 共 75 題，分為三回，每回 25 題。
 */

const RAW_SHEET_DATA = [
    {
        "round":  1,
        "type":  "shape",
        "question":  "大「ㄎㄨㄞˋ」朵頤",
        "answer":  "快",
        "options":  [
                        "快",
                        "塊",
                        "筷",
                        "膾"
                    ],
        "note":  "「大「ㄎㄨㄞˋ」朵頤」的正確答案是「快」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "番「ㄑㄧㄝˊ」炒蛋",
        "answer":  "茄",
        "options":  [
                        "協",
                        "伽",
                        "笳",
                        "茄"
                    ],
        "note":  "「番「ㄑㄧㄝˊ」炒蛋」的正確答案是「茄」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "刀「ㄒㄧㄠ」麵",
        "answer":  "削",
        "options":  [
                        "消",
                        "霄",
                        "削",
                        "宵"
                    ],
        "note":  "「刀「ㄒㄧㄠ」麵」的正確答案是「削」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "「ㄊㄨˇ」魠魚",
        "answer":  "𩵚",
        "options":  [
                        "兔",
                        "𩵚",
                        "土",
                        "吐"
                    ],
        "note":  "「「ㄊㄨˇ」魠魚」的正確答案是「𩵚」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "小米「ㄓㄡ」",
        "answer":  "粥",
        "options":  [
                        "粥",
                        "州",
                        "洲",
                        "週"
                    ],
        "note":  "「小米「ㄓㄡ」」的正確答案是「粥」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "人參枸「ㄑㄧˇ」",
        "answer":  "杞",
        "options":  [
                        "起",
                        "己",
                        "紀",
                        "杞"
                    ],
        "note":  "「人參枸「ㄑㄧˇ」」的正確答案是「杞」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "雞「ㄖㄨㄥˊ」玉米濃湯",
        "answer":  "茸",
        "options":  [
                        "絨",
                        "容",
                        "茸",
                        "融"
                    ],
        "note":  "「雞「ㄖㄨㄥˊ」玉米濃湯」的正確答案是「茸」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "香酥排「ㄌㄜˋ」",
        "answer":  "肋",
        "options":  [
                        "脅",
                        "肋",
                        "勒",
                        "助"
                    ],
        "note":  "「香酥排「ㄌㄜˋ」」的正確答案是「肋」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "北京「ㄌㄠˋ」餅",
        "answer":  "烙",
        "options":  [
                        "烙",
                        "落",
                        "洛",
                        "絡"
                    ],
        "note":  "「北京「ㄌㄠˋ」餅」的正確答案是「烙」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "豆「ㄔˇ」牡蠣",
        "answer":  "豉",
        "options":  [
                        "鼓",
                        "豆",
                        "皷",
                        "豉"
                    ],
        "note":  "「豆「ㄔˇ」牡蠣」的正確答案是「豉」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "「ㄋㄨㄛˋ」米飯",
        "answer":  "糯",
        "options":  [
                        "儒",
                        "濡",
                        "糯",
                        "懦"
                    ],
        "note":  "「「ㄋㄨㄛˋ」米飯」的正確答案是「糯」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "「ㄘㄠ」米飯",
        "answer":  "糙",
        "options":  [
                        "躁",
                        "糙",
                        "操",
                        "燥"
                    ],
        "note":  "「「ㄘㄠ」米飯」的正確答案是「糙」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "「ㄐㄩˊ」烤飯",
        "answer":  "焗",
        "options":  [
                        "焗",
                        "局",
                        "鋦",
                        "拘"
                    ],
        "note":  "「「ㄐㄩˊ」烤飯」的正確答案是「焗」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "涼拌牛「ㄅㄤˋ」",
        "answer":  "蒡",
        "options":  [
                        "旁",
                        "榜",
                        "膀",
                        "蒡"
                    ],
        "note":  "「涼拌牛「ㄅㄤˋ」」的正確答案是「蒡」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "滷雞「ㄓㄣ」",
        "answer":  "胗",
        "options":  [
                        "針",
                        "診",
                        "胗",
                        "珍"
                    ],
        "note":  "「滷雞「ㄓㄣ」」的正確答案是「胗」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "紅豆「ㄘㄨㄛˋ」冰",
        "answer":  "剉",
        "options":  [
                        "坐",
                        "剉",
                        "挫",
                        "銼"
                    ],
        "note":  "「紅豆「ㄘㄨㄛˋ」冰」的正確答案是「剉」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "「ㄧㄢ」芭樂",
        "answer":  "醃",
        "options":  [
                        "醃",
                        "淹",
                        "掩",
                        "奄"
                    ],
        "note":  "「「ㄧㄢ」芭樂」的正確答案是「醃」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "蒸「ㄌㄧㄡˋ」水",
        "answer":  "餾",
        "options":  [
                        "流",
                        "留",
                        "榴",
                        "餾"
                    ],
        "note":  "「蒸「ㄌㄧㄡˋ」水」的正確答案是「餾」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "「ㄓㄣ」果拿鐵",
        "answer":  "榛",
        "options":  [
                        "蓁",
                        "臻",
                        "榛",
                        "珍"
                    ],
        "note":  "「「ㄓㄣ」果拿鐵」的正確答案是「榛」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "歐「ㄌㄟˇ」咖啡",
        "answer":  "蕾",
        "options":  [
                        "壘",
                        "蕾",
                        "雷",
                        "儡"
                    ],
        "note":  "「歐「ㄌㄟˇ」咖啡」的正確答案是「蕾」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "「ㄐㄩˇ」弱果凍",
        "answer":  "蒟",
        "options":  [
                        "蒟",
                        "弱",
                        "苟",
                        "句"
                    ],
        "note":  "「「ㄐㄩˇ」弱果凍」的正確答案是「蒟」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "紅燒牛「ㄋㄢˇ」",
        "answer":  "腩",
        "options":  [
                        "南",
                        "楠",
                        "喃",
                        "腩"
                    ],
        "note":  "「紅燒牛「ㄋㄢˇ」」的正確答案是「腩」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "「ㄌㄨˇ」肉飯",
        "answer":  "滷",
        "options":  [
                        "鹵",
                        "擄",
                        "滷",
                        "魯"
                    ],
        "note":  "「「ㄌㄨˇ」肉飯」的正確答案是「滷」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "清「ㄉㄨㄣˋ」牛肉",
        "answer":  "燉",
        "options":  [
                        "鈍",
                        "燉",
                        "頓",
                        "噸"
                    ],
        "note":  "「清「ㄉㄨㄣˋ」牛肉」的正確答案是「燉」。"
    },
    {
        "round":  1,
        "type":  "shape",
        "question":  "牛「ㄐㄧㄢˋ」切片",
        "answer":  "腱",
        "options":  [
                        "腱",
                        "健",
                        "鍵",
                        "建"
                    ],
        "note":  "「牛「ㄐㄧㄢˋ」切片」的正確答案是「腱」。"
    },
    {
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  2,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "round":  3,
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
        "title":  "第一回：美味食光——寫字篇",
        "subtitle":  "第 1 回複習"
    },
    {
        "round":  2,
        "title":  "第二回：饕客必讀——讀音篇",
        "subtitle":  "第 2 回複習"
    },
    {
        "round":  3,
        "title":  "第三回：萬物氣象——字形篇",
        "subtitle":  "第 3 回複習"
    }
];

// 舊版除錯大作戰保留名稱；目前六組打怪模式直接使用 RAW_SHEET_DATA。
const GAME_WORDS_DATABASE = [];
