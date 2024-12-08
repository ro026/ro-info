const questions = {
    beginner: [
        { title: `変数の値を表示`, question: `変数 a に 10 を代入して表示をしてください。`, output: `aの値は 10 です`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `a *** 10\n表示する("aの値は",a, "です")`, hint: `a = 20 という命令は、変数 a に 20 という値を代入しています。` },
        { title: `変数の値を計算`, question: `変数 a の値と b の値を掛け合わせた値を表示してください。`, output: `cの値は 200 です`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `a = 10\nb = 20\nc = *****\n表示する("cの値は",c, "です")`, hint: `関数 表示する をみてみると、cの値を表示するようにしています。掛け算は 「*」という演算子を使えば計算できます。` },
        { title: `センチメートルをメートルに変換`, question: `変数 centimetre に、センチ単位の長さが入っています。それをメートルに変換して表示してください。`, output: `124 cmは、 1.24 mです。`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `centimetre = 124\nmetre = *****\n表示する(centimetre, "cmは、", metre, "mです。" )`, hint: `a / b を用いると、aをbで割った数が計算できます。` },
        { title: `合格？不合格？`, question: `変数 score にテストの点数が入っている。このテストの点数が80点以上なら合格、それ以外なら不合格を表示してください。`, output: `79点なので不合格です。`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `score = 79\nもし ***** ならば:\n    表示する(score, "点なので合格です。")\nそうでなければ:\n    表示する(score, "点なので不合格です。")`, hint: `a > b → a は b より大きい\na >= b → a は b 以上\na < b → a は b より小さい\na <= b → a は b 以下\na == b → a と b は等しい\na != b → a と b は等しくない` },
        { title: `偶数？奇数？`, question: `変数 kazu1 に入っている値が偶数か奇数かを判定してください。`, output: `kazu1は偶数です。`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `kazu1 = 16\n\nもし *** == 0 ならば:\n    表示する("kazu1は偶数です")\nそうでなければ:\n    表示する("kazu1は奇数です")`, hint: `偶数は、2で割ったあまりが0になると言い換えることができます。\n演算子 「%」を使うとあまりを出すことができます。例えば、「a % b」は「a を b で割ったあまり」が出てきます。` },
        { title: `「Hello, World!」を5回表示しよう`, question: `「Hello, World!」を5回表示してください。`, output: `Hello, World!\nHello, World!\nHello, World!\nHello, World!\nHello, World!`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `i を 0 から *** まで 1 ずつ増やしながら繰り返す:\n    表示する("Hello, World!")`, hint: `i の値は繰り返しを行うたびに 1→2→3→... と1ずつ増えていく。1回目の値は i=0、2回目の値は i=1、...となるので、5回目の時は i の値がどうなっているかを考えよう。` },
        { title: `1から順番に加算する`, question: `1 + 2 + 3 + 4 + 5 の計算結果を、繰り返し（ループ）を使って計算してください。`, output: `15`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `sum = 0\ni を 1 から 5 まで 1 ずつ増やしながら繰り返す:\n    sum = *****\n    \n表示する(sum)`, hint: `i は1から5までの値を順に取ります。繰り返しの中で sum に 現在の値 i を足すことで、合計を求めることができます。` },
        { title: `配列の要素を取得しよう`, question: `変数 Namae に入っている7つの都道府県の名前から「岩手県」を表示してください。`, output: `岩手県`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `Namae = ["北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県"]\n表示する(Namae[***])`, hint: `配列は0から始まる添字を使って、特定の要素を取得します。つまり、Namae[0]は「北海道」を取得します。` },
        { title: `配列の要素を全て表示しよう`, question: `変数 Namae に入っている7つの都道府県の名前を1行ずつすべて表示してください。`, output: `北海道\n青森県\n岩手県\n秋田県\n宮城県\n山形県\n福島県`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `Namae = ["北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県"]\ni を 0 から *** まで 1 ずつ増やしながら繰り返す:\n    表示する(Namae[***])`, hint: `最後の添字はいくつでしょう。添字は0から始まります。` },
        { title: `配列の中の合計を求めよう`, question: `変数 Kazu の中に入っている数値をすべて合計した値を表示してください。`, output: `38`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `Kazu = [2, 2, 9, 8, 4, 7, 6]\nsum = 0\ni を 0 から 6 まで 1 ずつ増やしながら繰り返す:\n    sum = *****\n    \n表示する(sum)`, hint: `合計される値は、変数 sum に入ります。繰り返しで、配列 Kazu の要素を取り出して合計に加えます。` },
        { title: `数字の2乗を計算する関数を作ろう`, question: `整数を1つ引数として受け取り、その2乗を計算して返す関数 二乗(数値) を作成してください。`, output: `36\n169`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。\n\n二乗(数値)...\n整数を1つ引数として受け取り、その2乗を計算して返す。`, code: `関数 二乗(num):\n    ***** を返す\n\n表示する(二乗(6))\n表示する(二乗(13))`, hint: `関数の中で、num を使ってその2乗を計算します。6の二乗は、何×何をしているでしょうか。` },
        { title: `文字列を繰り返して出力する関数`, question: `文字列と繰り返し回数を引数として受け取り、その文字列を指定された回数だけ繰り返した結果を返す関数 繰り返し文字(文字, 回数) を作成してください。`, output: `りんご\nりんご\nりんご\nりんご`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。\n\n繰り返し文字(文字, 回数) ...\n文字列と繰り返し回数を引数として受け取り、その文字列を指定された回数だけ繰り返した結果を返す。`, code: `関数 繰り返し文字(moji, kaisu):\n    i を 0 から ***** まで 1 ずつ増やしながら繰り返す:\n        表示する(***)\n    \nfood = "りんご"\nkai = 4\n繰り返し文字(***, ***)`, hint: `①繰り返し回数は引数 kaisu で指定されています。1回目のループ i=0、2回目のループ i=1、ということを考えてみてください。\n②表示したい文字列は引数 moji で指定されています。\n③関数を呼び出している側について、表示したい文字列は food 、繰り返したい回数は kai に代入されています。` },
    ],
    intermediate: [
        { title: `3つの数の平均`, question: `3つの数(kazu1, kazu2, kazu3)が与えられています。これらの数の平均を計算するプログラムを作成してください。`, output: `3つの数の平均は 7.666666666666667 です`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `kazu1 = 4\nkazu2 = 7\nkazu3 = 12\nheikin = *****\n表示する("3つの数の平均は",heikin,"です")`, hint: `4と7と12の平均の出し方を考えてみましょう。まずは4+7+12をしてから、3で割りますよね？` },
        { title: `秒数に変換`, question: `時間(変数 hour)、分(変数 minute)、秒(変数 second)が与えられています。これを秒数に変換してください。`, output: `2 時間 12 分 17 秒は、 7937 秒です。`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。`, code: `hour = 2\nminute = 12\nsecond = 17\nbyou = *****\n表示する(hour , "時間" , minute , "分" , second , "秒は、",byou , "秒です。")`, hint: `1分は60秒、2分は120秒ですよね。では12分は何秒ですか？それはどのように出しましたか？` },
        { title: `2桁の数字かどうかを判定`, question: `関数「ふた桁判定」を完成させてください。もし2桁の数字であれば「2桁の数字です」を表示し、そうでなければ「2桁の数字ではありません」と表示するような関数です。`, output: `97 は、2桁の数字です\n1 は、2桁の数字ではありません\n123 は、2桁の数字ではありません`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。\n\nふた桁判定(数値)...\n整数を1つ引数として受け取り、その数値が2桁の数値かどうかを返す。`, code: `関数 ふた桁判定(suuti):\n    もし ***** and ***** ならば:\n        表示する(suuti, "は、2桁の数字です")\n    そうでなければ:\n        表示する(suuti, "は、2桁の数字ではありません")\n\nふた桁判定(97)\nふた桁判定(1)\nふた桁判定(123)`, hint: `9は1桁の数値、10から2桁の数値です。なので、「10以上である」というのが最初の条件です。プログラムは、「10 ≦ suuti ≦ 99」という連続した書き方ができないので、2つに分けて書く必要があります。` },
    ],
    advanced: [
        { title: `○時間○分○秒の形に変換`, question: `秒数(変数byou)が与えられています。これを、○時間○分○秒の形に変換してください。`, output: `7937 秒は、 2 時間 12 分 17 秒です。`, func: `表示する(文字列)...\n()内に変数を入れると、変数の値を出力する。カンマ区切りで文字列や数値を連結して表示することができる。\n\n切り捨て(数値)...\n整数を1つ引数として受け取り、その値を切り捨てた値を返す。`, code: `byou = 7937\n\nhour = 切り捨て(*****)\nminute = 切り捨て(*****)\nsecond = *****\n\n表示する(byou , "秒は、",hour , "時間" , minute , "分" , second , "秒です。")`, hint: `1分は60秒、1時間は3600秒です。例えば3700秒は、まず3700÷3600をすると、1あまり100となります。1は時間の部分、あまった100は秒なので、この100秒について分と秒を計算してあげれば良いです。\n\na / b は、a÷bの商を計算します。\na % b は、 a÷bのあまりを計算します。` },
    ]
};