class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    const sortedArray = array.sort((a, b) => a - b);
    const uniqueArray = this.removeDuplicates(sortedArray);

    this.root = this.buildTree(uniqueArray);
  }

  removeDuplicates(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array[i - 1]) {
        result.push(array[i]);
      }
    }
    return result;
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const midIndex = Math.floor(array.length / 2);
    const root = new Node(array[mid[Index]]);

    root.left = this.buildTree(array.slice(0, midIndex));
    root.right = this.buildTree(array.slice(midIndex + 1));

    return root;
  }
}
