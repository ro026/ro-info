// URLのパラメータを取得
const urlParams = new URLSearchParams(window.location.search);
const num = urlParams.get('num'); // 問題番号
const level = urlParams.get('level'); // 難易度

////////////////////
// リストを作成する //
///////////////////

function renderquestionList() {

    // 各カテゴリをループ処理
    Object.keys(questions).forEach(level => {
        const questionList = document.querySelector(`#list-${level} ul`); // 対応するulを取得
        let questionListHtml = '';

        // それぞれの問題をリスト化
        questions[level].forEach((question, index) => {
            questionListHtml += createquestionListHtml(level, index + 1, question.title);
        });

        // innerHTMLに設定
        questionList.innerHTML = questionListHtml;
    });
}


function createquestionListHtml(level, index, title) {
    return `
        <li>
            <span class="question-number">${index}</span>
            <span class="question-title">${title}</span>
            <a class="question-link-button" href="./question.html?num=${index}&level=${level}">問題を解く</a>
        </li>
    `
}


///////////////////////
// 問題ページを生成する //
///////////////////////

function renderquestionPage() {

    // 初級、中級、上級の名前をマッピング
    const levelNames = {
        basic: "基本",
    };

    // 取得したパラメータに基づいて表示内容を更新
    const question = getquestion(num, level); // 問題データを取得

    // タイトルと内容を更新
    const title = `実プロ問題集 | 情報I対応のプログラミング課題 | 第${num}問(${levelNames[level]})`
    document.getElementById('question-number').textContent = num;
    document.getElementById('difficulty-level').textContent = levelNames[level];
    document.getElementById('question-title').textContent = title;
    document.getElementById('question-content').innerHTML = formatLineBreak(question.question);
    document.getElementById('output-content').innerHTML = formatLineBreak(question.output);
    document.getElementById('func-content').innerHTML =
        question.func ? formatLineBreak(question.func) : "なし";
    document.getElementById('code-content').innerHTML = formatCodeWithInput(question.code);
    addLineNumber(question.code);
    document.getElementById('hint-content').innerHTML =
        question.hint ? formatLineBreak(question.hint) : "なし";
    document.title = `${title}`;

    document.getElementById("prev-question").href = `./question.html?num=${Number(num) - 1}&level=${level}`;
    document.getElementById("next-question").href = `./question.html?num=${Number(num) + 1}&level=${level}`;

    addEventListenersToInputs()
};

// 問題データを取得する関数（ダミーデータを返す）
function getquestion(num, level) {
    // 問題リストから対応する問題を取得
    const levelquestions = questions[level];
    return levelquestions[num - 1]; // numは1始まりなのでインデックスに合わせる
}

// コード内の '***' を入力フォームに変換する関数
let inputIdCounter = 0;
function formatCodeWithInput(code) {
    const katakana = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ'];
    // '***' を <input type="text"> に変換
    let formattedCode = code.replace(/\*{3,12}/g, function (match) {
        let width = 0;
        switch (match.length) {
            case 3:
                width = 60;
                break;
            case 6:
                width = 180;
                break;
            case 9:
                width = 270;
                break;
            case 12:
                width = 360;
                break;
        }

        const inputClass = `input-${width}`;
        return `<input type="text" id="input-${inputIdCounter}" class="${inputClass}" placeholder="(${katakana[inputIdCounter++]})" />`;
    });

    // 改行 (\n) を <br> に変換
    formattedCode = formatLineBreak(formattedCode);

    return formattedCode;
}

function formatLineBreak(code) {
    return code.replace(/\n/g, '<br>')
}

function addLineNumber(code) {
    const lineNumbers = document.getElementById("line-numbers");

    // コードの行数を取得
    const codeLines = code.split("\n").length;

    // 行番号を生成
    let lineNumberHTML = "";
    for (let i = 1; i <= codeLines; i++) {
        lineNumberHTML += i + "<br/>";
    }

    // 行番号を挿入
    lineNumbers.innerHTML = lineNumberHTML;
}

//////////
// 描画 //
/////////
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('index.html')) {
        // index.htmlの場合
        renderquestionList();
    } else if (window.location.pathname.includes('question.html')) {
        // question.htmlの場合
        renderquestionPage();
    }

});