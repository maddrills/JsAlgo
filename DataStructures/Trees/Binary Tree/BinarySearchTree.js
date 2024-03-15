"use strict";

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      // then insert the first node
      this.root = newNode;
      return newNode;
    }
    // a traverser to travers the node
    let currentNode = this.root;
    while (true) {
      //look right
      if (value > currentNode.value) {
        //if the right node is null
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        //continue to next right
        currentNode = currentNode.right;
      }
      //look left
      else if (value < currentNode.value) {
        //if the left node is null put the value there
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        //continue to next left
        currentNode = currentNode.left;
      } else {
        return "node is the same";
      }
    }
  }

  lookup(value) {
    //check if node is empty
    if (!this.root) {
      //if null
      return undefined;
      //else travers the node
    } else {
      let traverser = this.root;
      while (true) {
        //move right
        if (value > traverser.value) {
          //inser if the right points to null
          if (!traverser.right) {
            // return node not found
            return `Node Not found with last in search: ${traverser.value}`;
          }
          traverser = traverser.right;
        }
        //move left
        else if (value < traverser.value) {
          if (!traverser.left) {
            return `Node Not found with last in search: ${traverser.value}`;
          }
          traverser = traverser.left;
        } else {
          return `node exists ${traverser.value}`;
        }
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
console.log(tree.insert(1));
//tree.remove(170);
JSON.stringify(traverse(tree.root));
console.log(tree.lookup(20));
console.log(tree.lookup(140));
//     9
//  4     20
//1  6  15  170

console.log("node is", tree.remove(170));
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
