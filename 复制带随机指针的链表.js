// https://leetcode-cn.com/problems/copy-list-with-random-pointer/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  // head: A->B->C->D
  if (head === null) {
    return null;
  }

  // head 链表中插入子节点：A->A'->B->B'->C-C'->D->D'
  for (let node = head; node !== null; node = node.next.next) {
    let newNode = new Node(node.val, node.next, null);
    node.next = newNode;
  }

  // 子节点插入随机节点，S-S' 一一对应
  for (let node = head; node !== null; node = node.next.next) {
    let newNode = node.next;
    newNode.random = node.random !== null ? node.random.next : null;
  }

  const headNew = head.next;
  for (let node = head; node !== null; node = node.next.next) {
    headNew.next
  }
}