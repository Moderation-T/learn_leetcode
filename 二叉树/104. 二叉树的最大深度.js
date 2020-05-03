/**
 *题目：给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */

/**
 * 解法1： 层序遍历求二叉树高度
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function Queue() {
  const items = [];

  this.enqueue = function (item) {
    items.push(item);
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.size = function () {
    return items.length;
  };
}

var maxDepth = function (root) {
  if (root === null) return 0;

  let queue = new Queue();
  queue.enqueue(root);

  let currentQueueSize = 1;
  let height = 0;

  while (!queue.isEmpty()) {
    let node = queue.dequeue();

    currentQueueSize--;

    if (node.left !== null) {
      queue.enqueue(node.left);
    }
    if (node.right !== null) {
      queue.enqueue(node.right);
    }

    if (currentQueueSize === 0) {
      currentQueueSize = queue.size();
      height++;
    }
  }

  return height;
};
