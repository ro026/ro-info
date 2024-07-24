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

/**
 * スイッチの画像が変わった時の処理
 */
function toggleImage(element) {
    const img = element.querySelector('img');
    img.classList.toggle('flipped');
    const inputVal = element.querySelector('.input-val');
    inputVal.textContent = inputVal.textContent === '1' ? 0 : 1;


    // 親要素を取得
    let parentContainer = element.closest('.logic-gate');
    if (parentContainer !== null) {
        // 入力値が1つ
        toggleLight(parentContainer);
    } else {
        // 入力値が2つ
        parentContainer = element.closest('.logic-gate-2');
        const inputsSelector = parentContainer.querySelectorAll(".input-val");
        const inputs = [];
        inputsSelector.forEach((input) => {
            inputs.push(input.textContent);
        })
        const selectSelector = parentContainer.querySelector("#gate-selector");
        const logic = selectSelector.value

        const lightVal = parentContainer.querySelector('.light-val');
        const oldValue = lightVal.textContent.substring(0, 1);

        changeLight(inputs[0], inputs[1], logic, oldValue, parentContainer);
    }
}

/**
 * 論理回路を変えた時に、論理回路の画像を変える
 */
function changeLogic(element) {
    const logic = element.value;
    const parentContainer = element.closest('.logic-gate-2');
    const logicImg = parentContainer.querySelector(".div12 img");
    logicImg.src = `${logic}.png`;

    const inputsSelector = parentContainer.querySelectorAll(".input-val");
    const inputs = [];
    inputsSelector.forEach((input) => {
        inputs.push(input.textContent);
    })
    const lightVal = parentContainer.querySelector('.light-val');
    const oldValue = lightVal.textContent.substring(0, 1);
    changeLight(inputs[0], inputs[1], logic, oldValue, parentContainer);
}

/**
 * ライトの点灯を反転させる
 */
function toggleLight(parentContainer) {
    const lightImg = parentContainer.querySelector(".light");
    lightImg.src = getFileNameFromURL(lightImg.src) === "denkyuu_off.png" ? "denkyuu_on.png" : "denkyuu_off.png";
    const lightVal = parentContainer.querySelector('.light-val');
    lightVal.textContent = lightVal.textContent === '1(点灯)' ? '0(消灯)' : '1(点灯)';
}

/**
 * input1, input2 は入力値
 * logicは論理回路
 * oldValueは、値が変わっていたらトグルする
 */
function changeLight(input1, input2, logic, oldValue, parentContainer) {
    let result = "";
    if (logic === "and") {
        result = input1 === "1" && input2 === "1" ? "1" : "0";
    } else if (logic === "or") {
        result = input1 === "0" && input2 === "0" ? "0" : "1";
    }

    if (result !== oldValue) {
        toggleLight(parentContainer);
    }


    console.log(`${input1}と${input2}の${logic}をとります。結果は${result}です。前の値は${oldValue}です`)
}