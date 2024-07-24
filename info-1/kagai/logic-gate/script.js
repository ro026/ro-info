const titles = [
    { title: "論理回路とは？" },
    { title: "AND回路・OR回路・NOT回路" },
    { title: "基本練習問題" },
    { title: "XOR回路・NAND回路・NOR回路" },
    { title: "応用練習問題" },
    { title: "問題１：" },
    { title: "問題２：" },
]

// 現在のURLを取得してファイル名を抽出
const currentUrl = window.location.pathname;
const currentFileName = currentUrl.split('/').pop();

// ファイル名から番号を取得（先頭の数字を取り出す）
const match = currentFileName.match(/^(\d{2})\.html$/);

if (match) {
    const currentNumber = parseInt(match[1], 10);
    const nextNumber = currentNumber + 1;
    const beforeNumber = currentNumber - 1;
    const nextFileName = nextNumber.toString().padStart(2, '0') + '.html';
    const beforeFileName = beforeNumber.toString().padStart(2, '0') + '.html';

    // ボタンを生成してHTMLに追加
    const buttonNextContainer = document.getElementById('button-next');
    const buttonNext = document.createElement('button');
    buttonNext.textContent = `次のページへ移動`;

    if (nextNumber > 6) {
        buttonNext.disabled = true;
    } else {
        buttonNext.onclick = function () {
            window.location.href = nextFileName;
        };
        buttonNext.className = "backgroundColorBlue colorWhite";
    }
    buttonNextContainer.appendChild(buttonNext);

    // 前のページに移動
    const buttonBeforeContainer = document.getElementById('button-before');
    const buttonBefore = document.createElement('button');
    buttonBefore.textContent = `前のページへ移動`;
    if (beforeNumber <= 0) {
        buttonBefore.disabled = true;
    } else {
        buttonBefore.onclick = function () {
            window.location.href = beforeFileName;
        };
        buttonBefore.className = "backgroundColorBlue colorWhite";
    }
    buttonBeforeContainer.appendChild(buttonBefore);

    const logicTitleEle = document.getElementById("logicTitle");
    logicTitleEle.textContent = titles[currentNumber - 1].title;
}

function toggleImage(element) {
    const img = element.querySelector('img');
    img.classList.toggle('flipped');
    const inputVal = element.querySelector('.input-val');
    inputVal.textContent = inputVal.textContent === '1' ? 0 : 1;

    // 親要素を取得
    const parentContainer = element.closest('.logic-gate');
    const lightImg = parentContainer.querySelector(".light");
    lightImg.src = getFileNameFromURL(lightImg.src) === "denkyuu_off.png" ? "denkyuu_on.png" : "denkyuu_off.png"
}