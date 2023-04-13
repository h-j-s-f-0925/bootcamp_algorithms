// メモ化
//メモ化とは、一度計算した結果を保存しておき、同じ計算を繰り返さないようにする

//1000個の要素を持つ配列memoを定義
const memo = Array(1000);

export const fibonacciMemo = (n: number): number => {
  //nが1以下の場合は、nをそのまま返して終了
  if (n <= 1) {
    return n;
  }
  //memo[n]が未定義の場合は、fibonacciMemo関数に(n-1)と(n-2)を渡して、それぞれの戻り値を足したものを計算し、memo[n]に保存
  if (memo[n] === undefined) {
    memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  }

  return memo[n];
};

// fibonacciMemo(6)を呼び出す
// memo[6]が未定義なので、fibonacciMemo(5) + fibonacciMemo(4)を計算してmemo[6]に保存する
// memo[5]が未定義なので、fibonacciMemo(4) + fibonacciMemo(3)を計算してmemo[5]に保存する
// memo[4]が未定義なので、fibonacciMemo(3) + fibonacciMemo(2)を計算してmemo[4]に保存する
// memo[3]が未定義なので、fibonacciMemo(2) + fibonacciMemo(1)を計算してmemo[3]に保存する
// memo[2]が未定義なので、fibonacciMemo(1) + fibonacciMemo(0)を計算してmemo[2]に保存する
// memo[1]が1なので、1を返す
// memo[0]が0なので、0を返す
// memo[2] = memo[1] + memo[0] = 1 + 0 = 1
// memo[1]が1なので、1を返す
// memo[3] = memo[2] + memo[1] = 1 + 1 = 2
// memo[2]が1なので、1を返す
// memo[4] = memo[3] + memo[2] = 2 + 1 = 3
// memo[3]が2なので、2を返す
// memo[5] = memo[4] + memo[3] = 3 + 2 = 5
// memo[4]が3なので、3を返す
// memo[6] = memo[5] + memo[4] = 5 + 3 = 8
// memo[6]が8なので、8を返す
