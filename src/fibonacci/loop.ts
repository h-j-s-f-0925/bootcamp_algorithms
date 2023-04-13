//繰り返し処理

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
export const fibonacciLoop = (n: number): number => {
  let a = 0;
  let b = 1;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }

  return a;
};

// 1回目: a=0, b=1, temp=0 → a=1, b=1
// 2回目: a=1, b=1, temp=0 → a=1, b=2
// 3回目: a=1, b=2, temp=1 → a=2, b=3
// 4回目: a=2, b=3, temp=1 → a=3, b=5
// 5回目: a=3, b=5, temp=2 → a=5, b=8
// 6回目: a=5, b=8, temp=3 → a=8, b=13
