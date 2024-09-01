(function () {
    const classList = [
        {
            title: "情報とは",
            blank: "",
            keyWord: ["情報", "データ", "知識", "情報の特性", "一次情報", "クロスチェック", "PDCAサイクル", "KJ法"],
        },
        {
            title: "情報社会における法",
            blank: "",
            keyWord: ["Society5.0", "個人情報", "個人情報保護法", "プライバシー", "知的財産権", "産業財産権", "特許権", "実用新案権", "意匠権", "商標権", "著作権"],
        },
        {
            title: "情報セキュリティ・技術と社会の影響",
            blank: "",
            keyWord: ["情報セキュリティ", "機密性", "完全性", "可用性", "マルウェア", "パスワード", "認証", "所有物認証", "生体認証", "知識認証", "二段階認証", "二要素認証"],
        },
        {
            title: "情報のデジタル表現",
            blank: "",
            keyWord: ["デジタル", "電圧のON/OFF", "10進数", "2進数", "ビット", "バイト", "情報量"],
        },
        {
            title: "情報のデジタル表現(2)",
            blank: "",
            keyWord: ["16進数", "情報量の単位", "メガ", "ギガ", "テラ"],
        },
        {
            title: "情報のデジタル表現(3) 文字のデジタル表現",
            blank: "",
            keyWord: ["補数", "文字コード", "JIS", "Unicode", "文字化け"],
        },
        {
            title: "情報のデジタル表現(4) 画像のデジタル表現",
            blank: "",
            keyWord: ["画像", "標本化", "量子化", "符号化", "画像のデータ量", "色の表現", "カラーコード", "RGB"],
        },
        {
            title: "情報のデジタル表現(5) 音声と動画のデジタル表現",
            blank: "",
            keyWord: ["サンプリング", "サンプリング周波数", "音声のデータ量", "Hz", "ステレオ", "fps", "フレーム/秒"],
        },
        {
            title: "情報のデジタル表現(6) 圧縮",
            blank: "",
            keyWord: ["ランレングス法", "展開", "エントロピー符号化", "圧縮率", "mp3", "JPEG", "MPEG", "可逆圧縮", "非可逆圧縮"],
        },
        {
            title: "情報デザイン・ユニバーサルデザイン",
            blank: "",
            keyWord: ["ピクトグラム", "アフォーダンス", "ユーザインタフェース", "ユーザビリティ", "アクセシビリティ", "バリアフリー"],
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
        innerHTML += `<td><a href="00${index + 1}/index.html?name=${classList[index].title}">資料</a>`;
        innerHTML += `<td>${list.blank === "" ? "準備中！" : ""}</td>`;

        bodyRow.innerHTML = innerHTML;
        table.appendChild(bodyRow);

        const keyWordRow = document.createElement('tr');
        let keyWordRowHTML = "";

        keyWordRowHTML += `<td colspan="3"><details><summary>キーワード</summary><ul class="keyword">`
        // キーワードのリスト化
        list.keyWord.map((word) => keyWordRowHTML += `<li>${word}</li>`)
        keyWordRowHTML += `</ul></details></td>`;
        keyWordRow.innerHTML = keyWordRowHTML;

        table.appendChild(keyWordRow);
    })

    document.getElementById("class-list").appendChild(table);

})()