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

/**
 *解法1：运用队列进行层序遍历交换左右节点的位置
 *
 */
function Queue() {
  let items = [];
  this.push = function (item) {
    items.push(item);
  };
  this.pop = function () {
    return items.pop();
  };
  this.isEmpty = function () {
    return items.length === 0;
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

    // 交换位置
    node.left = right;
    node.right = left;
    // 如果不为空推入栈中
    if (right !== null) {
      queue.push(right);
    }
    if (left !== null) {
      queue.push(left);
    }
  }

  return root;
};

/*
  解法2：前序遍历递归的方法 中序后续的递归方法都一样
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return root;

  // 记录节点
  let left = root.left;
  let right = root.right;

  // 交换位置
  root.left = right;
  root.right = left;

  invertTree(left);
  invertTree(right);

  return root;
};
