// 昇順に並べられた宝石のリストを持っており、各宝石には一意の ID 番号が割り振られています。あなたの仕事は、指定された ID 番号を持つ宝石がリストに存在するかどうかを調べることです。

// 指定された ID 番号の宝石がリストに存在するかどうかを判定する TypeScript プログラムを作成してください。リスト内に指定された ID 番号の宝石が存在すればそのインデックスを、存在しなければ-1 を返すように実装してください。

// 配列: 整数の配列（昇順に整列されており、要素数は 1 以上 1000000 以下）
// 目標値: 探索対象の整数（-10000000000 以上 10000000000 以下）
export const binarySearch = (array: number[], target: number): number => {
  //     let left = 0;
  //     let right = 1000000;
  //     while (left <= right){
  //         // leftとrightの中央値を求める
  //         let mid = Math.floor((left + right)/2);
  //         // 中央値にある要素が目的の値かどうかを判断する
  //         if (array[mid] === target){
  //             return mid;
  //         }
  //         // 目的の値が中央値の左側にある場合、探索範囲を左半分に絞る
  //         else if (target <= array[mid]){
  //             right = mid;
  //         }
  //         else{
  //             // 目的の値が中央値の右側にある場合、探索範囲を右半分に絞る
  //             left = mid + 1;
  //         }
  //     }
  //     return -1;
  // };

  // 探索配列の左端と右端のindex
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    // 探索配列の中間のindex
    const mid = Math.floor((left + right) / 2);

    if (target < array[mid]) {
      // 探索配列の中間の要素よりtargetが小さい場合、探索配列の右端を変更する。
      // 次回の繰り返し処理では今回の探索配列の左半分を探索する
      right = mid - 1;
    } else if (target > array[mid]) {
      // 探索配列の中間の要素よりtargetが大きい場合、探索配列の左端を変更する。
      // 次回の繰り返し処理では今回の探索配列の右半分を探索する
      left = mid + 1;
    } else {
      //探索配列の中間の要素がtargetと等しい場合、それを返す。
      return array[mid - 1];
    }
  }

  // targetがarrの中にない場合は、-1を返す
  return -1;
};

// let を使うと、ブロックスコープ内で変数を定義
// let right = mid; と let left = mid + 1; で定義した変数は、ブロックスコープを抜けると破棄されてしまいます。これでは、while ループが次に進んだときに、その変数を再利用できなくなくなる。
