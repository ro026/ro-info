const updateList = [
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
const headerRow = document.createElement('tr');
headerRow.innerHTML = '<th>日付</th><th>内容</th>';
table.appendChild(headerRow);

const tableBody = document.createElement('td');

updateList.map((list) => {
    const bodyRow = document.createElement('tr');
    let innerHTML = "";
    const date = new Date(list.date);

    innerHTML += `<td>${formatDate(date)}${(new Date() - date) / (1000 * 60 * 60 * 24) <= 7 ? "<span class='new'>new</span>" : ""}</td>`
    const kind = `<span class= "${list.kind}">${kinds[list.kind]}</span> `;
    innerHTML += `<td>${kind}${list.text}</td > `;

    bodyRow.innerHTML = innerHTML;
    table.appendChild(bodyRow);
})

document.getElementById("update-list").appendChild(table);