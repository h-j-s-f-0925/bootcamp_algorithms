export const fibonacciRecursive = (n: number): number => {
  //まずnが1以下の場合は、nをそのまま返して終了
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

// 例えば、fibonacciRecursive(6)を呼び出すと、以下のようになります。

// fibonacciRecursive(6)
// fibonacciRecursive(5) + fibonacciRecursive(4)
// fibonacciRecursive(4) + fibonacciRecursive(3) + fibonacciRecursive(3) + fibonacciRecursive(2)
// fibonacciRecursive(3) + fibonacciRecursive(2) + fibonacciRecursive(2) + fibonacciRecursive(1) + fibonacciRecursive(2) + fibonacciRecursive(1) + fibonacciRecursive(1) + fibonacciRecursive(0)
// fibonacciRecursive(2) + fibonacciRecursive(1) + fibonacciRecursive(1) + fibonacciRecursive(0) + fibonacciRecursive(1) + fibonacciRecursive(0) + 1 + 0
// fibonacciRecursive(1) + 1 + 1 + 0 + 1 + 0 + 1 + 0
// 1 + 1 + 1 + 0 + 1 + 0 + 1
// 3 + 1 + 0 + 1
// 2
