const headerHtml = `
<header>
<div class="headerTitle">
    <div class="title">
        <h1><a href="index.html">おかだのページ</a></h1>
    </div>
    <div class="link">
        <a href="https://www.facebook.com/profile.php?id=100015394358438" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-facebook" style="font-size: 24px; color: #0B0A08"></i>
        </a>
    </div>
</div>
</header>
<nav>
<ul>
    <li><a href="khs-web-pj.html">釜高祭WebページPJ</a></li>
    <li><a href="info-1.html">情報I</a></li>
    <li><a href="self-introduction.html">自己紹介</a></li>
    <li><a href="link.html">おすすめリンク集</a></li>
</ul>
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