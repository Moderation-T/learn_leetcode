/**
 *題目：翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：

谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/invert-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function Queue() {
  let items = [];
  this.push = function (item) {
    items.push(item);
  };
  this.pop = function () {
    return items.pop();
  };
  this.top = function () {
    return items[items.length - 1];
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.size = function () {
    return items.length;
  };
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return root;

  let queue = new Queue();
  queue.push(root);

  while (!queue.isEmpty()) {
    let node = queue.pop();
    // 储存原始的节点位置
    let left = node.left;
    let right = node.right;

    if (right !== null) {
      node.left = right; // 交换位置
      queue.push(right); // 推入栈中
    } else {
      node.left = null;
    }

    if (left !== null) {
      node.right = left; // 交换位置
      queue.push(left); // 推入栈中
    } else {
      node.right = null;
    }
  }

  return root;
};
