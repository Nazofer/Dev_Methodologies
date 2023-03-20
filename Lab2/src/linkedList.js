const ListNode = require('./listNode.js');

class LinkedList extends Array {
  append(value) {
    const node = new ListNode(value);
    this.push(node);
  }

  getLength() {
    return this.length;
  }

  getByIndex(index) {
    if (index < 0 || index > this.length) throw new Error('Invalid index');
    return this[index].value;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) throw new Error('Invalid index');
    const node = new ListNode(value);
    this.splice(index, 0, node);
  }

  findFirstByValue(value) {
    let nodeToFind;
    for (const node of this) {
      if (node.value === value) {
        nodeToFind = node;
        break;
      }
    }
    return !!nodeToFind ? this.indexOf(nodeToFind) : -1;
  }

  findLastByValue(value) {
    let nodeToFind;
    for (const node of this) {
      if (node.value === value) nodeToFind = node;
    }
    return !!nodeToFind ? this.lastIndexOf(nodeToFind) : -1;
  }

  clear() {
    while (this.length > 0) {
      this.pop();
    }
  }

  deleteByIndex(index) {
    if (index < 0 || index > this.length) throw new Error('Invalid index');
    const toDelete = this.getByIndex(index);
    this.splice(index, 1);
    return toDelete;
  }

  deleteAll(value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i].value === value) {
        this.splice(i, 1);
        i--;
      }
    }
  }

  printList() {
    const output = [];
    for (const node of this) {
      output.push(`${this.indexOf(node)}. ${node.value}`);
    }
    console.log(output.join(' => '));
  }

  clone() {
    const clone = new LinkedList();
    for (const node of this) {
      clone.append(node.value);
    }
    return clone;
  }

  reverseList() {
    this.reverse();
  }

  extend(list) {
    for (const node of list) {
      this.append(node.value);
    }
  }
}

module.exports = LinkedList;
