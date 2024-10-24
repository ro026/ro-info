(function () {
    const div = document.createElement('div');
    let innerHTML = "";
    xtertaList.map((list, index) => {
        innerHTML += `<h4><span class="radius backgroundColorBlue"}><a class="textDecorationNone" href="${list.link}" style="font-size: 14px" target="_blank">↓のプログラムをXTertaで確認する</a></span></h4>`;
        innerHTML += `<pre style="background: white; border: 1px solid black; padding: 3px 6px">${list.code}</pre>`;
        if (list.option) {
            innerHTML += `<pre>${list.option}</pre>`
        }

        div.innerHTML = innerHTML;
    })


    document.getElementById("xtertaQuestion").appendChild(div);

})()