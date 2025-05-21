const classList = [
    {
        title: "情報とは",
        print: true,
        keyWord: ["情報", "データ", "知識", "情報の特性", "一次情報", "二次情報", "クロスチェック"],
    }
]

function addList() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th></th><th>タイトル</th>';
    thead.appendChild(headerRow);
    table.appendChild(thead)

    const tbody = document.createElement('tbody');

    classList.map((list, index) => {
        const bodyRow = document.createElement('tr');
        let innerHTML = "";

        innerHTML += `<td rowspan="2" style="text-align: center;">${index + 1}</td>`
        innerHTML += `<td><a href="${("00" + (index + 1)).slice(-3)}/index.html">${list.title}</a></td>`;

        bodyRow.innerHTML = innerHTML;
        tbody.appendChild(bodyRow);

        const keyWordRow = document.createElement('tr');
        let keyWordRowHTML = "";

        keyWordRowHTML += `<td><details><summary>キーワード</summary><ul class="keyword">`
        // キーワードのリスト化
        list.keyWord.map((word) => keyWordRowHTML += `<li>${word}</li>`)
        keyWordRowHTML += `</ul></details></td>`;
        keyWordRow.innerHTML = keyWordRowHTML;

        tbody.appendChild(keyWordRow);
    })
    table.appendChild(tbody);
    document.getElementById("class-list").appendChild(table);
}

function addTitle() {
    const url = window.location;
    const paths = url.href.split('/');

    const indexNum = Number(paths.at(-2));

    const title = `第${indexNum}回 『${classList[indexNum - 1].title}』`

    // 動的にタイトル変更。SEO対策は何も考えていない
    document.title = `情報I ${title}| おかだのページ`;
    // h2タグのタイトルを変更する
    const classNameElement = document.getElementById("class-name");
    classNameElement.innerText = title;
}

function addMaterial(materialList) {
    const container = document.getElementById("class-area");

    materialList.forEach((material, index) => {
        // h3 見出し
        const h3 = document.createElement("h3");
        h3.textContent = material.wordList.join("・");
        container.appendChild(h3);

        // words-list div
        const wordDiv = document.createElement("div");
        wordDiv.className = "words-list";
        if (material.wordList.length != 0) {
            wordDiv.innerHTML = "スライド▶︎";
        }

        material.wordList.forEach((word, i) => {
            const a = document.createElement("a");
            a.className = "word";
            if (material.url[i]) {
                a.href = `https://joho-kyoshitsu.com/lexicon/word/${material.url[i]}/index.html?state=noheader`;
                a.target = "_blank";
            } else {
                a.classList.add("no-link");
            }
            a.textContent = word;
            wordDiv.appendChild(a);
        });

        container.appendChild(wordDiv);

        // 画像
        const img = document.createElement("img");
        img.src = `print/${index + 1}.jpg`;
        container.appendChild(img);
    });

}