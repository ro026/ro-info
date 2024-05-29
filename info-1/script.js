(function () {
    const classList = [
        {
            title: "情報とは",
            slide: "",
            blank: "",
            keyWord: ["情報", "データ", "知識", "情報の特性", "一次情報", "クロスチェック", "PDCAサイクル", "KJ法"],
        },
        {
            title: "情報社会における法",
            slide: "",
            blank: "",
            keyWord: ["Society5.0", "個人情報", "個人情報保護法", "プライバシー", "知的財産権", "産業財産権", "特許権", "実用新案権", "意匠権", "商標権", "著作権"],
        },
        {
            title: "情報セキュリティ・技術と社会の影響",
            slide: "",
            blank: "",
            keyWord: ["情報セキュリティ", "機密性", "完全性", "可用性", "マルウェア", "パスワード", "認証", "所有物認証", "生体認証", "知識認証", "二段階認証", "二要素認証"],
        },
        {
            title: "情報のデジタル表現",
            slide: "",
            blank: "",
            keyWord: ["デジタル", "電圧のON/OFF", "10進数", "2進数", "ビット", "バイト", "情報量"],
        },
        {
            title: "情報のデジタル表現(2)",
            slide: "",
            blank: "",
            keyWord: ["16進数", "情報量の単位", "メガ", "ギガ", "テラ"],
        },
    ]

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th></th><th>タイトル</th><th>スライド</th><th>穴埋め</th>';
    table.appendChild(headerRow);

    const tableBody = document.createElement('td');

    classList.map((list, index) => {
        const bodyRow = document.createElement('tr');
        let innerHTML = "";

        innerHTML += `<td rowspan="2" style="text-align: center;">${index + 1}</td>`
        innerHTML += `<td>${list.title}</td>`;
        innerHTML += `<td>${list.slide === "" ? `<a href="classes/00${index + 1}/index.html?name=${classList[index].title}">資料</a>` : ""}</td>`;
        innerHTML += `<td>${list.blank === "" ? "準備中！" : ""}</td>`;

        bodyRow.innerHTML = innerHTML;
        table.appendChild(bodyRow);

        const keyWordRow = document.createElement('tr');
        let keyWordRowHTML = "";

        keyWordRowHTML += `<td colspan="3"><ul class="keyword">`
        // キーワードのリスト化
        list.keyWord.map((word) => keyWordRowHTML += `<li>${word}</li>`)
        keyWordRowHTML += `</ul></td>`;
        keyWordRow.innerHTML = keyWordRowHTML;

        table.appendChild(keyWordRow);
    })

    document.getElementById("class-list").appendChild(table);

})()