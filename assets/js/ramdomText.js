var texts = [
    "云深山坞 烟冷江皋 人生未易相逢",
    "欲买桂花同载酒 终不似少年游",
    "莫道桑榆晚 为霞尚满天",
    "古木逢春犹再发 人无两度再少年",
    "恰似人间惊鸿客 墨染星辰云水间",
    "人生若只如初见 何事秋风悲画扇",
    "年年岁岁花相似 岁岁年年人不同",
    "流光容易把人抛 红了樱桃 绿了芭蕉",
    "海棠未雨 梨花先雪 一半春休",
    "要等时间嘉许 等春风得意",
    "南风知我意 吹梦到西洲",
];

// 函数：随机选择文字
function getRandomText() {
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 将随机选择的文字设置到页面上
document.getElementById('randomText').innerText = getRandomText();