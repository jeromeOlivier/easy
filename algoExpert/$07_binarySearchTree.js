const util = require('util');

/*
 Write a function that takes in a Binary Search Tree (BST) and a target
 integer value and returns the closest value to that target value contained in
 the BST.

 You can assume that there will only be one closest value.

 Each BST node has an integer value, a left child node, and a right child node.
 A node is said to be a valid BST node if and only if it satisfies the BST
 property: its value is strictly greater than the values of every node to its
 left; its value is less than or equal to the values of every node to its right;
 and its children nodes are either valid BST nodes themselves or None null.

              10
            /     \
           5      15
         /   \   /   \
        2     5 13   22
       /           \
      1            14

 target = 12
 solution = 13
*/

function findClosestValueInBst(tree, target) {
    return search(tree, target, tree.value);
}

// target: 17
// closest: 15

function search(tree, target, closest) {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value))
        closest = tree.value;
    if (target < tree.value)
        return search(tree.left, target, closest);
    else if (target > tree.value)
        return search(tree.right, target, closest);
    else
        return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree = new BST(10);

tree.left = new BST(5);
tree.right = new BST(15);

tree.left.left = new BST(2);
tree.left.right = new BST(5);

tree.right.left = new BST(13);
tree.right.right = new BST(22);

tree.left.left.left = new BST(1);
tree.left.left.right = new BST(3);
tree.right.left.right = new BST(14);
tree.right.left.left = new BST(11);

console.log(util.inspect(tree, { showHidden: false, depth: null, colors: true}));

const solution = findClosestValueInBst(tree, 17);
console.log(solution);