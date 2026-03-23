var texts = [
    "云深山坞 烟冷江皋 人生未易相逢",
    "欲买桂花同载酒 终不似 少年游",
    "年年岁岁花相似 岁岁年年人不同",
    "海棠未雨 梨花先雪 一半春休",
    "要等时间嘉许 等春风得意",
    "辞幕尔尔 烟火年年",
];

var pool = [];

function shuffleInPlace(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}

function refillPool() {
    pool = texts.slice();
    shuffleInPlace(pool);
}

// 每轮无放回随机；一轮用完后重新洗牌再取
function getRandomText() {
    if (pool.length === 0) {
        refillPool();
    }
    return pool.pop();
}

// 将随机选择的文字设置到页面上
document.getElementById('randomText').innerText = getRandomText();
