(function () {
    const updateList = [
        {
            date: "2024/6/26",
            kind: "add",
            text: "[情報I] 課外用資料を追加しました"
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
        update: "修正",
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