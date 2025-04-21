const classList = [
    {
        title: "情報とは",
        print: true,
        keyWord: ["情報", "データ", "知識", "情報の特性", "一次情報", "クロスチェック", "PDCAサイクル", "KJ法"],
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