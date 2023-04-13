export const fibonacciDp = (n: number): number => {
  // dpという配列を定義して、最初の2つの要素に0と1を設定
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    // iが2からnになるまで、dp[i-1]とdp[i-2]を足したものをdp配列に追加
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp[n];
};

//fibonacciDp(6)
// dp = [0, 1]
// for (let i = 2; i<=6; i++)
// i = 2
// dp[2] = dp[1] + dp[0] = 1 + 0 = 1
// dp = [0, 1, 1]
// i = 3
// dp[3] = dp[2] + dp[1] = 1 + 1 = 2
// dp = [0, 1, 1, 2]
// i = 4
// dp[4] = dp[3] + dp[2] = 2 + 1 = 3
// dp = [0, 1, 1, 2, 3]
// i = 5
// dp[5] = dp[4] + dp[3] = 3 + 2 = 5
// dp = [0, 1, 1, 2, 3, 5]
// i = 6
// dp[6] = dp[5] + dp[4] = 5 + 3 = 8
// dp = [0, 1, 1, 2, 3, 5, 8]
// dp[6]が8なので、8を返す

//fibonacciDp(6)の戻り値は8
