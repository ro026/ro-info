(function () {
    const updateList = [
        {
            date: "2026/02/23",
            kind: "update",
            text: "「情報I 共通テスト100点への道」を「情報I 共通テスト対策ページ」に変更しました。"
        },
        {
            date: "2026/02/12",
            kind: "add",
            text: "[情報I]定期テストの答え・解説を追加しました。"
        },
        {
            date: "2026/02/01",
            kind: "update",
            text: "[情報I]定期テスト対策の項目について、スライドを追加しました。"
        },
        {
            date: "2026/01/29",
            kind: "update",
            text: "[情報I]定期テスト対策の項目を追加しました。"
        },
        {
            date: "2026/01/29",
            kind: "add",
            text: "[情報I]第18〜第20回授業資料・プリントを追加しました。"
        },
        {
            date: "2026/01/26",
            kind: "add",
            text: "[情報I]定期テスト対策ページを追加しました。"
        },
        {
            date: "2025/12/16",
            kind: "add",
            text: "[情報I]第16回・第17回授業資料を追加しました。"
        },
        {
            date: "2025/10/27",
            kind: "add",
            text: "[情報I]第14回・第15回授業資料を追加しました。"
        },
        {
            date: "2025/10/14",
            kind: "add",
            text: "[情報I]第13回授業資料を追加しました。"
        },
        {
            date: "2025/10/7",
            kind: "add",
            text: "[情報I]第12回授業資料を追加しました。"
        },
        {
            date: "2025/9/30",
            kind: "add",
            text: "[情報I]第11回授業資料を追加しました。"
        },
        {
            date: "2025/8/26",
            kind: "add",
            text: "[情報I]第9回・第10回授業資料を追加しました。"
        },
        {
            date: "2025/7/19",
            kind: "add",
            text: "[情報I]第8回授業資料を追加しました。"
        },
        {
            date: "2025/7/8",
            kind: "add",
            text: "[情報I]第6回・第7回授業資料を追加しました。"
        },
        {
            date: "2025/6/22",
            kind: "add",
            text: "「情報I 共通テスト100点への道 問題集」を追加しました。"
        },
        {
            date: "2025/6/3",
            kind: "add",
            text: "[情報I] 第1〜第5回の令和7年度版のページを追加しました"
        },
        {
            date: "2025/4/21",
            kind: "add",
            text: "[情報I] 令和7年度版のページを追加しました"
        },
        {
            date: "2025/4/21",
            kind: "add",
            text: "自己紹介を追加しました"
        },
        {
            date: "2025/1/28",
            kind: "add",
            text: "[情報I] プリントを追加しました"
        },
        {
            date: "2025/1/28",
            kind: "add",
            text: "[情報I] 第22回・第23回の授業資料を追加しました"
        },
        {
            date: "2025/1/20",
            kind: "add",
            text: "[情報I] 第20回・第21回の授業資料を追加しました"
        },
        {
            date: "2025/1/1",
            kind: "update",
            text: "[情報I] 冬休み課題のやり方を追加しました"
        },
        {
            date: "2024/12/25",
            kind: "add",
            text: "[情報I] 冬休みの課題の情報を追加しました"
        },
        {
            date: "2024/12/8",
            kind: "update",
            text: "[情報I] 共通テストのプログラミング問題を追加しました"
        },
        {
            date: "2024/12/6",
            kind: "add",
            text: "[情報I] 共通テストのプログラミング対策用ページを追加しました"
        },
        {
            date: "2024/12/1",
            kind: "update",
            text: "[情報I] プログラミングのスライド資料を追加しました"
        },
        {
            date: "2024/12/1",
            kind: "add",
            text: "[情報I] 第19回の資料を追加しました"
        },
        {
            date: "2024/11/25",
            kind: "add",
            text: "[情報I] 第18回の資料を追加しました"
        },
        {
            date: "2024/11/15",
            kind: "add",
            text: "[情報I] 第17回の資料を追加しました"
        },
        {
            date: "2024/10/24",
            kind: "add",
            text: "[情報I] 第16回の資料を追加しました"
        },
        {
            date: "2024/10/21",
            kind: "update",
            text: "[情報I] 第14~15回の資料を更新しました"
        },
        {
            date: "2024/10/18",
            kind: "add",
            text: "[情報I] 第15回の資料を公開しました"
        },
        {
            date: "2024/10/11",
            kind: "add",
            text: "[情報I] 第13回・第14回の資料を公開しました"
        },
        {
            date: "2024/9/6",
            kind: "add",
            text: "[情報I] 第1回〜第10回のプリントを公開しました"
        },
        {
            date: "2024/9/2",
            kind: "add",
            text: "[情報I] 第12回資料を公開しました"
        },
        {
            date: "2024/9/1",
            kind: "update",
            text: "釜高祭Webページプロジェクトの結果報告をしました"
        },
        {
            date: "2024/9/1",
            kind: "add",
            text: "[情報I] 第10回資料を公開しました"
        },
        {
            date: "2024/7/25",
            kind: "add",
            text: "[情報I] 課外用資料(論理回路)を公開しました"
        },
        {
            date: "2024/7/8",
            kind: "add",
            text: "[情報I] 第９回資料を公開しました"
        },
        {
            date: "2024/6/26",
            kind: "add",
            text: "[情報I] 課外用資料(プログラミング)を追加しました"
        },
        {
            date: "2024/6/26",
            kind: "add",
            text: "[情報I] 第８回資料を公開しました"
        },
        {
            date: "2024/6/19",
            kind: "add",
            text: "[情報I] 第７回資料を公開しました"
        },
        {
            date: "2024/6/5",
            kind: "add",
            text: "[情報I] 第６回資料を公開しました"
        },
        {
            date: "2024/5/30",
            kind: "add",
            text: "[情報I] 第５回資料を公開しました"
        },
        {
            date: "2024/5/23",
            kind: "add",
            text: "[情報I] 第２回・第３回資料を公開しました"
        },
        {
            date: "2024/5/22",
            kind: "add",
            text: "[情報I] 第１回・第４回資料を公開しました"
        },
        {
            date: "2024/5/14",
            kind: "add",
            text: "情報Iを公開しました"
        },
        {
            date: "2024/5/14",
            kind: "add",
            text: "ページを公開しました"
        }
    ]

    const kinds = {
        add: "追加",
        update: "更新",
        delete: "削除",
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>日付</th><th>内容</th>';
    thead.appendChild(headerRow);
    table.appendChild(thead)

    const tbody = document.createElement('tbody');
    updateList.map((list) => {
        const bodyRow = document.createElement('tr');
        let innerHTML = "";
        const date = new Date(list.date);

        innerHTML += `<td>${formatDate(date)}${(new Date() - date) / (1000 * 60 * 60 * 24) <= 7 ? "<span class='new'>new</span>" : ""}</td>`
        const kind = `<span class= "${list.kind}">${kinds[list.kind]}</span> `;
        innerHTML += `<td>${kind}${list.text}</td > `;

        bodyRow.innerHTML = innerHTML;
        tbody.appendChild(bodyRow);
    })

    table.appendChild(tbody);

    document.getElementById("update-list").appendChild(table);

})()