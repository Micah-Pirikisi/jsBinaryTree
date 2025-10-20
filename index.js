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
}
