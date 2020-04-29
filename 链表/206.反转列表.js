/* 
解法1： 递归算法
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList1 = function (head) {
  // 没有节点或者只有一个节点的时候返回 head
  if (head === null || head.next === null) return head;
  const newHead = reverseList(head.next);
  head.next.next = head; //反转前 2 的节点指向 1 的节点
  head.next = null; // 1 的节点指向空节点F
  return newHead;
};

/* 
解法2 ：迭代算法
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let newHead = null; // 反转链表最开始是 null
  // 没有节点或者只有一个节点的时候返回 head
  if (head === null || head.next === null) {
    return head;
  }

  while (head !== null) {
    const tmp = head.next; // 先让一个变量指向最开始的 head.next
    head.next = newHead; // 然后 head 的 next 指向反转列表
    newHead = head; // 反转列表的 newHead 变成反转过来的 之前的head
    head = tmp; // tmp 指向还未反转节点的 next 节点
  }

  return newHead;
};
