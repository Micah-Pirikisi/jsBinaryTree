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
    const root = new Node(array[midIndex]);

    root.left = this.buildTree(array.slice(0, midIndex));
    root.right = this.buildTree(array.slice(midIndex + 1));

    return root;
  }

  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        }
      };
      return searchTree(node); 
    }
  }
}
