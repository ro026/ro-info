const questions = {
    beginner: [
        { title: `センチメートルをメートルに変換`, question: `変数 centimetre に、センチ単位の長さが入っています。それをメートルに変換して表示してください。`, output: `124 cmは、 1.24 mです。`, func: ``, code: `centimetre ← 124\nmetre ← ******\ncentimetre と "cmは、" と metre と "mです。" を表示する`, hint: `a / b を用いると、aをbで割った数が計算できます。` },
        { title: `合格？不合格？`, question: `変数 score にテストの点数が入っている。このテストの点数が80点以上なら合格、それ以外なら不合格を表示してください。`, output: `79点なので不合格です。`, func: ``, code: `score ← 79\nもし ****** ならば\n    score と "点なので合格です。" を表示する\nを実行し,そうでなければ\n    score と "点なので不合格です。" を表示する\nを実行する`, hint: `a > b → a は b より大きい\na >= b → a は b 以上\na < b → a は b より小さい\na <= b → a は b 以下\na = b → a と b は等しい\na != b → a と b は等しくない` },
        { title: `「Hello, World!」を5回表示しよう`, question: `「Hello, World!」を5回表示してください。`, output: `Hello, World!\nHello, World!\nHello, World!\nHello, World!\nHello, World!`, func: ``, code: `i を 0 から *** まで 1 ずつ増やしながら,\n    "Hello, World!" を表示する\nを繰り返す`, hint: `i の値は繰り返しを行うたびに 1→2→3→... と1ずつ増えていく。1回目の値は i←0、2回目の値は i←1、...となるので、5回目の時は i の値がどうなっているかを考えよう。` },
        { title: `配列の要素を取得しよう`, question: `変数 Namae に入っている7つの都道府県の名前から「岩手県」を表示してください。`, output: `岩手県`, func: ``, code: `Namae ← {"北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県"}\nNamae[***] を表示する`, hint: `配列は0から始まる添字を使って、特定の要素を取得します。つまり、Namae[0]は「北海道」を取得します。` },
        { title: `関数を使って足し算をしよう`, question: `「4+3の結果は7です。」と表示できるように、空欄を埋めましょう。ただし、関数「足し算」を使うこと。`, output: `4+3の結果は 7 です。`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。\n\nadd(数値1, 数値2) … \n引数に 数値 を2つとる。その2つの数値を足した値を戻り値とする関数。`, code: `関数 add(a, b) は\n    a + b を返す\nを実行する\n\nkekka ← ******\n"4+3の結果は" と kekka と "です。" を表示する`, hint: `関数「足し算」は2つの引数を足す関数である。例えば、空欄に「足し算(1,2)」と入力すると、1+2 の値を戻り値とする。` },
    ],
    intermediate: [
        { title: `偶数？奇数？`, question: `変数 kazu1 に入っている値が偶数か奇数かを判定してください。`, output: `kazu1は偶数です。`, func: ``, code: `kazu1 ← 16\n\nもし ****** = 0 ならば\n    "kazu1は偶数です" を表示する\nを実行し,そうでなければ\n    "kazu1は奇数です" を表示する\nを実行する`, hint: `偶数は、2で割ったあまりが0になると言い換えることができます。\n演算子 「%」を使うとあまりを出すことができます。例えば、「a % b」は「a を b で割ったあまり」が出てきます。` },
        { title: `1から順番に加算する`, question: `1 + 2 + 3 + 4 + 5 の計算結果を、繰り返し（ループ）を使って計算してください。`, output: `15`, func: ``, code: `sum ← 0\ni を 1 から 5 まで 1 ずつ増やしながら,\n    sum ← ******\nを繰り返す\n    \nsum を表示する`, hint: `i は1から5までの値を順に取ります。繰り返しの中で sum に 現在の値 i を足すことで、合計を求めることができます。` },
        { title: `配列の要素を全て表示しよう`, question: `変数 Namae に入っている7つの都道府県の名前を1行ずつすべて表示してください。ただし、関数「要素数」を必ず使うこと。`, output: `北海道\n青森県\n岩手県\n秋田県\n宮城県\n山形県\n福島県`, func: `要素数(配列名)...\n引数に 配列 をとる。その配列の中にある要素数を戻り値とする関数。`, code: `Namae ← {"北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県"}\ni を 0 から ****** まで 1 ずつ増やしながら,\n    Namae[***] を表示する\nを繰り返す`, hint: `要素数(Hairetsu) はこの場合7が戻り値です。では、最後の添字は6ですが、要素数(Hairetsu) が7なので、1引くと...?` },
        { title: `配列の中の合計を求めよう`, question: `変数 Kazu の中に入っている数値をすべて合計した値を表示してください。ただし、関数「要素数」を使うこと。`, output: `38`, func: `要素数(配列名)...\n引数に 配列 をとる。その配列の中にある要素数を戻り値とする関数。`, code: `Kazu ← {2, 2, 9, 8, 4, 7, 6}\nsum ← 0\ni を 0 から ****** まで 1 ずつ増やしながら,\n    sum ← ******\nを繰り返す\n    \nsum を表示する`, hint: `合計される値は、変数 sum に入ります。繰り返しで、配列 Kazu の要素を取り出して合計に加えます。` },
        { title: `文字列を繰り返して出力する関数`, question: `文字列と繰り返し回数を引数として受け取り、その文字列を指定された回数だけ繰り返した結果を返す関数 repeat(文字, 回数) を作成してください。`, output: `りんご\nりんご\nりんご\nりんご`, func: `repeat(文字, 回数) ...\n文字列と繰り返し回数を引数として受け取り、その文字列を指定された回数だけ繰り返した結果を返す。`, code: `関数 repeat(moji, kaisu)は\n    i を 0 から ****** まで 1 ずつ増やしながら,\n        *** を表示する\n    を繰り返す\nを実行する\n    \nfood ← "りんご"\nkai ← 4\nrepeat(***, ***)`, hint: `①繰り返し回数は引数 kaisu で指定されています。1回目のループ i←0、2回目のループ i←1、ということを考えてみてください。\n②表示したい文字列は引数 moji で指定されています。\n③関数を呼び出している側について、表示したい文字列は food 、繰り返したい回数は kai に代入されています。` },
    ],
    advanced: [
        { title: `配列の最大の値は？`, question: `次の会話文を読んで、以下のプログラムの空欄を埋めなさい。\n\nAさん: 例えば、買い物リストに「45, 69, 48, 9, 32, 89, 4」という数字が並んでいるとしましょう。この中で一番大きい数字を知りたいときは、どうしたらいいでしょうか？\nBさん: うーん、一つ一つ数字を見ていって、一番大きいのを探せばいいんですね。\nAさん: そうです。そのように、リストの中から一番大きい値を見つける方法を「最大値を求める」といいます。そして、これはプログラムの中でよく使うアルゴリズムの一つです。\nBさん: どのようにプログラムで書けばいいのですか？\nAさん: まず、最初にリストの最初の数字を一番大きい数字だと思っておきます。次にリストの残りの数字を順番に見て、もしそれが今までの最大値よりも大きければ、その数字を新しい最大値として記録します。これをリストの最後まで繰り返します。これが「最大値を求めるアルゴリズム」です。`, output: `変数Hairetsuの要素の中で最大値は 89 です。`, func: `要素数(配列名)...\n引数に 配列 をとる。その配列の中にある要素数を戻り値とする関数。`, code: `Hairetsu ← {45, 69, 48, 9, 32, 89, 4}\nmax ← -999\ni を 0 から 要素数(Hairetsu) - 1 まで 1 ずつ増やしながら,\n    もし ****** ならば\n        max ← Hairetsu[i]\n    を実行する\nを繰り返す\n    \n"変数Hairetsuの要素の中で最大値は" と max と "です。" を表示する`, hint: `max に配列の要素の中で最大値を順番に更新していく処理をします。\n比較するための条件は「現在の要素 Hairetsu[i] が、これまでに見つかった最大値 max より大きい場合」です。` },
        { title: `支払う金額の最小硬貨・紙幣枚数を計算しよう`, question: `次の会話文を読んで、以下のプログラムの空欄を埋めなさい。\n\nAさん: 今日、お店で587円のお菓子を買ったんだけど、支払いの時に「500円玉と他の小さい硬貨だけで払ってください」って言われたんだ。\nBさん: それは面白いね！最小枚数の硬貨で支払うにはどうしたらいいんだろう？\nAさん: うーん、手作業で考えるのはちょっと面倒だよね。プログラムで計算できたら便利そうじゃない？\nBさん: たしかに！紙幣や硬貨の枚数を最小化するアルゴリズムを作れるか試してみようよ。`, output: `587円を、できるだけ少ない枚数の紙幣や硬貨で支払う\n10000円札: 0枚\n5000円札: 0枚\n1000円札: 0枚\n500円玉: 1枚\n100円玉: 0枚\n50円玉: 1枚\n10円玉: 3枚\n5円玉: 1枚\n1円玉: 2枚`, func: `要素数(配列名)...\n引数に 配列 をとる。その配列の中にある要素数を戻り値とする関数。\n\ncalculate_change(amount)...\n引数に 金額 (整数) をとる。その金額を日本円の紙幣や硬貨（10000円札、5000円札、1000円札...1円玉）に分解し、各通貨の必要な枚数を配列として戻り値とする関数。\n例: calculate_change(4934) は {0,0,4,1,4,0,3,0,4} を返す。\n\nprint_change(change)...\n引数に 金額 (整数) をとる。その金額を calculate_change 関数で分解し、各通貨の枚数を「通貨名: 枚数」の形式で出力する関数。\n例: print_change(587) は、出力のような文字列を表示する`, code: `関数 calculate_change(amount)は\n    remaining_amount ← amount\n    Kingaku ← {10000,5000,1000,500,100,50,10,5,1}\n    Maisu ← {0,0,0,0,0,0,0,0,0}\n    i を 0 から 要素数(Kingaku) - 1 まで 1 ずつ増やしながら,\n        Maisu[i] ← ****** ÷ ****\n        remaining_amount ← ****** - **** × ****\n    を繰り返す\n    Maisu を返す\nを実行する\n\n関数 print_change(change)は\n    Maisu ← calculate_change(change)\n    Money_names ← {"10000円札","5000円札","1000円札","500円玉","100円玉","50円玉","10円玉","5円玉","1円玉"}\n    change と "円を、できるだけ少ない枚数の紙幣や硬貨で支払う" を表示する\n    i を 0 から 要素数(Maisu) - 1 まで 1 ずつ増やしながら,\n        Money_names[i] と ": " と Maisu[i] と "枚" を表示する\n    を繰り返す\nを実行する\n\nprint_change(587)`, hint: `関数 print_change(587) を実行すると、以下のように動作します。\n\n1. 587 を calculate_change 関数で分解します:\n\n10000円札(=Kingaku[0]): 0枚\n5000円札: 0枚\n1000円札: 0枚\n500円玉: 1枚(=Maisu[3])（残り(=remaining_amount) 87円）\n100円玉: 0枚\n50円玉: 1枚（残り37円）\n10円玉: 3枚（残り7円）\n5円玉: 1枚（残り2円）\n1円玉: 2枚\n結果として、Maisu = {0, 0, 0, 1, 0, 1, 3, 1, 2} が返されます。\n\n2. print_change 関数で分解結果を出力します:` },
        { title: `バブルソート`, question: `次の会話文を読んで、以下のプログラムの空欄を埋めなさい。\n\nAさん: 数字を並べ替えるプログラムを作ってみたんだけど、単純な方法ってどんなのがあるかな？\nBさん: 「バブルソート」って聞いたことある？すごく基本的なアルゴリズムだよ。\nAさん: 聞いたことないな。どういう仕組みなの？\nBさん: 簡単に言うと、隣り合う数字を比べて、大きい方を後ろに送っていく感じ。これを繰り返して、最後には数字が全部整列するんだよ。\nAさん: なるほど！それなら仕組みがわかりやすそうだね。実際にプログラムで書いてみたいな。\nBさん: じゃあ、配列をバブルソートで並べ替えるプログラムを作ってみよう！今回は昇順(小さい順)に並べてみよう。\n\nアルゴリズムの手順\n1.隣り合う要素を比較\n    配列の先頭から末尾まで順に、隣り合う2つの要素を比較します。\n    昇順にソートする場合、小さい値が左、大きい値が右に来るように交換します。\n2. 一回の繰り返しで最大値が決定\n    1回のループで配列の末尾には最大値が配置されます。この部分は以後ソート済みとして扱い、要素の比較はしません。\n3. 繰り返し処理\n    残りの要素について同様の処理を繰り返します。\n    要素数が1つになるまでループします。`, output: `{5,3,8,6,2}をソートした結果\n↓\n{2,3,5,6,8}`, func: `要素数(配列名)...\n引数に 配列 をとる。その配列の中にある要素数を戻り値とする関数。\n\nsort(Suuti)...\n引数に 並び替える前の数値が入った配列 (Suuti) をとる。その配列を昇順に並び替えた配列を戻り値とする関数。\n例: sort({5,3,8,6,2}) は {2,3,5,6,8} を返す。\n\nexchange(Hairetsu, soeji1, soeji2)...\n引数 Hairetsu には配列を、 soeji1とsoeji2 には添え字をとる。Hairetsuの soeji1 と soeji2 の添え字の要素を入れ替える。\n例: exchange({5,3,8,6,2}, 2, 3) は {5,3,6,8,2} を返す。（添え字2と添え字3を入れ替える)`, code: `関数 exchange(Hairetsu,soeji1,soeji2)は\n    tmp ← Hairetsu[soeji1]\n    Hairetsu[soeji1] ← Hairetsu[soeji2]\n    Hairetsu[soeji2] ← tmp\n    Hairetsu を返す\nを実行する\n\n関数 sort(Suuti)は\n    i を 0 から 要素数(Suuti) - 2 まで 1 ずつ増やしながら,\n        j を i + 1 から 要素数(Suuti) - 1 まで 1 ずつ増やしながら,\n            もし Suuti[i] *** Suuti[j] ならば\n                Suuti ← exchange(Suuti,***,***)\n            を実行する\n        を繰り返す\n    を繰り返す\n    Suuti を返す\nを実行する\n\nSuuti ← {5,3,8,6,2}\nSuuti と "をソートした結果" を表示する\n"↓" を表示する\nsort(Suuti) を表示する`, hint: `Suuti = [5, 3, 8, 6, 2]\n1回目のループ:\n    5(Suuti[0]) と 3(Suuti[1]) を比較\n        5は3よりも大きいので 5(Suuti[0]) と 3(Suuti[1]) を交換 → [3, 5, 8, 6, 2]\n    5(Suuti[1]) と 8(Suuti[2]) を比較\n        5は8よりも小さいので交換なし → [3, 5, 8, 6, 2]\n    8(Suuti[2]) と 6(Suuti[3]) を比較\n        8は6よりも大きいので 8(Suuti[2]) と 6(Suuti[3]) を交換 → [3, 5, 6, 8, 2]\n    8(Suuti[3]) と 2(Suuti[4]) を比較\n        8は2よりも大きいので 8(Suuti[3]) と 2(Suuti[4]) を交換 → [3, 5, 6, 2, 8]\n\n2回目のループ:\n    3(Suuti[0]) と 5(Suuti[1]) を比較\n        3は5よりも小さいので交換なし → [3, 5, 6, 2, 8]\n    5(Suuti[1]) と 6(Suuti[2]) を比較\n        5は6よりも小さいので交換なし → [3, 5, 6, 2, 8]\n    6(Suuti[2]) と 2(Suuti[3]) を比較\n        6は2よりも大きいので 6(Suuti[2]) と 2(Suuti[3]) を交換 → [3, 5, 2, 6, 8]\n\n3回目のループ:\n    3(Suuti[0]) と 5(Suuti[1]) を比較\n        3は5よりも小さいので交換なし → [3, 5, 2, 6, 8]\n    5(Suuti[1]) と 2(Suuti[2]) を比較\n        5は2よりも大きいので 5(Suuti[1]) と 2(Suuti[2]) を交換 → [3, 2, 5, 6, 8]\n\n4回目のループ:\n    3(Suuti[0]) と 2(Suuti[1]) を比較\n        3は2よりも大きいので 3(Suuti[0]) と 2(Suuti[1]) を交換 → [2, 3, 5, 6, 8]\n\n終了。出力: [2, 3, 5, 6, 8]\n\n(ア)...>, <, >=, <=, =, != のどれかが入ります。\n(イ)(ウ)... 配列の中のどの要素とどの要素を交換すれば良いかを考えてください。` },
        { title: `10進数から2進数の変換`, question: `次の会話文を読んで、以下のプログラムの空欄を埋めなさい。\n\nAさん: 10進数の23って、2進数だとどうなるんだっけ。\nBさん: 10111 だよ。2進数は右から1の位、2の位、4の位、8の位、16の位となっているよ。言い換えると、2の0乗の位、2の1乗の位、2の2乗の位、2の3乗の位、2の4乗の位となるよ。\nAさん: 難しいなあ。もう少しわかりやすい例はない？\nBさん: では、この世に1円玉、2円玉、4円玉、8円玉、16円玉...2のn乗円玉しかないことを考えるよ。このとき、23円はどのように払う？このとき大きい金額から考えて、より少ない枚数で払うことを考えてみてね。\nAさん: 16円玉が1枚、8円玉が0枚、4円玉が1枚、2円玉が1枚、1円玉が1枚かな？\nBさん: そう。枚数だけを並び替えるとどうなる？\nAさん: 10111。あ、これが23を2進数に変換した数か！なるほど。\nBさん: では、このアルゴリズムを表したプログラムを作成してみよう。`, output: `10進数の 23 を2進数に変換すると、 10111 です。`, func: `要素数(配列名)...\n引数に 配列 をとる。その配列の中にある要素数を戻り値とする関数。\n\nbekijo(kisu, shisu)...\n引数に kisu（基数）と shisu（指数）を取る。この関数は、kisu の shisu 乗の値を計算して戻り値として返す。具体的には、kisu を shisu 回掛け合わせた結果を返す。\n例: bekijo(2, 4) の場合は、16 を戻り値とする。\n\nhenkan_2shinsu(kazu)...\n引数に10進数の整数 kazu を取り、その整数を2進数に変換して返す関数。\n例: henkan_2shinsu(23) の場合は、"10111" を戻り値とする。`, code: `関数 bekijo(kazu,shisu)は\n    もし shisu = 0 ならば\n        1 を返す\n    を実行する\n    result ← 1\n    i を 1 から shisu まで 1 ずつ増やしながら,\n        result ← result × kazu\n    を繰り返す\n    result を返す\nを実行する\n\n関数 henkan_2shinsu(kazu)は\n    // 何の位から考えるかを判断\n    shisu ← 0\n    remaining ← kazu\n    bekijo(2,shisu) ≦ remaining の間,\n        shisu ← shisu + 1\n    を繰り返す\n    もし kazu = 0 ならば\n        "0" を返す\n    を実行する\n    result ← ""\n    i を shisu - 1 から 0 まで 1 ずつ減らしながら,\n        もし ****** ≧ ****** ならば\n            result ← result + "1"\n            remaining ← remaining - bekijo(2,i)\n        を実行し, そうでなければ\n            result ← result + "0"\n        を実行する\n    を繰り返す\n    result を返す\nを実行する\n\nkazu ← 23\n"10進数の " と kazu と "を2進数に変換すると、 " と henkan_2shinsu(kazu) と " です。" を表示する`, hint: `空欄の部分は、2進数変換の過程で、remaining（残りの値）と現在の bekijo(2, i) の値を比較する箇所です。以下のステップで理解できます。\n\n・remaining 変数は、現在の変換対象となる10進数の値です。最初は kazu（10進数の値）からスタートし、処理が進むごとに減っていきます。\n・bekijo(2, i) は、2の i 乗（すなわち2のべき乗）を表します。この値が、残りの値（remaining）と比較されます。\n・比較の目的は、remaining が現在の2のべき乗以上であれば、その2進数の桁に「1」を加え、remaining からそのべき乗の値を引きます。\n・もし remaining が現在の2のべき乗より小さい場合、その桁には「0」を加えます。` },
        { title: `パリティビット`, question: `次の会話文を読んで、以下のプログラムの空欄を埋めなさい。\n\nAさん: コンピュータって、指示に対して絶対にミスなく処理できるんだよね\nBさん: 実際はミスがあっても、修正できる能力を持っているんだ。例えばインターネットでデータのやり取りをするときは、「パリティビット」と呼ばれる仕組みを利用してミスを検知しているんだ。\nAさん: それはどういった仕組みですか？\nBさん: コンピュータ内部では、データは0と1の羅列にしているというのは習ったよね。例えば「10111」というデータがあると思うんだけど、その中に1の個数は何個入っているかな？\nAさん: 4個ですね。\nBさん: そう、1の個数が4個だね。このデータが送られるとき、パリティビットを使って、1の個数が「奇数」か「偶数」かをチェックするんだ。今回は奇数パリティを使っていると仮定しよう。データを送る前に、「通信は奇数パリティを使いましょう」と受信側と送信側で決めておく。実際にデータを送る際は、元のデータ「10111」の末尾にパリティを追加して、全体のデータの1の個数が奇数個になるようにしておくんだ。\nAさん: ということは、元のデータの1の個数が偶数だから、パリティビットは「1」になるんですね。\nBさん: その通り！ インターネットでは時々、データ送信中にビットが反転してしまうことがあるんだ。例えば元のデータにパリティビットを追加した「101111」というデータが1つでも間違って、例えば「101011」に変わったら、1の個数は4個になって偶数になるよね。\nAさん: あ、そうなると、奇数パリティには合わなくなりますね。\nBさん: その通り！ その場合、受信側はパリティビットを確認して、エラーを検知することができるんだ。間違っていたことがわかるから、データを再送信するように指示することができるんだよ。\nAさん: なるほど、ビットが入れ替わった場合でも、パリティビットでエラーが検出できるんですね。\nBさん: そうなんだ。パリティビットは簡単な仕組みだけど、データ通信でエラーを早期に検出するのにとても役立つんだよ。`, output: `元データ→{1,0,1,0,1}\nパリティビットを付与した結果→{1,0,1,0,1,0}`, func: `要素数(配列名)...\n引数に 配列 をとる。その配列の中にある要素数を戻り値とする関数。\n\ncount1(data)...\n引数として渡された配列（data）の中に含まれる1の個数を数える関数。配列の各要素をチェックし、戻り値としてdataの中にある1の個数を戻り値とする。\n例: data ← {1,0,1,1,1} のとき、count1(data) の戻り値は 4 となる。\n\n末尾に追加(data, value)\n引数である data (配列) の末尾に2つ目の引数 value を追加する。値が末尾に追加された配列を戻り値とする。\n例: data← {1,0,1,1,1}, value←1 のとき、末尾に追加(data, value) の戻り値は {1,0,1,1,1,1} である。\n\naddParity(data)\n引数で渡された配列 data に奇数パリティビットを追加する関数。奇数パリティビットを付与した新しい配列を戻り値とする。`, code: `関数 count1(data)は\n    kosu ← 0\n    // データの中にある1の個数を数える\n    i を 0 から 要素数(data) - 1 まで 1 ずつ増やしながら,\n        もし data[i] = *** ならば\n            kosu ← kosu + 1\n        を実行する\n    を繰り返す\n    kosu を返す\nを実行する\n\n関数 addParity(data)は\n    // 引数で指定した data に、奇数パリティビットを付与する\n    pari ← 0\n    kosu ← count1(data)\n    もし ****** = 0 ならば\n        末尾に追加(data,1)\n    を実行し, そうでなければ\n        末尾に追加(data,0)\n    を実行する\n    data を返す\nを実行する\n\n// 元データ\ndata ← {1,0,1,0,1}\n"元データ→" + data を表示する\n// パリティビットを付与する\ndata ← addParity(data)\n"パリティビットを付与した結果→" + data を表示する`, hint: `(ア)... この関数は、配列に入っている「1」の個数を数える関数です。繰り返しでは、配列1つ1つの要素を確認して、ある条件になれば個数に1を追加しています。このある条件が(ア)に入ります。\n\n(イ)... 奇数パリティとして1を付与する条件が(イ)です。1を付与するのは、個数がどのような状態の時でしたでしょうか。問題文を確認しましょう。最後に、その条件をプログラミングでどのように表せばよかったでしょうか。中級の第１問目を参考にしてください。` },
    ]
};