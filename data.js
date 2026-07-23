/**
 * 國中九年級形音義複習系統 - 核心資料庫 (data.js)
 * 資料來源：教師提供之 Google Sheet TSV，並經人工校正選項。
 * 共 100 題，分為六回，題數依序為 25、12、13、12、13、25 題。
 */

const RAW_SHEET_DATA = [
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「使」性子的字義",
        "answer":  "放縱、放任",
        "options":  [
                        "放縱、放任",
                        "派用、任用",
                        "讓、以致於",
                        "出使"
                    ],
        "note":  "「「使」性子的字義」的正確字義是「放縱、放任」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「使」功不如使過的字義",
        "answer":  "派用、任用",
        "options":  [
                        "派用、任用",
                        "放縱、放任",
                        "讓、以致於",
                        "出使"
                    ],
        "note":  "「「使」功不如使過的字義」的正確字義是「派用、任用」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "長「使」英雄淚滿襟的字義",
        "answer":  "讓、以致於",
        "options":  [
                        "讓、以致於",
                        "出使",
                        "派用、任用",
                        "放縱、放任"
                    ],
        "note":  "「長「使」英雄淚滿襟的字義」的正確字義是「讓、以致於」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "晏子「使」楚的字義",
        "answer":  "出使",
        "options":  [
                        "出使",
                        "放縱、放任",
                        "派用、任用",
                        "讓、以致於"
                    ],
        "note":  "「晏子「使」楚的字義」的正確字義是「出使」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "綠衣「使」者的字義",
        "answer":  "奉命到外國執行任務或留駐的人員",
        "options":  [
                        "奉命到外國執行任務或留駐的人員",
                        "放縱、放任",
                        "派用、任用",
                        "讓、以致於"
                    ],
        "note":  "「綠衣「使」者的字義」的正確字義是「奉命到外國執行任務或留駐的人員」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「物」色人選的字義",
        "answer":  "尋找",
        "options":  [
                        "尋找",
                        "內容",
                        "物體",
                        "人、事、境界"
                    ],
        "note":  "「「物」色人選的字義」的正確字義是「尋找」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "言之有「物」的字義",
        "answer":  "內容",
        "options":  [
                        "內容",
                        "尋找",
                        "物體",
                        "人、事、境界"
                    ],
        "note":  "「言之有「物」的字義」的正確字義是「內容」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「物」外之趣的字義",
        "answer":  "物體",
        "options":  [
                        "物體",
                        "內容",
                        "尋找",
                        "人、事、境界"
                    ],
        "note":  "「「物」外之趣的字義」的正確字義是「物體」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "待人接「物」的字義",
        "answer":  "人、事、境界",
        "options":  [
                        "人、事、境界",
                        "內容",
                        "物體",
                        "尋找"
                    ],
        "note":  "「待人接「物」的字義」的正確字義是「人、事、境界」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「鼓」動翅膀的字義",
        "answer":  "振動",
        "options":  [
                        "振動",
                        "漲起",
                        "振作、激勵",
                        "樂器名"
                    ],
        "note":  "「「鼓」動翅膀的字義」的正確字義是「振動」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「鼓」著腮幫子的字義",
        "answer":  "漲起",
        "options":  [
                        "漲起",
                        "振動",
                        "振作、激勵",
                        "樂器名"
                    ],
        "note":  "「「鼓」著腮幫子的字義」的正確字義是「漲起」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「鼓」起勇氣的字義",
        "answer":  "振作、激勵",
        "options":  [
                        "振作、激勵",
                        "振動",
                        "漲起",
                        "樂器名"
                    ],
        "note":  "「「鼓」起勇氣的字義」的正確字義是「振作、激勵」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "敲鑼打「鼓」的字義",
        "answer":  "樂器名",
        "options":  [
                        "樂器名",
                        "振動",
                        "漲起",
                        "振作、激勵"
                    ],
        "note":  "「敲鑼打「鼓」的字義」的正確字義是「樂器名」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「事」之以禮的字義",
        "answer":  "侍奉",
        "options":  [
                        "侍奉",
                        "人類所作所為",
                        "變故",
                        "從事"
                    ],
        "note":  "「「事」之以禮的字義」的正確字義是「侍奉」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "人「事」全非的字義",
        "answer":  "人類所作所為",
        "options":  [
                        "人類所作所為",
                        "侍奉",
                        "變故",
                        "從事"
                    ],
        "note":  "「人「事」全非的字義」的正確字義是「人類所作所為」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "多「事」之秋的字義",
        "answer":  "變故",
        "options":  [
                        "變故",
                        "侍奉",
                        "人類所作所為",
                        "從事"
                    ],
        "note":  "「多「事」之秋的字義」的正確字義是「變故」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "無所「事」事的字義",
        "answer":  "從事",
        "options":  [
                        "從事",
                        "侍奉",
                        "人類所作所為",
                        "變故"
                    ],
        "note":  "「無所「事」事的字義」的正確字義是「從事」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「盡」力而為的字義",
        "answer":  "全部取出",
        "options":  [
                        "全部取出",
                        "全部、都",
                        "完結、終止",
                        "隱沒"
                    ],
        "note":  "「「盡」力而為的字義」的正確字義是「全部取出」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "不「盡」相同的字義",
        "answer":  "全部、都",
        "options":  [
                        "全部、都",
                        "全部取出",
                        "完結、終止",
                        "隱沒"
                    ],
        "note":  "「不「盡」相同的字義」的正確字義是「全部、都」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "取之不「盡」的字義",
        "answer":  "完結、終止",
        "options":  [
                        "完結、終止",
                        "全部取出",
                        "全部、都",
                        "隱沒"
                    ],
        "note":  "「取之不「盡」的字義」的正確字義是「完結、終止」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "孤帆遠影碧山「盡」的字義",
        "answer":  "隱沒",
        "options":  [
                        "隱沒",
                        "全部取出",
                        "全部、都",
                        "完結、終止"
                    ],
        "note":  "「孤帆遠影碧山「盡」的字義」的正確字義是「隱沒」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "「衝」鋒陷陣的字義",
        "answer":  "突擊",
        "options":  [
                        "突擊",
                        "急速前進",
                        "直著向上頂",
                        "交通要道"
                    ],
        "note":  "「「衝」鋒陷陣的字義」的正確字義是「突擊」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "橫「衝」直撞的字義",
        "answer":  "急速前進",
        "options":  [
                        "急速前進",
                        "突擊",
                        "直著向上頂",
                        "交通要道"
                    ],
        "note":  "「橫「衝」直撞的字義」的正確字義是「急速前進」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "怒髮「衝」冠的字義",
        "answer":  "直著向上頂",
        "options":  [
                        "直著向上頂",
                        "突擊",
                        "急速前進",
                        "交通要道"
                    ],
        "note":  "「怒髮「衝」冠的字義」的正確字義是「直著向上頂」。"
    },
    {
        "round":  1,
        "type":  "meaning",
        "question":  "道路要「衝」的字義",
        "answer":  "交通要道",
        "options":  [
                        "交通要道",
                        "突擊",
                        "急速前進",
                        "直著向上頂"
                    ],
        "note":  "「道路要「衝」的字義」的正確字義是「交通要道」。"
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
        "question":  "「莧」菜小魚的讀音",
        "answer":  "ㄒㄧㄢˋ",
        "options":  [
                        "ㄒㄧㄢ",
                        "ㄐㄧㄢˋ",
                        "ㄒㄧㄢˊ",
                        "ㄒㄧㄢˋ"
                    ],
        "note":  "「莧菜」的「莧」讀作「ㄒㄧㄢˋ」。"
    },
    {
        "round":  4,
        "type":  "pronunciation",
        "question":  "金「桔」檸檬的讀音",
        "answer":  "ㄐㄩˊ",
        "options":  [
                        "ㄐㄧㄝˊ",
                        "ㄐㄧˊ",
                        "ㄐㄩˊ",
                        "ㄐㄧˇ"
                    ],
        "note":  "「金桔」的「桔」同「橘」，讀作「ㄐㄩˊ」。"
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
        "question":  "「菲」力牛排的讀音",
        "answer":  "ㄈㄟ",
        "options":  [
                        "ㄈㄟˊ",
                        "ㄈㄟ",
                        "ㄆㄟˊ",
                        "ㄈㄟˇ"
                    ],
        "note":  "「菲力牛排」的「菲」讀作「ㄈㄟ」。"
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
                        "弓",
                        "穹",
                        "窮"
                    ],
        "note":  "「蒼穹」的正確寫法是「穹」。"
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
        "round":  6,
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
        "round":  6,
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
        "round":  6,
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
        "round":  6,
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
        "round":  6,
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
        "round":  6,
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
        "round":  6,
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
        "round":  6,
        "type":  "shape",
        "question":  "廣闊蒼「ㄑㄩㄥ」",
        "answer":  "穹",
        "options":  [
                        "芎",
                        "弓",
                        "穹",
                        "窮"
                    ],
        "note":  "「廣闊蒼「ㄑㄩㄥ」」的正確答案是「穹」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "「ㄕㄨˋ」光乍現",
        "answer":  "曙",
        "options":  [
                        "薯",
                        "曙",
                        "暑",
                        "署"
                    ],
        "note":  "「「ㄕㄨˋ」光乍現」的正確答案是「曙」。"
    },
    {
        "round":  6,
        "type":  "shape",
        "question":  "冬溫夏「ㄐㄧㄥˋ」",
        "answer":  "凊",
        "options":  [
                        "凊",
                        "清",
                        "晴",
                        "情"
                    ],
        "note":  "「冬溫夏「ㄐㄧㄥˋ」」的正確答案是「凊」。"
    },
    {
        "round":  6,
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
        "round":  6,
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
        "question":  "未雨綢「ㄇㄡˊ」",
        "answer":  "繆",
        "options":  [
                        "謀",
                        "繆",
                        "牟",
                        "眸"
                    ],
        "note":  "「未雨綢「ㄇㄡˊ」」的正確答案是「繆」。"
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
        "title":  "第一回：使物鼓事盡衝",
        "subtitle":  "第 1 回複習"
    },
    {
        "round":  2,
        "title":  "第二回：美食之音",
        "subtitle":  "第 2 回複習"
    },
    {
        "round":  3,
        "title":  "第三回：自然景觀",
        "subtitle":  "第 3 回複習"
    },
    {
        "round":  4,
        "title":  "第四回：蟲蟲危機",
        "subtitle":  "第 4 回複習"
    },
    {
        "round":  5,
        "title":  "第五回：萬物字形上",
        "subtitle":  "第 5 回複習"
    },
    {
        "round":  6,
        "title":  "第六回：種花植草",
        "subtitle":  "第 6 回複習"
    }
];

// 舊版除錯大作戰保留名稱；目前六組打怪模式直接使用 RAW_SHEET_DATA。
const GAME_WORDS_DATABASE = [];
