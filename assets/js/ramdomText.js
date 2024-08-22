var texts = [
    "云深山坞 烟冷江皋 人生未易相逢",
    "欲买桂花同载酒 终不似 少年游",
    "年年岁岁花相似 岁岁年年人不同",
    "流光容易把人抛 红了樱桃 绿了芭蕉",
    "海棠未雨 梨花先雪 一半春休",
    "要等时间嘉许 等春风得意",
    "辞幕尔尔 烟火年年",
    "日出有盼 日落有念 心有所期 忙而不茫",
];

// 函数：随机选择文字
function getRandomText() {
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 将随机选择的文字设置到页面上
document.getElementById('randomText').innerText = getRandomText();
