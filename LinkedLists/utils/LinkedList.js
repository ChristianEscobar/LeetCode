class ListNode {
  constructor(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
  }
}

const createList = function createList(arr) {
  let head = null;
  let prevNode = null;
  for (let i = 0; i < arr.length; i += 1) {
    const curNode = new ListNode(arr[i]);
    if (!head) {
      head = curNode;
      prevNode = head;
    } else {
      prevNode.next = curNode;
    }

    prevNode = curNode;
  }

  return head;
};

module.exports = {
  ListNode,
  createList,
};
