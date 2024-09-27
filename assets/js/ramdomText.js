// var texts = [
//     "云深山坞 烟冷江皋 人生未易相逢",
//     "欲买桂花同载酒 终不似 少年游",
//     "年年岁岁花相似 岁岁年年人不同",
//     "流光容易把人抛 红了樱桃 绿了芭蕉",
//     "海棠未雨 梨花先雪 一半春休",
//     "要等时间嘉许 等春风得意",
//     "辞幕尔尔 烟火年年",

// ];

// // 函数：随机选择文字
// function getRandomText() {
//     var index = Math.floor(Math.random() * texts.length);
//     return texts[index];
// }

// // 将随机选择的文字设置到页面上
// document.getElementById('randomText').innerText = getRandomText();


var texts = [
    "云深山坞 烟冷江皋 人生未易相逢",
    "欲买桂花同载酒 终不似 少年游",
    "年年岁岁花相似 岁岁年年人不同",
    "流光容易把人抛 红了樱桃 绿了芭蕉",
    "海棠未雨 梨花先雪 一半春休",
    "要等时间嘉许 等春风得意",
    "辞幕尔尔 烟火年年",
// "日出有盼 日落有念 心有所期 忙而不茫",
];

// 使用localStorage來存儲當前索引
let currentIndex = parseInt(localStorage.getItem('textIndex')) || 0;

// 函數：按順序獲取下一個文字
function getNextText() {
    const text = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
    localStorage.setItem('textIndex', currentIndex.toString());
    return text;
}

// 將下一個文字設置到頁面上
document.getElementById('randomText').innerText = getNextText();
