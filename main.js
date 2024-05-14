// 現在アクセスしているメニューの背景を変える
const url = window.location.href;
const paths = url.split('/');
const topPageNum = paths.indexOf('ro-info');
const nowPath = paths[topPageNum + 1];
const topAbsPath = "../".repeat(paths.length - paths.indexOf('ro-info') - 2 /** 配列番号が0で始まる + 最後のパスはファイル名であるはず */)

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
<div class="headerTitle">
    <div class="title">
        <h1><a href="${topAbsPath}index.html">おかだのページ</a></h1>
    </div>
    <div class="link">
        <a href="https://www.facebook.com/profile.php?id=100015394358438" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-facebook" style="font-size: 24px; color: #0B0A08"></i>
        </a>
    </div>
</div>
</header>
<nav>
<ul>${menusHTML}</ul>
</nav>
`

document.getElementById("header").innerHTML = headerHtml;

/**
 * 日付のフォーマットを行います。
 * @param {*} date 
 * @returns 
 */
function formatDate(date) {
    const formattedDate = date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return formattedDate;

}