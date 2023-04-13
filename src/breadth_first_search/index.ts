export const breadthFirstSearch = (
  relationships: number[][],
  startUser: number,
  targetUser: number
): number => {
  const queue: number[] = [startUser]; // 探索対象のノードを保存するキュー
  const visited: boolean[] = new Array(relationships.length).fill(false); // 各ノードが訪問済みかどうかを保存する配列
  let steps = 0; // 出発点からの距離を保存する変数
  //、キューが空になるまで繰り返し
  while (queue.length > 0) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      // 現在の探索対象のノード currentNode をキューから取り出し
      const currentNode = queue.shift()!; //配列の先頭から要素を取り出し、それを削除する
      //! は TypeScript において、null または undefined でないことを表します。
      //currentNode が訪問済みであることをマーク
      visited[currentNode] = true;

      if (currentNode === targetUser) {
        return steps; // 目標ノードに到達したら、出発点からの距離を返す
      }
      for (const friend of relationships[currentNode]) {
        if (!visited[friend]) {
          queue.push(friend);
        }
      }
    }
    steps++; // 1 ステップ進める
  }

  return -1; // 目標ノードに到達できなかった場合は、-1 を返す
};
