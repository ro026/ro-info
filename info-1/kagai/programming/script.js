(function () {
    const div = document.createElement('div');
    let innerHTML = "";
    xtertaList.map((list, index) => {
        innerHTML += `<h4>第${index + 1}問 <span class="radius backgroundColorBlue"}><a class="textDecorationNone" href="${list.link}" style="font-size: 14px" target="_blank">XTertaで確認する</a></span></h4>`;
        innerHTML += `<pre style="background: white; border: 1px solid black;">${list.code}</pre>`;

        div.innerHTML = innerHTML;
    })


    document.getElementById("xtertaQuestion").appendChild(div);

})()