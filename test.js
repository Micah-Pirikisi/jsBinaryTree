import { Node, Tree} from './index.js'; 

// Helper to generate an array of random numbers < 100
function getRandomArray(length = 10, max = 100) {
  const arr = [];
  while (arr.length < length) {
    const num = Math.floor(Math.random() * max);
    if (!arr.includes(num)) arr.push(num); // no duplicates
  }
  return arr;
}

// Helper to print tree values using a traversal
function printTraversal(tree) {
  console.log("Level Order:");
  tree.levelOrderForEach((node) => console.log(node.data));

  console.log("In Order:");
  tree.inOrderForEach((node) => console.log(node.data));

  console.log("Pre Order:");
  tree.preOrderForEach((node) => console.log(node.data));

  console.log("Post Order:");
  tree.postOrderForEach((node) => console.log(node.data));
}

// Create initial tree
const randomArray = getRandomArray(10); // or 15, or any number
console.log("Initial Array:", randomArray);

const tree = new Tree(randomArray);

// Check if it's balanced
console.log("Balanced?", tree.isBalanced()); // true ✅

// Print all traversals
console.log("\nTraversals before unbalancing:");
printTraversal(tree);

// Unbalance the tree by inserting numbers > 100
tree.insert(120);
tree.insert(130);
tree.insert(140);
tree.insert(150);
tree.insert(160);

console.log("\nAfter inserting big numbers...");
console.log("Balanced?", tree.isBalanced()); // false ❌

// Rebalance it
tree.rebalance();

console.log("\nAfter rebalancing...");
console.log("Balanced?", tree.isBalanced()); // true ✅

console.log("\nTraversals after rebalancing:");
printTraversal(tree);