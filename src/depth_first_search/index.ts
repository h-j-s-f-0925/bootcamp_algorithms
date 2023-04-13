export interface FileSystemNode {
  name: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

export const depthFirstSearch = (
  root: FileSystemNode,
  target: string
): boolean => {
  // スタックを初期化し、rootをpushする
  const stack: FileSystemNode[] = [root];

  // スタックが空になるまでループ
  while (stack.length > 0) {
    // スタックの末尾からノードをpopする
    const node = stack.pop();

    // ノードがundefinedでなければ以下を実行
    if (node) {
      // ディレクトリであれば、その中のファイルを検索するために children を stack に追加する
      if (node.isDirectory && node.children) {
        for (const child of node.children) {
          stack.push(child);
        }
      }
      // ファイルであり、目標のファイル名であれば true を返す
      else if (!node.isDirectory && node.name === target) {
        return true;
      }
    }
  }

  // 見つからない場合は false を返す
  return false;
};
