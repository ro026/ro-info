(function () {
    const classList = [
        {
            title: "情報とは",
            print: true,
            keyWord: ["情報", "データ", "知識", "情報の特性", "一次情報", "クロスチェック", "PDCAサイクル", "KJ法"],
        },
        {
            title: "情報社会における法",
            print: true,
            keyWord: ["Society5.0", "個人情報", "個人情報保護法", "プライバシー", "知的財産権", "産業財産権", "特許権", "実用新案権", "意匠権", "商標権", "著作権"],
        },
        {
            title: "情報セキュリティ・技術と社会の影響",
            print: true,
            keyWord: ["情報セキュリティ", "機密性", "完全性", "可用性", "マルウェア", "パスワード", "認証", "所有物認証", "生体認証", "知識認証", "二段階認証", "二要素認証"],
        },
        {
            title: "情報のデジタル表現",
            print: true,
            keyWord: ["デジタル", "電圧のON/OFF", "10進数", "2進数", "ビット", "バイト", "情報量"],
        },
        {
            title: "情報のデジタル表現(2)",
            print: true,
            keyWord: ["16進数", "情報量の単位", "メガ", "ギガ", "テラ"],
        },
        {
            title: "情報のデジタル表現(3) 2の補数・文字のデジタル表現",
            print: true,
            keyWord: ["補数", "文字コード", "JIS", "Unicode", "文字化け"],
        },
        {
            title: "情報のデジタル表現(4) 画像のデジタル表現",
            print: true,
            keyWord: ["画像", "標本化", "量子化", "符号化", "画像のデータ量", "色の表現", "カラーコード", "RGB"],
        },
        {
            title: "情報のデジタル表現(5) 音声と動画のデジタル表現",
            print: true,
            keyWord: ["サンプリング", "サンプリング周波数", "音声のデータ量", "Hz", "ステレオ", "fps", "フレーム/秒"],
        },
        {
            title: "情報のデジタル表現(6) 圧縮",
            print: true,
            keyWord: ["ランレングス法", "展開", "エントロピー符号化", "圧縮率", "mp3", "JPEG", "MPEG", "可逆圧縮", "非可逆圧縮"],
        },
        {
            title: "情報デザイン・ユニバーサルデザイン",
            print: true,
            keyWord: ["ピクトグラム", "アフォーダンス", "ユーザインタフェース", "ユーザビリティ", "アクセシビリティ", "バリアフリー"],
        },
        {
            title: "前期 期末テスト 対策①",
            print: false,
            keyWord: [],
        },
        {
            title: "前期 期末テスト 対策②",
            print: false,
            keyWord: [],
        },
        {
            title: "プログラミング(1) - 入門",
            print: false,
            keyWord: [],
        },
        {
            title: "プログラミング基礎 - 変数・演算・条件分岐",
            print: false,
            keyWord: ['変数', '代入', '演算', '演算子'],
        },
        {
            title: "プログラミング(変数・代入・演算練習問題)",
            keyWord: [],
        },
        {
            title: "プログラミング(条件分岐)",
            keyWord: ['条件分岐', '真', '偽', '論理積', 'かつ', '論理和', 'または'],
        },
        {
            title: "プログラミング(繰り返し)",
            keyWord: ['繰り返し', '順次繰り返し文', '前条件繰り返し文'],
        },
        {
            title: "プログラミング(配列・関数)",
            keyWord: ['添字', '引数', '戻り値'],
        },
        {
            title: "プログラミング(ふりかえり問題)",
            keyWord: [],
        },
        {
            title: "コンピュータの構成とソフトウェア",
            keyWord: ['ハードウェア', 'ソフトウェア', '入力装置', '出力装置', '演算装置', '制御装置', 'CPU', '主記憶装置', '補助記憶装置', 'OS', 'アプリケーションプログラム'],
        },
    ]

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th></th><th>タイトル</th><th>スライド</th><th>プリント</th>';
    thead.appendChild(headerRow);
    table.appendChild(thead)

    const tbody = document.createElement('tbody');

    classList.map((list, index) => {
        const bodyRow = document.createElement('tr');
        let innerHTML = "";

        innerHTML += `<td rowspan="2" style="text-align: center;">${index + 1}</td>`
        innerHTML += `<td>${list.title}</td>`;
        innerHTML += `<td><a href="${("00" + (index + 1)).slice(-3)}/index.html?name=${classList[index].title}">資料</a>`;
        innerHTML += `<td>${list.print === undefined ? "準備中！" :
            list.print === true
                ? `<a href="${("00" + (index + 1)).slice(-3)}/print.html">プリント</a>`
                : "なし"
            }</td>`;

        bodyRow.innerHTML = innerHTML;
        tbody.appendChild(bodyRow);

        const keyWordRow = document.createElement('tr');
        let keyWordRowHTML = "";

        keyWordRowHTML += `<td colspan="3"><details><summary>キーワード</summary><ul class="keyword">`
        // キーワードのリスト化
        list.keyWord.map((word) => keyWordRowHTML += `<li>${word}</li>`)
        keyWordRowHTML += `</ul></details></td>`;
        keyWordRow.innerHTML = keyWordRowHTML;

        tbody.appendChild(keyWordRow);
    })
    table.appendChild(tbody);
    document.getElementById("class-list").appendChild(table);

})()