// 現在アクセスしているメニューの背景を変える
(function () {
    const url = window.location.href;
    const paths = url.split('/');
    const topPageNum = paths.indexOf('ro-info');
    const nowPath = paths[topPageNum + 1];
    const nowFileName = paths.at(-1);
    const topAbsPath = "../".repeat(paths.length - paths.indexOf('ro-info') - 2 /** 配列番号が0で始まる + 最後のパスはファイル名であるはず */)
    const isTop = topAbsPath === "";

    const menus = [
        { path: "khs-web-pj", name: "釜高祭WebページPJ" },
        { path: "info-1", name: "情報I" },
        { path: "self-introduction", name: "自己紹介" },
        { path: "link", name: "おすすめリンク集" },
    ]

    let menusHTML = ""
    menus.forEach((menu) => {
        menusHTML += `<li id="${menu.path}" class="${nowPath === menu.path ? "now-page" : ""}"><a href="${topAbsPath}${menu.path}/index.html">${menu.name}</a></li>`;
    })

    const headerHtml = `
<header>
    <div class="headerContents">
        <div class="headerTitle">
            <div class="title">
                <h1><a href="${topAbsPath}index.html">おかだのページ</a></h1>
            </div>
        </div>
        <nav>
            <ul>${menusHTML}</ul>
        </nav>
    </div>
    <div class="breadcrumb"></div>
</header>
`

    const headerElement = document.getElementById("header")
    headerElement.innerHTML = headerHtml;

    const breadcrumbElement = headerElement.querySelector(".breadcrumb")
    if (!isTop) {
        const innerHTML = nowFileName.startsWith('index.html') || nowFileName === 'print.html' ? `<a href="../index.html">１つ前へ戻る</a>` : `<a href="./index.html">１つ前へ戻る</a>`
        breadcrumbElement.innerHTML = innerHTML
    }
})()

// グローバル変数
/**
 * 日付のフォーマットを行います。
 * @param {*} date 
 * @returns 
 */
function formatDate(date) {
    const formattedDate = date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return formattedDate;
}

// 最後のファイル名だけを取得
function getFileNameFromURL(url) {
    // URLをスラッシュで分割し、最後の部分を取得
    const parts = url.split('/');
    return parts.pop(); // 最後の要素を返す
}