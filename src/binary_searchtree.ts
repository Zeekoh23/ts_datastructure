class Node2<T> {
  left: Node2<T> | null;
  right: Node2<T> | null;
  value: T;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: Node2<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new Node2(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        //left
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          //keeps looping until we find a node that doesn't have a left
          currentNode = currentNode.left;
          //return this;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          //keeps looping until we find a node that doesn't have a right
          currentNode = currentNode.right;
          //return this;
        }
        // return this;
      }
    }
  }
  lookup(value: T) {
    if (!this.root) {
      return false;
    }
    let currentNode: Node2<T> | null = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value: T) {
    if (!this.root) {
      return false;
    }
    let currentNode: Node2<T> | null = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        //we have a match, get to work
        //option 1: no right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //ifparent > current value, make current left child a child of parent
            if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (parentNode.value < currentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          //option 2: right child doesn't have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            //if parent > current, make right child of the left the parent
            if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (parentNode.value < currentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
          //option 3: right child that has a left child
        } else {
          //find the right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //parents left subtree is now leftmosts right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (parentNode.value > currentNode.value) {
              parentNode.left = leftmost;
            } else if (parentNode.value < currentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = []; //am array to insert this item in order of bfs
    let queue: any = []; //keep track of the level we are to access their children

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift(); //shift returns and remove the first element in the queue. we take the first item in the queue, this queue picks the first person in the queue or to grab the current node
      //console.log(currentNode?.value);
      list.push(currentNode?.value); //adds the value to the list
      if (currentNode?.left) {
        queue.push(currentNode.left); //we add the currentnode.left to the queue which adds memory
      }
      if (currentNode?.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFirstSearchRecursive(queue: any, list: number[]): any {
    if (queue.length === 0) {
      return list;
    }
    let currentNode = queue.shift(); //grab the current node
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  }

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }

  traverse(node: Node2<T> | null) {
    const tree: any = { value: node!.value };
    tree.left = node!.left === null ? null : this.traverse(node!.left);
    tree.right = node!.right === null ? null : this.traverse(node!.right);
    return tree;
  }
}

function traverseInOrder(node: any, list: number[]) {
  //console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node: any, list: number[]) {
  // console.log(node.value);
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node: any, list: number[]) {
  //console.log(node.value);
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(12);
tree.insert(14);
console.log(tree.DFSPostOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSInOrder());
//console.log(tree.breadthFirstSearchRecursive([tree.root], []));
//console.log(tree.breadthFirstSearch());
//console.log();
//console.log(tree.lookup(15));
//JSON.stringify(tree.traverse(tree.root));
